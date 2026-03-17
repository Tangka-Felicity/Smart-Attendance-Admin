import { Outlet } from 'react-router-dom'

import { AppLogo } from '../../components/shared/AppLogo'

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.14),transparent_25%),linear-gradient(180deg,#f8fafc_0%,#eef4ff_100%)]">
      <div className="page-shell flex min-h-screen items-center">
        <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="panel relative hidden overflow-hidden p-10 lg:block">
            <div className="absolute inset-0 bg-grid bg-size-[24px_24px] opacity-60" />
            <div className="relative flex h-full flex-col justify-between">
              <AppLogo />
              <div className="max-w-xl">
                <p className="text-caption">Smart Attendance System</p>
                <h1 className="mt-4 text-display">
                  Attendance operations that feel organized, secure, and instant.
                </h1>
                <p className="mt-4 max-w-lg text-body">
                  A premium admin workspace for managing organizations, sessions, QR check-ins,
                  attendance status, and reporting across teams or campuses.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  ['8', 'Organizations'],
                  ['1.2k', 'Attendees'],
                  ['93.8%', 'Attendance rate'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border bg-white/80 p-4 backdrop-blur">
                    <p className="text-2xl font-semibold text-brand-text">{value}</p>
                    <p className="mt-2 text-sm text-brand-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="panel mx-auto flex w-full max-w-xl items-center justify-center p-6 sm:p-10">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  )
}
