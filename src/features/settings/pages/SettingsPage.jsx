import { useState } from 'react'
import { toast } from 'sonner'

import { PageHeader } from '../../../components/shared/PageHeader'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { Checkbox } from '../../../components/ui/checkbox'
import { Input } from '../../../components/ui/input'
import { Tabs } from '../../../components/ui/tabs'

export function SettingsPage() {
  const [tab, setTab] = useState('general')

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Settings"
        title="Workspace configuration"
        description="A UI prototype for general platform settings, notifications, and attendance policy preferences."
        secondaryAction={
          <Tabs
            items={[
              { label: 'General', value: 'general' },
              { label: 'Policies', value: 'policies' },
              { label: 'Notifications', value: 'notifications' },
            ]}
            value={tab}
            onValueChange={setTab}
          />
        }
        actionLabel="Save settings"
        onAction={() => toast.success('Settings saved locally.')}
      />

      {tab === 'general' ? (
        <Card>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-label">Organization display name</label>
              <Input defaultValue="Northwind Academy" />
            </div>
            <div>
              <label className="mb-2 block text-label">Default timezone</label>
              <Input defaultValue="UTC+01:00 Africa/Douala" />
            </div>
          </div>
        </Card>
      ) : null}

      {tab === 'policies' ? (
        <Card>
          <div className="space-y-4">
            {[
              'Allow manual attendance adjustments',
              'Flag duplicate scans immediately',
              'Require confirmation before closing sessions',
            ].map((label) => (
              <label key={label} className="flex items-center gap-3 rounded-2xl border p-4">
                <Checkbox defaultChecked />
                <span className="text-sm text-brand-text">{label}</span>
              </label>
            ))}
          </div>
        </Card>
      ) : null}

      {tab === 'notifications' ? (
        <Card>
          <div className="space-y-4">
            {[
              'Attendance threshold alerts',
              'Report export completion',
              'Daily admin summary',
            ].map((label, index) => (
              <label key={label} className="flex items-center gap-3 rounded-2xl border p-4">
                <Checkbox defaultChecked={index !== 2} />
                <span className="text-sm text-brand-text">{label}</span>
              </label>
            ))}
          </div>
          <Button className="mt-6" variant="secondary">
            Test notification
          </Button>
        </Card>
      ) : null}
    </div>
  )
}
