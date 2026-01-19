import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const textVariants = cva("font-sans font-body-regular", {
  variants: {
    variant: {
      base: "",
      strong: "font-body-strong",
      emphasis: "italic",
      link: "underline",
      input: "",
      code: "font-mono font-code",
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

const bodySizeClasses = {
  sm: "text-body-sm",
  md: "text-body-md",
  lg: "text-body-lg",
} as const;

const codeSizeClasses = {
  sm: "text-code-sm",
  md: "text-code-md",
  lg: "text-code-lg",
} as const;

const lineHeightClasses = {
  body: "leading-sds-body",
  single: "leading-sds-single",
} as const;

export type TextProps<T extends React.ElementType = "p"> = {
  as?: T;
  size?: keyof typeof bodySizeClasses;
  lineHeight?: keyof typeof lineHeightClasses;
  className?: string;
} & VariantProps<typeof textVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

const Text = <T extends React.ElementType = "p">({
  as,
  size = "md",
  lineHeight,
  variant = "base",
  color,
  className,
  ...props
}: TextProps<T>) => {
  const Comp = as ?? "p";
  const resolvedLineHeight =
    lineHeight ?? (variant === "input" ? "single" : "body");

  const sizeClass =
    variant === "code" ? codeSizeClasses[size] : bodySizeClasses[size];

  const lineHeightClass =
    variant === "code"
      ? resolvedLineHeight === "single"
        ? lineHeightClasses.single
        : "leading-[1.3]"
      : lineHeightClasses[resolvedLineHeight];

  return (
    <Comp
      className={clsx(
        textVariants({ variant, color }),
        sizeClass,
        lineHeightClass,
        className
      )}
      {...props}
    />
  );
};

Text.displayName = "Text";

export { Text, textVariants };
