import type { ReactNode } from "react";

export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export type ToastPosition =
  "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastData {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  duration?: number;
  action?: ToastAction;
}

export type ToastOptions = Omit<ToastData, "id">;

export interface ToastProps extends ToastData {
  onDismiss: (id: string) => void;
}

export interface ToastProviderProps {
  children: ReactNode;
}

export interface ToasterProps {
  position?: ToastPosition;
  maxToasts?: number;
  className?: string;
}
