import { useMemo, useState } from 'react'
import { Building2, Plus } from 'lucide-react'
import { toast } from 'sonner'

import { PageHeader } from '../../../components/shared/PageHeader'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { DataTable } from '../../../components/ui/data-table'
import { Dialog } from '../../../components/ui/dialog'
import { Input } from '../../../components/ui/input'
import { organizations } from '../../../lib/mock-data'

export function OrganizationsPage() {
  const [search, setSearch] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filtered = useMemo(
    () =>
      organizations.filter((item) =>
        [item.name, item.email, item.admin].some((value) =>
          value.toLowerCase().includes(search.toLowerCase()),
        ),
      ),
    [search],
  )

  const columns = [
    {
      header: 'Organization',
      cell: ({ row }) => (
        <div>
          <p className="font-semibold text-brand-text">{row.original.name}</p>
          <p className="mt-1 text-sm text-brand-muted">{row.original.address}</p>
        </div>
      ),
    },
    {
      header: 'Admin',
      cell: ({ row }) => (
        <div>
          <p>{row.original.admin}</p>
          <p className="mt-1 text-sm text-brand-muted">{row.original.email}</p>
        </div>
      ),
    },
    {
      header: 'Attendees',
      cell: ({ row }) => row.original.attendees,
    },
    {
      header: 'Status',
      cell: ({ row }) => <Badge>{row.original.status}</Badge>,
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Organization management"
        title="Manage multi-organization workspaces"
        description="Super admins can create, review, and update organizations before assigning administrators and departments."
        actionLabel="New organization"
        onAction={() => setIsDialogOpen(true)}
      />

      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Input
            className="max-w-md"
            placeholder="Search organizations or admins"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button variant="secondary" onClick={() => toast.info('CSV export is mocked locally.')}>
            <Plus className="size-4" />
            Import CSV
          </Button>
        </div>
        <div className="mt-6">
          <DataTable columns={columns} data={filtered} />
        </div>
      </Card>

      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Create organization"
        description="Prototype-only form mirroring the documented organization data fields."
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                toast.success('Organization saved in local prototype state.')
                setIsDialogOpen(false)
              }}
            >
              Save draft
            </Button>
          </>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-2 block text-label">Organization name</label>
            <Input placeholder="Pioneer Training Center" />
          </div>
          <div>
            <label className="mb-2 block text-label">Contact email</label>
            <Input placeholder="hello@organization.com" />
          </div>
          <div>
            <label className="mb-2 block text-label">Phone number</label>
            <Input placeholder="+1 (555) 555-0123" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-label">Address</label>
            <Input placeholder="Street, city, country" />
          </div>
        </div>
      </Dialog>

      <Card className="bg-slate-950 text-white">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/10 p-3">
            <Building2 className="size-5 text-cyan-300" />
          </div>
          <div>
            <p className="font-semibold">Onboarding pattern</p>
            <p className="mt-1 text-sm text-slate-300">
              Each organization card and dialog is ready to connect to later onboarding and assignment APIs.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
