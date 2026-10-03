import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant = "default" | "outlined" | "elevated" | "ghost";

export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
}

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3" | "h4" | "h5";
}

export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
