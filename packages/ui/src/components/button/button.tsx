import { cn } from "../../lib/utils";
import { buttonVariants } from "./button.styles";
import type { ButtonProps } from "./button.types";

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}
