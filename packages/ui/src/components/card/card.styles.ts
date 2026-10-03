import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "w-full",
    "rounded-card",
    "bg-surface",
    "text-text-primary",
    "transition-all",
    "duration-200",
    "ease-ui",
  ],
  {
    variants: {
      variant: {
        default: ["border", "border-border"],

        outlined: ["border", "border-border", "shadow-none"],

        elevated: ["border", "border-border", "shadow-card"],

        ghost: ["border", "border-transparent", "bg-transparent"],
      },

      padding: {
        none: "p-0",

        sm: "p-4",

        md: "p-5",

        lg: "p-6",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "none",
    },
  },
);

export const cardHeaderVariants = cva(["flex", "flex-col", "gap-1.5"], {
  variants: {
    spacing: {
      sm: "p-4",
      md: "p-5",
      lg: "p-6",
    },
  },

  defaultVariants: {
    spacing: "md",
  },
});

export const cardTitleVariants = cva(["font-semibold", "tracking-tight", "text-text-primary"], {
  variants: {
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const cardDescriptionVariants = cva(["text-text-secondary", "leading-relaxed"], {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const cardContentVariants = cva([], {
  variants: {
    padding: {
      none: "p-0",
      sm: "px-4 pb-4",
      md: "px-5 pb-5",
      lg: "px-6 pb-6",
    },
  },

  defaultVariants: {
    padding: "md",
  },
});

export const cardBodyVariants = cva([], {
  variants: {
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-5",
      lg: "p-6",
    },
  },

  defaultVariants: {
    padding: "md",
  },
});

export const cardFooterVariants = cva(["flex", "items-center", "border-t", "border-border"], {
  variants: {
    padding: {
      sm: "gap-3 px-4 py-3",
      md: "gap-3 px-5 py-4",
      lg: "gap-4 px-6 py-5",
    },

    align: {
      start: "justify-start",
      center: "justify-center",
      between: "justify-between",
      end: "justify-end",
    },
  },

  defaultVariants: {
    padding: "md",
    align: "between",
  },
});

export const cardActionsVariants = cva(["flex", "items-center", "gap-2"]);
