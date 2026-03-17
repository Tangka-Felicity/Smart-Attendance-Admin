import { NavLink } from 'react-router-dom'
import {
  Bell,
  Building2,
  ChartColumn,
  Clock3,
  LayoutDashboard,
  QrCode,
  Settings,
  ShieldCheck,
  Users2,
} from 'lucide-react'

import { AppLogo } from './AppLogo'
import { cn } from '../../lib/utils'

const navGroups = [
  {
    title: 'Core',
    items: [
      { to: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { to: '/app/organizations', label: 'Organizations', icon: Building2 },
      { to: '/app/departments', label: 'Departments', icon: ShieldCheck },
      { to: '/app/attendees', label: 'Attendees', icon: Users2 },
      { to: '/app/sessions', label: 'Sessions', icon: Clock3 },
      { to: '/app/attendance', label: 'Attendance', icon: QrCode },
      { to: '/app/reports', label: 'Reports', icon: ChartColumn },
    ],
  },
  {
    title: 'Personal',
    items: [
      { to: '/app/history', label: 'History', icon: Clock3 },
      { to: '/app/notifications', label: 'Notifications', icon: Bell },
      { to: '/app/settings', label: 'Settings', icon: Settings },
    ],
  },
]

export function Sidebar() {
  return (
    <aside className="panel-muted sticky top-4 hidden h-[calc(100vh-2rem)] w-72 shrink-0 flex-col overflow-hidden lg:flex">
      <div className="border-b px-5 py-5">
        <AppLogo />
      </div>
      <div className="flex-1 space-y-8 overflow-y-auto px-4 py-6">
        {navGroups.map((group) => (
          <div key={group.title}>
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {group.title}
            </p>
            <div className="mt-3 space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition',
                        isActive
                          ? 'bg-brand-primary text-white shadow-soft'
                          : 'text-brand-muted hover:bg-white hover:text-brand-text',
                      )
                    }
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </NavLink>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t bg-slate-50/70 px-5 py-4">
        <p className="text-sm font-medium text-brand-text">Prepared for offline-first</p>
        <p className="mt-1 text-xs text-brand-muted">
          Router, mock data, and UI state patterns are ready for future PWA sync work.
        </p>
      </div>
    </aside>
  )
}
