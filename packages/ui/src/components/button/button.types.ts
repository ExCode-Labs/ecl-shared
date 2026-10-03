import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive" | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style of the button.
   */
  variant?: ButtonVariant;

  /**
   * Button size.
   */
  size?: ButtonSize;

  /**
   * Shows a loading spinner while
   * preserving the button dimensions.
   */
  loading?: boolean;

  /**
   * Makes the button occupy the full
   * available width.
   */
  fullWidth?: boolean;
}
