import { Search, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Input } from '../ui/input'
import { Badge } from '../ui/badge'

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 mb-6 border-b border-white/70 bg-brand-bg/90 backdrop-blur">
      <div className="flex items-center gap-4 py-4">
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input className="bg-white pl-10" placeholder="Search sessions, attendees, or reports" />
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Badge tone="info">System healthy</Badge>
          <div className="rounded-2xl border bg-white px-4 py-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Workspace</p>
            <p className="text-sm font-semibold text-brand-text">Northwind Academy</p>
          </div>
          <Link to="/app/profile" className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-2.5">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent font-semibold text-white">
              MR
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-brand-text">Mia Reynolds</p>
              <p className="text-xs text-brand-muted">Super Admin</p>
            </div>
          </Link>
          <div className="hidden rounded-2xl border bg-white px-4 py-2.5 xl:flex xl:items-center xl:gap-2">
            <Sparkles className="size-4 text-brand-accent" />
            <span className="text-sm text-brand-muted">Prototype mode</span>
          </div>
        </div>
      </div>
    </header>
  )
}
