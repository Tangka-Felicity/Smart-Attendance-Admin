import { Download, FileBarChart2 } from 'lucide-react'
import { toast } from 'sonner'

import { PageHeader } from '../../../components/shared/PageHeader'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { reportCards } from '../../../lib/mock-data'

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Reports"
        title="Analytics and export-ready reporting"
        description="Daily, session, and department summaries are represented here with clean admin-dashboard surfaces and export affordances."
        actionLabel="Export PDF"
        onAction={() => toast.success('PDF export queued locally.')}
      />
      <section className="grid gap-4 md:grid-cols-3">
        {reportCards.map((card) => (
          <Card key={card.title}>
            <p className="text-sm text-brand-muted">{card.title}</p>
            <p className="mt-4 text-3xl font-semibold text-brand-text">{card.value}</p>
            <p className="mt-3 text-sm text-brand-muted">{card.detail}</p>
          </Card>
        ))}
      </section>
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-brand-text">Department trend comparison</h2>
            <Badge tone="info">30 days</Badge>
          </div>
          <div className="mt-6 space-y-4">
            {[
              ['Computer Science', 94],
              ['Emergency Nursing', 82],
              ['Operations Trainees', 89],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="flex justify-between text-sm text-brand-muted">
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="bg-slate-950 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Export queue</h2>
            <FileBarChart2 className="size-5 text-cyan-300" />
          </div>
          <div className="mt-6 space-y-3">
            {[
              ['Daily summary', 'Ready now'],
              ['Department audit', 'Processing'],
              ['Session breakdown', 'Ready now'],
            ].map(([label, state]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <p>{label}</p>
                <Badge tone={state === 'Ready now' ? 'success' : 'warning'}>{state}</Badge>
              </div>
            ))}
          </div>
          <Button className="mt-6 w-full" variant="secondary" onClick={() => toast.info('Download is mocked for the prototype.')}>
            <Download className="size-4" />
            Download latest bundle
          </Button>
        </Card>
      </section>
    </div>
  )
}
