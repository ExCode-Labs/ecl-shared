import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "rounded-control",
    "font-medium",
    "outline-none",
    "transition-all",
    "duration-200",
    "ease-ui",

    // Focus
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-focus-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-surface",

    // Disabled
    "disabled:pointer-events-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",

    //loading
    "data-[loading=true]:[&>*:not(.button-spinner)]:invisible",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary",
          "text-text-inverse",
          "shadow-control",
          "hover:bg-primary-hover",
          "active:bg-primary-pressed",
        ],

        secondary: [
          "border",
          "border-border",
          "bg-surface",
          "text-text-primary",
          "shadow-control",
          "hover:border-border-hover",
          "hover:bg-surface-hover",
          "active:bg-background",
        ],

        outline: [
          "border",
          "border-primary",
          "bg-surface",
          "text-primary",
          "hover:border-primary-hover",
          "hover:bg-primary-light",
          "active:bg-primary-light",
        ],

        ghost: [
          "border-transparent",
          "bg-transparent",
          "text-text-secondary",
          "shadow-none",
          "hover:bg-surface-hover",
          "hover:text-text-primary",
          "active:bg-background",
        ],

        destructive: [
          "bg-error",
          "text-text-inverse",
          "shadow-control",
          "hover:bg-error-hover",
          "active:bg-error-pressed",
        ],

        link: [
          "rounded-none",
          "bg-transparent",
          "px-0",
          "cursor-pointer",
          "text-primary",
          "shadow-none",
          "hover:text-primary-hover",
          "hover:underline",
          "underline-offset-4",
        ],
      },

      size: {
        sm: ["h-9", "px-3", "text-xs", "rounded-control-sm"],

        md: ["h-11", "px-4", "text-sm", "rounded-control"],

        lg: ["h-12", "px-5", "text-base", "rounded-control-lg"],

        icon: ["h-10", "w-10", "p-0", "rounded-control"],
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

export const buttonSpinnerVariants = cva(
  [
    "absolute",
    "left-1/2",
    "top-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "animate-spin",
    "rounded-full",
    "border-2",
    "bg-inherit",
    "z-10",
    "border-current",
    "border-t-transparent",
  ],
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5",
        md: "h-4 w-4",
        lg: "h-5 w-5",
        icon: "h-4 w-4",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);
