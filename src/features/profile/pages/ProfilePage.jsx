import { toast } from 'sonner'

import { PageHeader } from '../../../components/shared/PageHeader'
import { Card } from '../../../components/ui/card'
import { Input } from '../../../components/ui/input'
import { Select } from '../../../components/ui/select'

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Profile"
        title="Admin profile and preferences"
        description="A local-only account management view for the current admin user."
        actionLabel="Save changes"
        onAction={() => toast.success('Profile changes saved locally.')}
      />

      <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="flex size-24 items-center justify-center rounded-4xl bg-linear-to-br from-brand-primary to-brand-accent text-2xl font-semibold text-white">
              MR
            </div>
            <h2 className="mt-5 text-xl font-semibold text-brand-text">Mia Reynolds</h2>
            <p className="mt-2 text-sm text-brand-muted">Super Admin</p>
          </div>
        </Card>

        <Card>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-label">Full name</label>
              <Input defaultValue="Mia Reynolds" />
            </div>
            <div>
              <label className="mb-2 block text-label">Email address</label>
              <Input defaultValue="mia@smartattendance.app" />
            </div>
            <div>
              <label className="mb-2 block text-label">Phone number</label>
              <Input defaultValue="+1 (555) 401-0090" />
            </div>
            <div>
              <label className="mb-2 block text-label">Role</label>
              <Select defaultValue="super-admin">
                <option value="super-admin">Super Admin</option>
                <option value="org-admin">Organization Admin</option>
              </Select>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
