import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const titleHeroVariants = cva(
  "font-title-hero text-title-hero font-title-hero leading-sds-title tracking-sds-tightest",
  {
    variants: {
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
      color: "default",
    },
  }
);

export type TitleHeroProps<T extends React.ElementType = "h1"> = {
  as?: T;
  className?: string;
} & VariantProps<typeof titleHeroVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

const TitleHero = <T extends React.ElementType = "h1">({
  as,
  color,
  className,
  ...props
}: TitleHeroProps<T>) => {
  const Comp = as ?? "h1";

  return (
    <Comp className={clsx(titleHeroVariants({ color }), className)} {...props} />
  );
};

TitleHero.displayName = "TitleHero";

export { TitleHero, titleHeroVariants };
