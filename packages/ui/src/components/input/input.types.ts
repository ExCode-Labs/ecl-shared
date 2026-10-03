import type { InputHTMLAttributes, ReactNode } from "react";

export type InputVariant = "default" | "filled" | "outlined" | "ghost";

export type InputSize = "sm" | "md" | "lg";

export type InputState = "default" | "success" | "error";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Input label.
   */
  label?: string;

  /**
   * Marks the field as required.
   */
  required?: boolean;

  /**
   * Visual style of the input.
   */
  variant?: InputVariant;

  /**
   * Size of the input.
   */
  size?: InputSize;

  /**
   * Validation state.
   */
  state?: InputState;

  /**
   * Icon displayed before the input value.
   */
  leadingIcon?: ReactNode;

  /**
   * Icon displayed after the input value.
   */
  trailingIcon?: ReactNode;

  /**
   * Helper text displayed below the input.
   */
  helperText?: string;

  /**
   * Error message displayed below the input.
   */
  errorText?: string;

  /**
   * Success message displayed below the input.
   */
  successText?: string;
}
