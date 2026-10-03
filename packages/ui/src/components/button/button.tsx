import { cn } from "../../lib/utils";

import { buttonSpinnerVariants, buttonVariants } from "./button.styles";

import type { ButtonProps } from "./button.types";

export function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      disabled={isDisabled}
      aria-busy={loading}
      data-loading={loading || undefined}
      {...props}
    >
      {children}

      {loading && (
        <span
          className={cn(
            "button-spinner",
            buttonSpinnerVariants({
              size,
            }),
          )}
          aria-hidden="true"
        />
      )}
    </button>
  );
}
