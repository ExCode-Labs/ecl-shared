import type { InputHTMLAttributes } from "react";

export type ToggleSize = "sm" | "md" | "lg";

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: ToggleSize;
}
