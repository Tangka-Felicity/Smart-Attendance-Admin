import { Activity, ArrowUpRight, CalendarDays, Download, Users } from 'lucide-react'

import { PageHeader } from '../../../components/shared/PageHeader'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { dashboardStats, notifications, sessions } from '../../../lib/mock-data'

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Overview"
        title="Attendance operations at a glance"
        description="A desktop-first command center for monitoring organizations, session activity, attendance rate, and actionable exceptions."
        actionLabel="Export summary"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-brand-muted">{stat.label}</p>
            <div className="mt-4 flex items-end justify-between">
              <p className="text-3xl font-semibold text-brand-text">{stat.value}</p>
              <Badge tone={stat.tone}>{stat.change}</Badge>
            </div>
            <p className="mt-3 text-sm text-brand-muted">{stat.detail}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption">Live activity</p>
              <h2 className="mt-2 text-xl font-semibold text-brand-text">Attendance flow today</h2>
            </div>
            <Badge tone="success">Near real-time</Badge>
          </div>
          <div className="mt-6 grid gap-3">
            {[72, 88, 64, 91, 76, 84, 93, 86].map((value, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm text-brand-muted">
                  <span>{`${index + 8}:00`}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-brand-text">Quick actions</h2>
            <Activity className="size-4 text-brand-accent" />
          </div>
          <div className="mt-5 grid gap-3">
            {[
              ['Create session', 'Open a new attendance window with QR generation.'],
              ['Register attendee', 'Add a new participant with department assignment.'],
              ['Manual entry', 'Resolve scan failures or attendance disputes quickly.'],
            ].map(([title, text]) => (
              <button
                type="button"
                key={title}
                className="rounded-2xl border bg-slate-50 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-brand-text">{title}</p>
                  <ArrowUpRight className="size-4 text-brand-primary" />
                </div>
                <p className="mt-2 text-sm text-brand-muted">{text}</p>
              </button>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption">Sessions</p>
              <h2 className="mt-2 text-xl font-semibold text-brand-text">Active and upcoming sessions</h2>
            </div>
            <Button variant="secondary">
              <CalendarDays className="size-4" />
              View calendar
            </Button>
          </div>
          <div className="mt-6 space-y-3">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex flex-col gap-4 rounded-3xl border bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-brand-text">{session.title}</p>
                    <Badge>{session.status}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-brand-muted">
                    {session.department} • {session.organization}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-sm font-medium text-brand-text">{session.window}</p>
                    <p className="text-xs text-brand-muted">{session.date}</p>
                  </div>
                  <Button variant="secondary" size="sm">
                    Open
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-brand-text">System notifications</h2>
            <Button variant="ghost" size="sm">
              <Download className="size-4" />
              Archive
            </Button>
          </div>
          <div className="mt-6 space-y-4">
            {notifications.map((item) => (
              <div key={item.id} className="rounded-2xl border p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-brand-text">{item.title}</p>
                  <Badge tone={item.tone}>{item.time}</Badge>
                </div>
                <p className="mt-2 text-sm text-brand-muted">{item.message}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
            <div className="flex items-center gap-3">
              <Users className="size-5 text-cyan-300" />
              <div>
                <p className="font-semibold">Need an executive snapshot?</p>
                <p className="mt-1 text-sm text-slate-300">
                  Use reports to export department, session, or daily attendance views.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
