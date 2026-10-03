import { cn } from "../../lib/utils";
import { toggleThumbVariants, toggleVariants } from "./toggle.styles";
import type { ToggleProps } from "./toggle.types";

export function Toggle({ className, size = "md", disabled, ...props }: ToggleProps) {
  return (
    <label
      className={cn(
        "relative inline-flex",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className,
      )}
    >
      {/* Native checkbox controls the toggle state */}
      <input {...props} type="checkbox" disabled={disabled} className="peer sr-only" />

      {/* Toggle track */}
      <span
        aria-hidden="true"
        className={cn(
          toggleVariants({ size }),
          "peer-checked:bg-primary",
          "peer-focus-visible:ring-2",
          "peer-focus-visible:ring-focus-ring",
          "peer-disabled:cursor-not-allowed",
          "peer-disabled:opacity-50",
        )}
      />

      {/* Toggle thumb */}
      <span
        aria-hidden="true"
        className={cn(
          toggleThumbVariants({ size }),
          "peer-checked:translate-x-4",
          size === "md" && "peer-checked:translate-x-5",
          size === "lg" && "peer-checked:translate-x-7",
        )}
      />
    </label>
  );
}
