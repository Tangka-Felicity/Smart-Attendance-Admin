import rollogMainTransparent from '../../assets/logo/rollog-main-transparent.svg'
import { cn } from '../../lib/utils'

export function AppLogo({ className, logoClassName, textClassName }) {
  return (
    <div className={cn('flex max-w-full flex-wrap items-center gap-x-3 gap-y-1', className)}>
      <img
        src={rollogMainTransparent}
        alt="rollog"
        className={cn('h-11 w-auto shrink-0 object-contain sm:h-12', logoClassName)}
      />
      <span
        className={cn(
          'whitespace-nowrap text-sm font-semibold tracking-tight text-brand-text sm:text-lg',
          textClassName,
        )}
      >
        Smart Attendance
      </span>
    </div>
  )
}
