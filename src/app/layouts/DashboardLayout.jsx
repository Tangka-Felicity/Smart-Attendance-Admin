import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/shared/Sidebar'
import { Topbar } from '../../components/shared/Topbar'

export function DashboardLayout() {
  return (
    <div className="page-shell flex min-h-screen gap-6">
      <Sidebar />
      <main className="min-w-0 flex-1">
        <Topbar />
        <Outlet />
      </main>
    </div>
  )
}
