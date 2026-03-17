import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, Clock3, QrCode } from 'lucide-react'

import { PageHeader } from '../../../components/shared/PageHeader'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { attendees, sessions } from '../../../lib/mock-data'

export function SessionDetailsPage() {
  const { sessionId } = useParams()
  const session = sessions.find((item) => item.id === sessionId) ?? sessions[0]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Session details"
        title={session.title}
        description="Detailed session view with QR preview, attendance summary, and roster visibility for manual intervention."
        secondaryAction={
          <Link to="/app/attendance/result">
            <Button variant="secondary">Preview confirmation</Button>
          </Link>
        }
        actionLabel="Display QR"
      />

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="bg-slate-950 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption text-slate-400">Session QR</p>
              <h2 className="mt-2 text-2xl font-semibold">{session.title}</h2>
            </div>
            <Badge tone="success">{session.status}</Badge>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex size-64 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5">
              <QrCode className="size-24 text-cyan-300" />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-slate-400">Time window</p>
              <p className="mt-2 font-medium text-white">{session.window}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-slate-400">Grace period</p>
              <p className="mt-2 font-medium text-white">{session.grace}</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Checked in', '241', CheckCircle2],
                ['Late arrivals', '19', Clock3],
                ['Expected', '280', QrCode],
              ].map(([label, value, Icon]) => (
                <div key={label} className="rounded-2xl border bg-slate-50 p-4">
                  <Icon className="size-5 text-brand-primary" />
                  <p className="mt-3 text-2xl font-semibold text-brand-text">{value}</p>
                  <p className="mt-1 text-sm text-brand-muted">{label}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-brand-text">Assigned roster</h2>
            <div className="mt-5 space-y-3">
              {attendees.slice(0, 3).map((attendee) => (
                <div key={attendee.id} className="flex items-center justify-between rounded-2xl border p-4">
                  <div>
                    <p className="font-semibold text-brand-text">{attendee.name}</p>
                    <p className="mt-1 text-sm text-brand-muted">{attendee.department}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>{attendee.status}</Badge>
                    <Button variant="secondary" size="sm">
                      Manual mark
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
