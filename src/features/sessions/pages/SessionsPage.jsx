import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { QrCode } from 'lucide-react'
import { toast } from 'sonner'

import { PageHeader } from '../../../components/shared/PageHeader'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { DataTable } from '../../../components/ui/data-table'
import { Input } from '../../../components/ui/input'
import { Tabs } from '../../../components/ui/tabs'
import { sessions } from '../../../lib/mock-data'

export function SessionsPage() {
  const [tab, setTab] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      sessions.filter((session) => {
        const matchesTab = tab === 'all' || session.status === tab
        const matchesQuery = [session.title, session.department, session.organization].some((value) =>
          value.toLowerCase().includes(query.toLowerCase()),
        )
        return matchesTab && matchesQuery
      }),
    [query, tab],
  )

  const columns = [
    {
      header: 'Session',
      cell: ({ row }) => (
        <div>
          <p className="font-semibold text-brand-text">{row.original.title}</p>
          <p className="mt-1 text-sm text-brand-muted">{row.original.department}</p>
        </div>
      ),
    },
    { header: 'Date', cell: ({ row }) => row.original.date },
    { header: 'Time window', cell: ({ row }) => row.original.window },
    { header: 'Grace', cell: ({ row }) => row.original.grace },
    { header: 'Status', cell: ({ row }) => <Badge>{row.original.status}</Badge> },
    {
      header: 'QR',
      cell: ({ row }) => <Badge>{row.original.qr}</Badge>,
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Session management"
        title="Create and manage attendance sessions"
        description="Sessions capture the documented core fields: title, date, start and end times, grace period, and QR readiness."
        secondaryAction={
          <Link to="/app/attendance/qr">
            <Button variant="secondary">
              <QrCode className="size-4" />
              Open QR preview
            </Button>
          </Link>
        }
        actionLabel="New session"
        onAction={() => toast.success('Session creation dialog can be added next without changing routing.')}
      />

      <Card>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <Tabs
            items={[
              { label: 'All', value: 'all' },
              { label: 'Live', value: 'Live' },
              { label: 'Scheduled', value: 'Scheduled' },
              { label: 'Closed', value: 'Closed' },
            ]}
            value={tab}
            onValueChange={setTab}
          />
          <Input
            className="max-w-md"
            placeholder="Search sessions or departments"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="mt-6">
          <DataTable columns={columns} data={filtered} />
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {sessions.map((session) => (
          <Card key={session.id} className="bg-gradient-to-br from-white to-slate-50">
            <div className="flex items-center justify-between">
              <Badge>{session.status}</Badge>
              <Badge>{session.qr}</Badge>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-brand-text">{session.title}</h3>
            <p className="mt-2 text-sm text-brand-muted">{session.organization}</p>
            <div className="mt-5 space-y-2 text-sm text-brand-muted">
              <p>{session.date}</p>
              <p>{session.window}</p>
              <p>Grace period: {session.grace}</p>
            </div>
            <Link to={`/app/sessions/${session.id}`} className="mt-5 inline-flex text-sm font-semibold text-brand-primary">
              View details
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
