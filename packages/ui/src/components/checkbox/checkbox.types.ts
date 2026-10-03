import type { InputHTMLAttributes, ReactNode } from "react";

export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  size?: CheckboxSize;
  indeterminate?: boolean;
  label?: ReactNode;
  description?: ReactNode;
}
