import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonGroupVariants = cva("flex items-center", {
  variants: {
    align: {
      start: "justify-start gap-2",
      end: "justify-end gap-2",
      center: "justify-center gap-2",
      justify: "gap-0 [&>*]:flex-1",
      stack: "flex-col items-stretch gap-2",
    },
  },
  defaultVariants: {
    align: "justify",
  },
});

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, align, ...props }, ref) => (
    <div
      className={clsx(buttonGroupVariants({ align }), className)}
      ref={ref}
      {...props}
    />
  )
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup, buttonGroupVariants };
