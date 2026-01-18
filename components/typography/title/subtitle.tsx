import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const subtitleVariants = cva("font-subtitle font-subtitle leading-sds-title", {
  variants: {
    size: {
      sm: "text-subtitle-sm",
      md: "text-subtitle-md",
      lg: "text-subtitle-lg",
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
});

export type SubtitleProps<T extends React.ElementType = "p"> = {
  as?: T;
  className?: string;
} & VariantProps<typeof subtitleVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

const Subtitle = <T extends React.ElementType = "p">({
  as,
  size,
  color,
  className,
  ...props
}: SubtitleProps<T>) => {
  const Comp = as ?? "p";

  return (
    <Comp
      className={clsx(subtitleVariants({ size, color }), className)}
      {...props}
    />
  );
};

Subtitle.displayName = "Subtitle";

export { Subtitle, subtitleVariants };
