import type { ButtonHTMLAttributes, ReactNode } from "react";

export type TabSize = "sm" | "md" | "lg";

export type TabVariant = "line" | "pill";

export interface TabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  value?: string;
  active?: boolean;
  size?: TabSize;
  variant?: TabVariant;
  icon?: ReactNode;
}

export interface TabItem {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TabGroupProps {
  items?: TabItem[];
  children?: ReactNode;

  value?: string;
  defaultValue?: string;

  onValueChange?: (value: string) => void;

  size?: TabSize;
  variant?: TabVariant;

  fullWidth?: boolean;
  className?: string;
}

export interface TabPanelProps {
  value: string;
  children: ReactNode;
  className?: string;
  keepMounted?: boolean;
}
