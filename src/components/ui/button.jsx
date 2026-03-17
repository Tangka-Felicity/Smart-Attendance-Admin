import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-primary px-4 py-3 text-white shadow-soft hover:bg-blue-700',
        secondary:
          'border bg-white px-4 py-3 text-brand-text hover:border-blue-200 hover:bg-slate-50',
        ghost: 'px-3 py-2 text-brand-muted hover:bg-slate-100 hover:text-brand-text',
        danger: 'bg-brand-danger px-4 py-3 text-white hover:bg-red-700',
      },
      size: {
        sm: 'px-3 py-2 text-xs',
        md: '',
        lg: 'px-5 py-3.5',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
)

export function Button({
  className,
  variant,
  size,
  fullWidth,
  asChild = false,
  ...props
}) {
  const Component = asChild ? 'span' : 'button'

  return (
    <Component
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  )
}
