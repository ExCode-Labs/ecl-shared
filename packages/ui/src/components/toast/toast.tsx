import { AlertCircle, CheckCircle2, Info, TriangleAlert, X } from "lucide-react";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { cn } from "../../lib/utils";

import {
  toastDescriptionVariants,
  toastIconVariants,
  toastTitleVariants,
  toasterVariants,
  toastVariants,
  toastProgressVariants,
  toastActionVariants,
  toastContentVariants,
  toastCloseVariants,
} from "./toast.styles";

import type {
  ToastData,
  ToastOptions,
  ToastProps,
  ToastProviderProps,
  ToasterProps,
  ToastVariant,
} from "./toast.types";
import { ToastContext } from "./toast.context";
import { useToast } from "./use-toast";

const toastIcons: Record<ToastVariant, typeof Info> = {
  default: Info,
  success: CheckCircle2,
  error: AlertCircle,
  warning: TriangleAlert,
  info: Info,
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  const toast = useCallback((options: ToastOptions) => {
    const id = crypto.randomUUID();

    setToasts((current) => [
      ...current,
      {
        id,
        ...options,
      },
    ]);

    return id;
  }, []);

  const contextValue = useMemo(
    () => ({
      toasts,
      toast,
      dismiss,
      dismissAll,
    }),
    [toasts, toast, dismiss, dismissAll],
  );

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
}
export function Toast({
  id,
  title,
  description,
  variant = "default",
  duration = 5000,
  action,
  onDismiss,
}: ToastProps) {
  const [isPaused, setIsPaused] = useState(false);

  /**
   * Remaining time is stored separately from the original duration.
   * This allows the Toast to resume exactly where it was paused.
   */
  const remainingRef = useRef(duration);

  /**
   * Stores the timestamp when the current countdown starts.
   */
  const startedAtRef = useRef<number | null>(null);

  /**
   * Stores the active timeout.
   */
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Start or resume the countdown.
   */
  const startTimer = useCallback(() => {
    /**
     * duration = 0 means the Toast should stay visible
     * until manually dismissed.
     */
    if (duration <= 0) {
      return;
    }

    /**
     * Do not create multiple timers.
     */
    if (timerRef.current) {
      return;
    }

    /**
     * Nothing left to wait.
     */
    if (remainingRef.current <= 0) {
      onDismiss(id);
      return;
    }

    startedAtRef.current = Date.now();

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      startedAtRef.current = null;
      remainingRef.current = 0;

      onDismiss(id);
    }, remainingRef.current);
  }, [duration, id, onDismiss]);

  /**
   * Pause the countdown and calculate remaining time.
   */
  const pauseTimer = useCallback(() => {
    if (duration <= 0) {
      return;
    }

    if (!timerRef.current || startedAtRef.current === null) {
      return;
    }

    const elapsed = Date.now() - startedAtRef.current;

    remainingRef.current = Math.max(remainingRef.current - elapsed, 0);

    clearTimeout(timerRef.current);

    timerRef.current = null;
    startedAtRef.current = null;
  }, [duration]);

  /**
   * Start the timer when Toast is mounted.
   */
  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [startTimer]);

  /**
   * Pause when mouse enters the Toast.
   */
  const handleMouseEnter = () => {
    pauseTimer();
    setIsPaused(true);
  };

  /**
   * Resume when mouse leaves the Toast.
   */
  const handleMouseLeave = () => {
    setIsPaused(false);
    startTimer();
  };

  /**
   * Dismiss Toast manually.
   */
  const handleDismiss = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    onDismiss(id);
  };

  const Icon = toastIcons[variant];

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        toastVariants({
          variant,
        }),
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toast Icon */}
      <Icon
        aria-hidden="true"
        className={cn(
          toastIconVariants({
            variant,
          }),
        )}
      />

      {/* Toast Content */}
      <div className={cn(toastContentVariants())}>
        {title && <div className={cn(toastTitleVariants())}>{title}</div>}

        {description && <div className={cn(toastDescriptionVariants())}>{description}</div>}

        {action && (
          <button
            type="button"
            className={cn(toastActionVariants())}
            onClick={() => {
              action.onClick();
              handleDismiss();
            }}
          >
            {action.label}
          </button>
        )}
      </div>

      {/* Close Button */}
      <button
        type="button"
        aria-label="Close notification"
        className={cn(toastCloseVariants())}
        onClick={handleDismiss}
      >
        <X aria-hidden="true" className="size-4" />
      </button>

      {/* Progress Bar */}
      {duration > 0 && (
        <span
          aria-hidden="true"
          className={cn(
            toastProgressVariants({
              variant,
            }),
          )}
          style={{
            animationDuration: `${duration}ms`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        />
      )}
    </div>
  );
}

export function Toaster({ position = "bottom-right", maxToasts = 5, className }: ToasterProps) {
  const { toasts, dismiss } = useToast();

  const visibleToasts = toasts.slice(-maxToasts);

  return (
    <div
      className={cn(
        toasterVariants({
          position,
        }),
        className,
      )}
    >
      {visibleToasts.map((toast) => (
        <Toast key={toast.id} {...toast} onDismiss={dismiss} />
      ))}
    </div>
  );
}
