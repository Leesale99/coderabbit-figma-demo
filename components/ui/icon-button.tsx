import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-normal leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed",
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
        small: "size-9 [&_svg]:h-icon-sm [&_svg]:w-icon-sm",
        medium: "size-11 [&_svg]:h-icon-md [&_svg]:w-icon-md",
        large: "size-[52px] [&_svg]:h-icon-lg [&_svg]:w-icon-lg",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "medium",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={clsx(iconButtonVariants({ variant, size }), className)}
        ref={ref}
        type={asChild ? type : type ?? "button"}
        {...props}
      >
        {icon ?? children}
      </Comp>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
