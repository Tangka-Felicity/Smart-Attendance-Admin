import { ChevronDown } from 'lucide-react'

import { cn } from '../../lib/utils'

export function Select({ className, children, ...props }) {
  return (
    <div className="relative">
      <select className={cn('input-base appearance-none pr-10', className)} {...props}>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
    </div>
  )
}
