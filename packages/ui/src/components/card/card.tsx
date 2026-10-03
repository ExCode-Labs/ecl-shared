import { forwardRef } from "react";

import { cn } from "../../lib/utils";

import {
  cardActionsVariants,
  cardBodyVariants,
  cardContentVariants,
  cardDescriptionVariants,
  cardFooterVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardVariants,
} from "./card.styles";

import type {
  CardActionsProps,
  CardBodyProps,
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from "./card.types";

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, variant = "default", padding = "none", ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        cardVariants({
          variant,
          padding,
        }),
        className,
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn(cardHeaderVariants(), className)} {...props} />;
});

CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(function CardTitle(
  { className, as: Heading = "h3", ...props },
  ref,
) {
  return <Heading ref={ref} className={cn(cardTitleVariants(), className)} {...props} />;
});

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  function CardDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn(cardDescriptionVariants(), className)} {...props} />;
  },
);

CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(function CardContent(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn(cardContentVariants(), className)} {...props} />;
});

CardContent.displayName = "CardContent";

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(function CardBody(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn(cardBodyVariants(), className)} {...props} />;
});

CardBody.displayName = "CardBody";

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(function CardFooter(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn(cardFooterVariants(), className)} {...props} />;
});

CardFooter.displayName = "CardFooter";

export const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(function CardActions(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn(cardActionsVariants(), className)} {...props} />;
});

CardActions.displayName = "CardActions";
