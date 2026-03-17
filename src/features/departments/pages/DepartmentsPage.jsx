import { useMemo, useState } from 'react'
import { Layers3 } from 'lucide-react'

import { PageHeader } from '../../../components/shared/PageHeader'
import { Badge } from '../../../components/ui/badge'
import { Card } from '../../../components/ui/card'
import { DataTable } from '../../../components/ui/data-table'
import { EmptyState } from '../../../components/ui/empty-state'
import { Input } from '../../../components/ui/input'
import { Tabs } from '../../../components/ui/tabs'
import { departments } from '../../../lib/mock-data'

export function DepartmentsPage() {
  const [statusFilter, setStatusFilter] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      departments.filter((item) => {
        const matchesStatus = statusFilter === 'all' || item.status === statusFilter
        const matchesQuery = [item.name, item.organization, item.lead].some((value) =>
          value.toLowerCase().includes(query.toLowerCase()),
        )
        return matchesStatus && matchesQuery
      }),
    [query, statusFilter],
  )

  const columns = [
    {
      header: 'Department',
      cell: ({ row }) => (
        <div>
          <p className="font-semibold text-brand-text">{row.original.name}</p>
          <p className="mt-1 text-sm text-brand-muted">{row.original.description}</p>
        </div>
      ),
    },
    { header: 'Organization', cell: ({ row }) => row.original.organization },
    { header: 'Lead', cell: ({ row }) => row.original.lead },
    { header: 'Attendees', cell: ({ row }) => row.original.attendees },
    { header: 'Status', cell: ({ row }) => <Badge>{row.original.status}</Badge> },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Department management"
        title="Organize attendance by group or department"
        description="Create structured attendance ownership by mapping users into departments and monitoring their health signals."
      />
      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Tabs
            items={[
              { label: 'All', value: 'all' },
              { label: 'Healthy', value: 'Healthy' },
              { label: 'At Risk', value: 'At Risk' },
            ]}
            value={statusFilter}
            onValueChange={setStatusFilter}
          />
          <Input
            className="max-w-md"
            placeholder="Search departments, leads, or organizations"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="mt-6">
          {filtered.length ? (
            <DataTable columns={columns} data={filtered} />
          ) : (
            <EmptyState
              icon={Layers3}
              title="No departments match this filter"
              description="Try clearing the search or status filter to view the configured groups."
              actionLabel="Reset filters"
              onAction={() => {
                setQuery('')
                setStatusFilter('all')
              }}
            />
          )}
        </div>
      </Card>
    </div>
  )
}
