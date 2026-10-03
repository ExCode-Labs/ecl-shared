import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "w-full",
    "border",
    "rounded-control",
    "bg-surface",
    "text-text-primary",
    "placeholder:text-text-muted",
    "outline-none",
    "shadow-control",
    "transition-all",
    "duration-200",
    "ease-ui",

    // Disabled
    "disabled:cursor-not-allowed",
    "disabled:bg-surface-disabled",
    "disabled:text-text-disabled",
    "disabled:border-border-disabled",
    "disabled:shadow-none",

    // Focus
    "focus:ring-2",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-border",
          "hover:border-border-hover",
          "focus:border-border-focus",
          "focus:ring-focus-ring",
        ],

        filled: [
          "border-transparent",
          "bg-background",
          "hover:bg-surface-hover",
          "focus:bg-surface",
          "focus:border-border-focus",
          "focus:ring-focus-ring",
        ],

        outlined: [
          "border-primary",
          "bg-surface",
          "hover:border-primary-hover",
          "focus:border-primary",
          "focus:ring-focus-ring",
        ],

        ghost: [
          "border-transparent",
          "bg-transparent",
          "shadow-none",
          "hover:bg-surface-hover",
          "focus:bg-surface",
          "focus:border-border",
          "focus:ring-focus-ring",
        ],
      },

      size: {
        sm: ["h-9", "px-3", "text-xs", "rounded-control-sm"],

        md: ["h-11", "px-3.5", "text-sm", "rounded-control"],

        lg: ["h-12", "px-4", "text-base", "rounded-control-lg"],
      },

      state: {
        default: [],

        success: ["border-success-border", "focus:border-success", "focus:ring-success/20"],

        error: ["border-error-border", "focus:border-error", "focus:ring-error/20"],
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      state: "default",
    },
  },
);

export const inputLabelVariants = cva([
  "mb-1.5",
  "block",
  "text-sm",
  "font-medium",
  "text-text-primary",
]);

export const inputRequiredVariants = cva("ml-0.5 text-error");

export const inputIconVariants = cva(
  [
    "pointer-events-none",
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "flex",
    "items-center",
    "justify-center",
    "text-text-muted",
  ],
  {
    variants: {
      position: {
        leading: "left-3",
        trailing: "right-3",
      },

      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-5 w-5",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const inputMessageVariants = cva("mt-1.5 text-xs", {
  variants: {
    state: {
      default: "text-text-secondary",
      success: "text-success",
      error: "text-error",
    },
  },

  defaultVariants: {
    state: "default",
  },
});
