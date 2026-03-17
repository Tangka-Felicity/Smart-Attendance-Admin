import { useMemo, useState } from 'react'
import { AlertTriangle, RefreshCcw } from 'lucide-react'
import { toast } from 'sonner'

import { PageHeader } from '../../../components/shared/PageHeader'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { DataTable } from '../../../components/ui/data-table'
import { EmptyState } from '../../../components/ui/empty-state'
import { Input } from '../../../components/ui/input'
import { Select } from '../../../components/ui/select'
import { Skeleton } from '../../../components/ui/skeleton'
import { Tabs } from '../../../components/ui/tabs'
import { attendanceRecords } from '../../../lib/mock-data'

export function AttendancePage() {
  const [view, setView] = useState('data')
  const [status, setStatus] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      attendanceRecords.filter((item) => {
        const matchesStatus = status === 'all' || item.status === status
        const matchesQuery = [item.attendee, item.session, item.method].some((value) =>
          value.toLowerCase().includes(query.toLowerCase()),
        )
        return matchesStatus && matchesQuery
      }),
    [query, status],
  )

  const columns = [
    { header: 'Attendee', cell: ({ row }) => row.original.attendee },
    { header: 'Session', cell: ({ row }) => row.original.session },
    { header: 'Checked at', cell: ({ row }) => row.original.checkedAt },
    { header: 'Method', cell: ({ row }) => row.original.method },
    { header: 'Status', cell: ({ row }) => <Badge>{row.original.status}</Badge> },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Attendance monitoring"
        title="Monitor records and resolve exceptions"
        description="Use this view for live attendance inspection, manual corrections, and visibility into attendance status outcomes."
        secondaryAction={
          <Tabs
            items={[
              { label: 'Loaded', value: 'data' },
              { label: 'Loading', value: 'loading' },
              { label: 'Empty', value: 'empty' },
              { label: 'Error', value: 'error' },
            ]}
            value={view}
            onValueChange={setView}
          />
        }
      />

      <Card>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-1 flex-col gap-4 sm:flex-row">
            <Input
              className="sm:max-w-md"
              placeholder="Search attendee, session, or method"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Select className="sm:max-w-xs" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="all">All statuses</option>
              <option value="Present">Present</option>
              <option value="Late">Late</option>
              <option value="Manual">Manual</option>
            </Select>
          </div>
          <Button variant="secondary" onClick={() => toast.success('Manual attendance mode activated locally.')}>
            Manual entry
          </Button>
        </div>
        <div className="mt-6">
          {view === 'loading' ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          ) : null}
          {view === 'empty' ? (
            <EmptyState
              icon={RefreshCcw}
              title="No attendance records found"
              description="There are no rows for the current filter combination. Try another session or refresh after check-ins begin."
              actionLabel="Reset filters"
              onAction={() => {
                setQuery('')
                setStatus('all')
                setView('data')
              }}
            />
          ) : null}
          {view === 'error' ? (
            <EmptyState
              icon={AlertTriangle}
              title="Unable to load attendance feed"
              description="This simulated error state stands in for connection or service issues you may want to handle later."
              actionLabel="Retry"
              onAction={() => {
                toast.success('Retry simulated successfully.')
                setView('data')
              }}
            />
          ) : null}
          {view === 'data' ? <DataTable columns={columns} data={filtered} /> : null}
        </div>
      </Card>
    </div>
  )
}
