import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  [
    "peer",
    "relative",
    "shrink-0",
    "appearance-none",
    "cursor-pointer",
    "rounded-control-sm",
    "border",
    "border-border",
    "bg-surface",
    "transition-all",
    "duration-200",
    "ease-ui",

    // Hover
    "hover:not-disabled:border-border-hover",
    "hover:not-disabled:shadow-control",

    // Focus
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-focus-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-surface",

    // Checked
    "checked:border-primary",
    "checked:bg-primary",

    // Checked hover
    "checked:hover:not-disabled:bg-primary-hover",

    // Disabled
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const checkboxIconVariants = cva(
  [
    "pointer-events-none",
    "absolute",
    "left-1/2",
    "top-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "text-text-inverse",
    "opacity-0",
    "scale-75",
    "transition-all",
    "duration-150",
    "ease-ui",

    // Show when checked
    "peer-checked:opacity-100",
    "peer-checked:scale-100",
  ],
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-3.5 w-3.5",
        lg: "h-4 w-4",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const checkboxLabelVariants = cva(
  ["select-none", "font-medium", "text-text-primary", "leading-5"],
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const checkboxDescriptionVariants = cva(
  ["select-none", "text-text-secondary", "leading-5"],
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-sm",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);
