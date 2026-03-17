export function AppLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent text-lg font-bold text-white shadow-soft">
        SA
      </div>
      <div>
        <p className="text-sm font-semibold text-brand-text">Smart Attendance</p>
        <p className="text-xs text-brand-muted">Admin workspace</p>
      </div>
    </div>
  )
}
