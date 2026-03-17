import { Button } from './button'

export function EmptyState({ title, description, actionLabel, onAction, icon: Icon }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed bg-slate-50 px-6 py-10 text-center">
      {Icon ? (
        <div className="mb-4 rounded-2xl bg-white p-4 shadow-soft">
          <Icon className="size-6 text-brand-primary" />
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-brand-text">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-brand-muted">{description}</p>
      {actionLabel ? (
        <Button className="mt-5" variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  )
}
