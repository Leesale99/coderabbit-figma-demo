import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const headingVariants = cva(
  "font-heading font-heading leading-sds-title tracking-sds-tighter",
  {
    variants: {
      size: {
        sm: "text-heading-sm",
        md: "text-heading-md",
        lg: "text-heading-lg",
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

export type HeadingProps<T extends React.ElementType = "h2"> = {
  as?: T;
  className?: string;
} & VariantProps<typeof headingVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

const Heading = <T extends React.ElementType = "h2">({
  as,
  size,
  color,
  className,
  ...props
}: HeadingProps<T>) => {
  const Comp = as ?? "h2";

  return (
    <Comp
      className={clsx(headingVariants({ size, color }), className)}
      {...props}
    />
  );
};

Heading.displayName = "Heading";

export { Heading, headingVariants };
