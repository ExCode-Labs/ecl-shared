import { cn } from "../../lib/utils";

import {
  inputIconVariants,
  inputLabelVariants,
  inputMessageVariants,
  inputRequiredVariants,
  inputVariants,
} from "./input.styles";

import type { InputProps } from "./input.types";

export function Input({
  className,
  label,
  required,
  variant = "default",
  size = "md",
  state = "default",
  leadingIcon,
  trailingIcon,
  helperText,
  errorText,
  successText,
  disabled,
  id,
  ...props
}: InputProps) {
  const message = state === "error" ? errorText : state === "success" ? successText : helperText;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={cn(inputLabelVariants())}>
          {label}

          {required && (
            <span className={cn(inputRequiredVariants())} aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {leadingIcon && (
          <span
            className={cn(
              inputIconVariants({
                position: "leading",
                size,
              }),
            )}
          >
            {leadingIcon}
          </span>
        )}

        <input
          id={id}
          className={cn(
            inputVariants({
              variant,
              size,
              state,
            }),

            leadingIcon && "pl-10",
            trailingIcon && "pr-10",

            className,
          )}
          disabled={disabled}
          aria-invalid={state === "error"}
          aria-describedby={message ? `${id}-message` : undefined}
          {...props}
        />

        {trailingIcon && (
          <span
            className={cn(
              inputIconVariants({
                position: "trailing",
                size,
              }),
            )}
          >
            {trailingIcon}
          </span>
        )}
      </div>

      {message && (
        <p
          id={`${id}-message`}
          className={cn(
            inputMessageVariants({
              state,
            }),
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}
