//Users/inside_machine/Documents/Malahat Nation /MICO_web/mico-website/src/components/ui/Badge.tsx
'use client'; 

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 animate-fade-in-up",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-500 text-white hover:bg-emerald-600",
        secondary:
          "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
        outline:
          "border border-emerald-500 text-emerald-500 hover:bg-emerald-50",
        success:
          "bg-emerald-100 text-emerald-700 border border-emerald-200 hover:bg-emerald-200",
        warning:
          "bg-yellow-100 text-yellow-700 border border-yellow-200 hover:bg-yellow-200",
        danger:
          "bg-red-100 text-red-700 border border-red-200 hover:bg-red-200",
        info:
          "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200",
        glass:
          "bg-white/20 backdrop-blur-sm text-emerald-800 border border-white/30 hover:bg-white/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }