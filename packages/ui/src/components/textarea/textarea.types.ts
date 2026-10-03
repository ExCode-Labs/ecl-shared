import type { ReactNode, TextareaHTMLAttributes } from "react";

export type TextareaVariant = "default" | "filled" | "outlined" | "ghost";

export type TextareaSize = "sm" | "md" | "lg";

export type TextareaState = "default" | "success" | "error";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Textarea label.
   */
  label?: string;

  /**
   * Marks the field as required.
   */
  required?: boolean;

  /**
   * Visual style.
   */
  variant?: TextareaVariant;

  /**
   * Size.
   */
  size?: TextareaSize;

  /**
   * Validation state.
   */
  state?: TextareaState;

  /**
   * Leading icon.
   */
  leadingIcon?: ReactNode;

  /**
   * Trailing icon.
   */
  trailingIcon?: ReactNode;

  /**
   * Helper text.
   */
  helperText?: string;

  /**
   * Error message.
   */
  errorText?: string;

  /**
   * Success message.
   */
  successText?: string;

  /**
   * Show character counter.
   *
   * Example:
   * 120/5000
   */
  showLimit?: boolean;
}
