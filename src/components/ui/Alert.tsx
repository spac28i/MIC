//Users/inside_machine/Documents/Malahat Nation /MICO_web/mico-website/src/components/ui/Alert.tsx
'use client'; 

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle2, XCircle, Info } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>*+div]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500",
        success:
          "border-green-500/50 text-green-500 dark:border-green-500 [&>svg]:text-green-500",
        warning:
          "border-amber-500/50 text-amber-500 dark:border-amber-500 [&>svg]:text-amber-500",
        info:
          "border-blue-500/50 text-blue-500 dark:border-blue-500 [&>svg]:text-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

const AlertIcon = ({ variant }: { variant?: VariantProps<typeof alertVariants>['variant'] }) => {
  const icons = {
    default: Info,
    destructive: XCircle,
    success: CheckCircle2,
    warning: AlertCircle,
    info: Info,
  }

  const IconComponent = variant && icons[variant] ? icons[variant] : icons.default

  return <IconComponent className="h-4 w-4" />
}

export { Alert, AlertTitle, AlertDescription, AlertIcon }