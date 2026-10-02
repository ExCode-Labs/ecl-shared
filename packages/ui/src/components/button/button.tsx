import { cn } from "../../lib/utils";
import { buttonVariants } from "./button.styles";
import type { ButtonProps } from "./button.types";

export function Button({
  className,
  variant,
  size,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        "relative",
      )}
      {...props}
    >
      <span className={loading ? "invisible" : undefined}>
        <div className={cn("flex justify-center items-center gap-2", className)}>{children}</div>
      </span>
      {loading && (
        <span
          aria-hidden="true"
          className="absolute h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
    </button>
  );
}
