import { Check, Minus } from "lucide-react";
import { useEffect, useRef } from "react";

import { cn } from "../../lib/utils";
import {
  checkboxDescriptionVariants,
  checkboxIconVariants,
  checkboxLabelVariants,
  checkboxVariants,
} from "./checkbox.styles";
import type { CheckboxProps } from "./checkbox.types";

export function Checkbox({
  className,
  size = "md",
  indeterminate = false,
  label,
  description,
  checked,
  defaultChecked,
  disabled,
  onChange,
  ...props
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * The indeterminate property is not available
   * as a normal HTML attribute, so it must be
   * assigned directly to the native input.
   */
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={cn(
        "group inline-flex items-start gap-2.5",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className,
      )}
    >
      <span className="relative mt-0.5 shrink-0">
        {/* Native checkbox */}
        <input
          {...props}
          ref={inputRef}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          className={checkboxVariants({ size })}
        />

        {/* Checked icon */}
        {!indeterminate && (
          <Check aria-hidden="true" strokeWidth={2.5} className={checkboxIconVariants({ size })} />
        )}

        {/* Indeterminate icon */}
        {indeterminate && (
          <Minus
            aria-hidden="true"
            strokeWidth={2.5}
            className={cn(checkboxIconVariants({ size }), "opacity-100 scale-100")}
          />
        )}
      </span>

      {(label || description) && (
        <span className="flex min-w-0 flex-col gap-0.5">
          {label && (
            <span className={cn(checkboxLabelVariants({ size }), disabled && "text-text-disabled")}>
              {label}
            </span>
          )}

          {description && (
            <span
              className={cn(
                checkboxDescriptionVariants({ size }),
                disabled && "text-text-disabled",
              )}
            >
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
}
