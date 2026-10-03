import { cva } from "class-variance-authority";

export const toastVariants = cva(
  [
    // The Toast itself must receive mouse/pointer events.
    "pointer-events-auto",

    "relative",
    "flex",
    "w-full",
    "items-start",
    "gap-3",
    "overflow-hidden",
    "rounded-card",
    "border",
    "border-border",
    "bg-surface",
    "p-4",
    "text-text-primary",
    "shadow-card",
  ],
  {
    variants: {
      variant: {
        default: ["border-border", "bg-surface", "text-text-primary"],

        success: ["border-success-border", "bg-success-light", "text-text-primary"],

        error: ["border-error-border", "bg-error-light", "text-text-primary"],

        warning: ["border-warning-border", "bg-warning-light", "text-text-primary"],

        info: ["border-info-border", "bg-info-light", "text-text-primary"],
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export const toastIconVariants = cva(["mt-0.5", "size-5", "shrink-0"], {
  variants: {
    variant: {
      default: "text-text-secondary",
      success: "text-success",
      error: "text-error",
      warning: "text-warning",
      info: "text-info",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

export const toastContentVariants = cva(["min-w-0", "flex-1"]);

export const toastTitleVariants = cva([
  "text-sm",
  "font-semibold",
  "leading-5",
  "text-text-primary",
]);

export const toastDescriptionVariants = cva([
  "mt-1",
  "text-sm",
  "leading-5",
  "text-text-secondary",
]);

export const toastActionVariants = cva([
  "mt-2",
  "inline-flex",
  "items-center",
  "rounded-control-sm",
  "px-2",
  "py-1",
  "text-sm",
  "font-medium",
  "text-primary",
  "transition-colors",
  "duration-200",
  "hover:bg-primary-light",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-focus-ring",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-offset-surface",
]);

export const toastCloseVariants = cva([
  "shrink-0",
  "rounded-control-sm",
  "p-1",
  "text-text-muted",
  "transition-colors",
  "duration-200",
  "hover:bg-surface-hover",
  "hover:text-text-primary",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-focus-ring",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-offset-surface",
]);

export const toastProgressVariants = cva(
  [
    "pointer-events-none",
    "absolute",
    "bottom-0",
    "left-0",
    "h-0.5",
    "w-full",
    "origin-left",
    "bg-current",
    "opacity-40",
    "animate-toast-progress",
  ],
  {
    variants: {
      variant: {
        default: "text-text-secondary",
        success: "text-success",
        error: "text-error",
        warning: "text-warning",
        info: "text-info",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export const toasterVariants = cva(
  [
    // Container itself does not block the application underneath.
    "pointer-events-none",

    "fixed",
    "z-[100]",
    "flex",
    "w-full",
    "max-w-sm",
    "flex-col",
    "gap-3",
    "p-4",
    "outline-none",
  ],
  {
    variants: {
      position: {
        "top-left": ["left-0", "top-0", "items-start"],

        "top-center": ["left-1/2", "top-0", "-translate-x-1/2", "items-center"],

        "top-right": ["right-0", "top-0", "items-end"],

        "bottom-left": ["bottom-0", "left-0", "items-start"],

        "bottom-center": ["bottom-0", "left-1/2", "-translate-x-1/2", "items-center"],

        "bottom-right": ["bottom-0", "right-0", "items-end"],
      },
    },

    defaultVariants: {
      position: "bottom-right",
    },
  },
);
