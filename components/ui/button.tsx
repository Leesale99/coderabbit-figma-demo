import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-normal leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        brand:
          "bg-brand text-brand-on-brand hover:bg-brand-hover disabled:bg-disabled disabled:text-disabled",
        neutral:
          "bg-neutral text-neutral-on-neutral hover:bg-neutral-hover disabled:bg-disabled disabled:text-disabled",
        danger:
          "bg-danger text-danger-on-danger hover:bg-danger-hover disabled:bg-disabled disabled:text-disabled",
        positive:
          "bg-positive text-positive-on-positive hover:bg-positive-hover disabled:bg-disabled disabled:text-disabled",
        warning:
          "bg-warning text-warning-on-warning hover:bg-warning-hover disabled:bg-disabled disabled:text-disabled",
        subtle:
          "bg-transparent text-default hover:bg-default-hover disabled:text-disabled",
        "brand-subtle":
          "bg-transparent text-brand hover:bg-brand-tertiary-hover disabled:text-disabled",
        "neutral-subtle":
          "bg-transparent text-neutral hover:bg-neutral-tertiary-hover disabled:text-disabled",
        "danger-subtle":
          "bg-transparent text-danger hover:bg-danger-tertiary-hover disabled:text-disabled",
        "positive-subtle":
          "bg-transparent text-positive hover:bg-positive-tertiary-hover disabled:text-disabled",
        "warning-subtle":
          "bg-transparent text-warning hover:bg-warning-tertiary-hover disabled:text-disabled",
      },
      size: {
        small: "h-8 px-2 py-2 text-body-sm",
        medium: "h-10 px-3 py-3 text-body-md",
        large: "h-12 px-4 py-4 text-body-md",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={clsx(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
