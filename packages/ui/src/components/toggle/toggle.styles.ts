import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  [
    "relative",
    "inline-flex",
    "shrink-0",
    "cursor-pointer",
    "items-center",
    "rounded-full",
    "border",
    "border-transparent",
    "bg-border",
    "transition-colors",
    "duration-200",
    "ease-ui",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-focus-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-surface",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },

      checked: {
        true: "bg-primary",
        false: "bg-border",
      },
    },

    defaultVariants: {
      size: "md",
      checked: false,
    },
  },
);

export const toggleThumbVariants = cva(
  [
    "pointer-events-none",
    "absolute",
    "left-0.5",
    "top-1/2",
    "-translate-y-1/2",
    "rounded-full",
    "bg-surface",
    "shadow-control",
    "transition-transform",
    "duration-200",
    "ease-ui",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },

      checked: {
        true: "",
        false: "translate-x-0",
      },
    },

    compoundVariants: [
      {
        size: "sm",
        checked: true,
        className: "translate-x-4",
      },
      {
        size: "md",
        checked: true,
        className: "translate-x-5",
      },
      {
        size: "lg",
        checked: true,
        className: "translate-x-7",
      },
    ],

    defaultVariants: {
      size: "md",
      checked: false,
    },
  },
);
