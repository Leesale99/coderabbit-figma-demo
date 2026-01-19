import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const subheadingVariants = cva(
  "font-subheading font-subheading leading-sds-title",
  {
    variants: {
      size: {
        sm: "text-subheading-sm",
        md: "text-subheading-md",
        lg: "text-subheading-lg",
      },
      color: {
        default: "text-default",
        secondary: "text-default-secondary",
        tertiary: "text-default-tertiary",
        brand: "text-brand",
        "brand-secondary": "text-brand-secondary",
        "brand-tertiary": "text-brand-tertiary",
        danger: "text-danger",
        "danger-secondary": "text-danger-secondary",
        "danger-tertiary": "text-danger-tertiary",
        positive: "text-positive",
        "positive-secondary": "text-positive-secondary",
        "positive-tertiary": "text-positive-tertiary",
        warning: "text-warning",
        "warning-secondary": "text-warning-secondary",
        "warning-tertiary": "text-warning-tertiary",
        neutral: "text-neutral",
        "neutral-secondary": "text-neutral-secondary",
        "neutral-tertiary": "text-neutral-tertiary",
        disabled: "text-disabled",
      },
    },
    defaultVariants: {
      size: "md",
      color: "default",
    },
  }
);

export type SubheadingProps<T extends React.ElementType = "h3"> = {
  as?: T;
  className?: string;
} & VariantProps<typeof subheadingVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

const Subheading = <T extends React.ElementType = "h3">({
  as,
  size,
  color,
  className,
  ...props
}: SubheadingProps<T>) => {
  const Comp = as ?? "h3";

  return (
    <Comp
      className={clsx(subheadingVariants({ size, color }), className)}
      {...props}
    />
  );
};

Subheading.displayName = "Subheading";

export { Subheading, subheadingVariants };
