import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 hover:pointer-events-auto [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        pink: "font-roboto bg-pink-eletric-500 text-pink-button-text hover:bg-green-eletric-500/90 hover:text-green-button-text",
        link: "text-body-text underline underline-offset-4 hover:underline hover:text-body-text/60 cursor-pointer",
      },
      size: {
        default: "h-9",
        xs: "h-6 gap-1 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5",
        lg: "h-10",
      },
    },
    defaultVariants: {
      variant: "pink",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "pink",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
