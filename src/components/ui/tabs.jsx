import { cn } from '../../lib/utils'

export function Tabs({ items, value, onValueChange, className }) {
  return (
    <div className={cn('inline-flex rounded-2xl border bg-white p-1', className)}>
      {items.map((item) => {
        const active = item.value === value
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onValueChange(item.value)}
            className={cn(
              'rounded-xl px-4 py-2 text-sm font-medium transition',
              active
                ? 'bg-brand-primary text-white shadow-soft'
                : 'text-brand-muted hover:text-brand-text',
            )}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
