import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AuthLayout } from '../layouts/AuthLayout'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { AttendancePage } from '../../features/attendance/pages/AttendancePage'
import { AttendanceResultPage } from '../../features/attendance/pages/AttendanceResultPage'
import { QRAttendancePage } from '../../features/attendance/pages/QRAttendancePage'
import { LandingPage } from '../../features/auth/pages/LandingPage'
import { ForgotPasswordPage } from '../../features/auth/pages/ForgotPasswordPage'
import { RegisterPage } from '../../features/auth/pages/RegisterPage'
import { SignInPage } from '../../features/auth/pages/SignInPage'
import { VerifyOtpPage } from '../../features/auth/pages/VerifyOtpPage'
import { AttendeesPage } from '../../features/attendees/pages/AttendeesPage'
import { DashboardPage } from '../../features/dashboard/pages/DashboardPage'
import { DepartmentsPage } from '../../features/departments/pages/DepartmentsPage'
import { HistoryPage } from '../../features/history/pages/HistoryPage'
import { NotificationsPage } from '../../features/notifications/pages/NotificationsPage'
import { OrganizationsPage } from '../../features/organizations/pages/OrganizationsPage'
import { ProfilePage } from '../../features/profile/pages/ProfilePage'
import { ReportsPage } from '../../features/reports/pages/ReportsPage'
import { SessionsPage } from '../../features/sessions/pages/SessionsPage'
import { SessionDetailsPage } from '../../features/sessions/pages/SessionDetailsPage'
import { SettingsPage } from '../../features/settings/pages/SettingsPage'
import { NotFoundPage } from '../../features/system/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/forgot-password', element: <ForgotPasswordPage /> },
      { path: '/verify', element: <VerifyOtpPage /> },
    ],
  },
  {
    path: '/app',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/app/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'organizations', element: <OrganizationsPage /> },
      { path: 'departments', element: <DepartmentsPage /> },
      { path: 'attendees', element: <AttendeesPage /> },
      { path: 'sessions', element: <SessionsPage /> },
      { path: 'sessions/:sessionId', element: <SessionDetailsPage /> },
      { path: 'attendance', element: <AttendancePage /> },
      { path: 'attendance/qr', element: <QRAttendancePage /> },
      { path: 'attendance/result', element: <AttendanceResultPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'history', element: <HistoryPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
