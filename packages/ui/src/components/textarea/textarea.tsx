import { useState, type ChangeEvent } from "react";

import { cn } from "../../lib/utils";

import {
  textareaCounterVariants,
  textareaLabelVariants,
  textareaMessageVariants,
  textareaRequiredVariants,
  textareaVariants,
} from "./textarea.styles";

import type { TextareaProps } from "./textarea.types";

export function Textarea({
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
  showLimit = false,
  value,
  defaultValue,
  maxLength,
  onChange,
  disabled,
  id,
  ...props
}: TextareaProps) {
  /*
   * Internal state is only required for
   * uncontrolled textarea usage.
   */
  const [internalValue, setInternalValue] = useState(defaultValue?.toString() ?? "");

  /*
   * Detect controlled usage.
   */
  const isControlled = value !== undefined;

  /*
   * Resolve current value.
   */
  const currentValue = isControlled ? (value?.toString() ?? "") : internalValue;

  /*
   * Handle textarea changes.
   */
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(event);
  };

  /*
   * Resolve helper / validation message.
   */
  const message = state === "error" ? errorText : state === "success" ? successText : helperText;

  /*
   * Current character count.
   */
  const characterCount = currentValue.length;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={cn(textareaLabelVariants())}>
          {label}

          {required && (
            <span className={cn(textareaRequiredVariants())} aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {leadingIcon && (
          <span
            className={cn(
              "pointer-events-none",
              "absolute",
              "left-3",
              "top-3",
              "z-10",
              "text-text-muted",
            )}
          >
            {leadingIcon}
          </span>
        )}

        <textarea
          id={id}
          className={cn(
            textareaVariants({
              variant,
              size,
              state,
            }),

            leadingIcon && "pl-10",
            trailingIcon && "pr-10",

            className,
          )}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          disabled={disabled}
          aria-invalid={state === "error"}
          aria-describedby={message || showLimit ? `${id}-message` : undefined}
          onChange={handleChange}
          {...props}
        />

        {trailingIcon && (
          <span
            className={cn(
              "pointer-events-none",
              "absolute",
              "right-3",
              "top-3",
              "z-10",
              "text-text-muted",
            )}
          >
            {trailingIcon}
          </span>
        )}
      </div>

      {(message || showLimit) && (
        <div
          id={`${id}-message`}
          className={cn("mt-1.5", "flex", "items-start", "justify-between", "gap-4")}
        >
          <div>
            {message && (
              <p
                className={cn(
                  textareaMessageVariants({
                    state,
                  }),
                )}
              >
                {message}
              </p>
            )}
          </div>

          {showLimit && (
            <span
              className={cn(
                textareaCounterVariants({
                  state,
                }),
              )}
            >
              {characterCount}/{maxLength ?? "∞"}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
