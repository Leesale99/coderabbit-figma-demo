import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const textSmallVariants = cva("font-sans text-body-sm font-body-regular", {
  variants: {
    variant: {
      base: "",
      strong: "font-body-strong",
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
    variant: "base",
    color: "default",
  },
});

const lineHeightClasses = {
  body: "leading-sds-body",
  single: "leading-sds-single",
} as const;

export type TextSmallProps<T extends React.ElementType = "p"> = {
  as?: T;
  lineHeight?: keyof typeof lineHeightClasses;
  className?: string;
} & VariantProps<typeof textSmallVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

const TextSmall = <T extends React.ElementType = "p">({
  as,
  lineHeight = "body",
  variant,
  color,
  className,
  ...props
}: TextSmallProps<T>) => {
  const Comp = as ?? "p";

  return (
    <Comp
      className={clsx(
        textSmallVariants({ variant, color }),
        lineHeightClasses[lineHeight],
        className
      )}
      {...props}
    />
  );
};

TextSmall.displayName = "TextSmall";

export { TextSmall, textSmallVariants };
