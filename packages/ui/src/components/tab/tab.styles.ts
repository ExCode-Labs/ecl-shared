import { cva } from "class-variance-authority";

export const tabVariants = cva(
  [
    "relative",
    "inline-flex",
    "shrink-0",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "font-medium",
    "transition-all",
    "duration-200",
    "ease-ui",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-focus-ring",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        line: [
          "rounded-control",
          "text-text-secondary",

          // Hover
          "hover:bg-surface-hover",
          "hover:text-text-primary",

          // Active text
          "data-[active=true]:text-primary",

          // Active indicator
          "after:absolute",
          "after:bottom-0",
          "after:left-2",
          "after:right-2",
          "after:h-0.5",
          "after:rounded-full",
          "after:bg-primary",
          "after:scale-x-0",
          "after:transition-transform",
          "after:duration-200",

          "data-[active=true]:after:scale-x-100",
        ],

        pill: [
          "rounded-control",
          "text-text-secondary",
          "hover:bg-surface-hover",
          "hover:text-text-primary",

          "data-[active=true]:bg-primary-light",
          "data-[active=true]:text-primary",
        ],
      },

      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      },

      fullWidth: {
        true: "flex-1",
        false: "",
      },
    },

    defaultVariants: {
      variant: "line",
      size: "md",
      fullWidth: false,
    },
  },
);
export const tabGroupVariants = cva(
  ["flex", "border", "border-border", "bg-surface", "rounded-control-lg"],
  {
    variants: {
      variant: {
        line: ["items-center", "gap-1", "p-1"],

        pill: ["rounded-control-lg", "bg-background", "p-1", "gap-1"],
      },
    },

    defaultVariants: {
      variant: "line",
    },
  },
);
