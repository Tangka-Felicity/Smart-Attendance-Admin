export function Checkbox(props) {
  return (
    <input
      type="checkbox"
      className="size-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
      {...props}
    />
  )
}
