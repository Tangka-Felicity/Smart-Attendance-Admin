import { Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'

export function NotFoundPage() {
  return (
    <div className="page-shell flex min-h-screen items-center justify-center">
      <Card className="max-w-xl text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-[1.5rem] bg-blue-50">
          <Compass className="size-7 text-brand-primary" />
        </div>
        <h1 className="mt-6 text-headline">Page not found</h1>
        <p className="mt-3 text-body">
          This route is outside the current smart attendance prototype. Use the dashboard or landing page to continue.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/">
            <Button variant="secondary">Landing page</Button>
          </Link>
          <Link to="/app/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
