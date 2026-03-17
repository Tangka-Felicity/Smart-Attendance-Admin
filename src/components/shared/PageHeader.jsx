import { Button } from '../ui/button'

export function PageHeader({
  eyebrow,
  title,
  description,
  actionLabel,
  onAction,
  secondaryAction,
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {eyebrow ? <p className="text-caption">{eyebrow}</p> : null}
        <h1 className="mt-2 text-headline">{title}</h1>
        <p className="mt-2 max-w-3xl text-body">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {secondaryAction}
        {actionLabel ? <Button onClick={onAction}>{actionLabel}</Button> : null}
      </div>
    </div>
  )
}
