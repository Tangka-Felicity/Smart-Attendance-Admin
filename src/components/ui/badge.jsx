import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
  {
    variants: {
      tone: {
        neutral: 'bg-slate-100 text-slate-700',
        info: 'bg-sky-100 text-sky-700',
        success: 'bg-emerald-100 text-emerald-700',
        warning: 'bg-amber-100 text-amber-700',
        danger: 'bg-rose-100 text-rose-700',
      },
    },
    defaultVariants: {
      tone: 'neutral',
    },
  },
)

const toneMap = {
  Active: 'success',
  Healthy: 'success',
  Present: 'success',
  Live: 'success',
  Scheduled: 'info',
  'QR ready': 'info',
  Info: 'info',
  Late: 'warning',
  Attention: 'warning',
  Onboarding: 'warning',
  Warning: 'warning',
  Inactive: 'danger',
  Absent: 'danger',
  Closed: 'neutral',
  Manual: 'neutral',
  Archived: 'neutral',
}

export function Badge({ children, tone, className }) {
  return (
    <span className={cn(badgeVariants({ tone: tone ?? toneMap[children] }), className)}>
      {children}
    </span>
  )
}
