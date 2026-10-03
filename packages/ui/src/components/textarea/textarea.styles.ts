import { cva } from "class-variance-authority";

export const textareaVariants = cva(
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
    "resize-y",

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
        sm: ["min-h-20", "px-3", "py-2", "text-xs", "rounded-control-sm"],

        md: ["min-h-28", "px-3.5", "py-3", "text-sm", "rounded-control"],

        lg: ["min-h-36", "px-4", "py-3.5", "text-base", "rounded-control-lg"],
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

export const textareaLabelVariants = cva([
  "mb-1.5",
  "block",
  "text-sm",
  "font-medium",
  "text-text-primary",
]);

export const textareaRequiredVariants = cva("ml-0.5 text-error");

export const textareaMessageVariants = cva("text-xs", {
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

export const textareaCounterVariants = cva("shrink-0 text-xs", {
  variants: {
    state: {
      default: "text-text-muted",
      success: "text-success",
      error: "text-error",
    },
  },

  defaultVariants: {
    state: "default",
  },
});
