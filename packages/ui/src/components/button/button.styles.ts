import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-md",
    "font-medium",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary-focus",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary",
          "text-white",
          "hover:bg-primary-hover",
          "active:bg-primary-pressed",
        ],

        outline: [
          "border",
          "border-border",
          "bg-surface",
          "text-text-primary",
          "hover:border-border-hover",
          "hover:bg-background",
        ],

        ghost: ["bg-transparent", "text-text-primary", "hover:bg-background"],
      },

      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
