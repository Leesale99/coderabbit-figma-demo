import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const titlePageVariants = cva(
  "font-title-page font-title-page leading-sds-title tracking-sds-tighter",
  {
    variants: {
      size: {
        sm: "text-title-page-sm",
        md: "text-title-page-md",
        lg: "text-title-page-lg",
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

export type TitlePageProps<T extends React.ElementType = "h1"> = {
  as?: T;
  className?: string;
} & VariantProps<typeof titlePageVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

const TitlePage = <T extends React.ElementType = "h1">({
  as,
  size,
  color,
  className,
  ...props
}: TitlePageProps<T>) => {
  const Comp = as ?? "h1";

  return (
    <Comp
      className={clsx(titlePageVariants({ size, color }), className)}
      {...props}
    />
  );
};

TitlePage.displayName = "TitlePage";

export { TitlePage, titlePageVariants };
