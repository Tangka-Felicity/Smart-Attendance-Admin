import { addDays, format, subDays } from 'date-fns'

const now = new Date()

export const dashboardStats = [
  {
    label: 'Registered attendees',
    value: '1,284',
    change: '+12.4%',
    tone: 'info',
    detail: 'Across 8 active organizations',
  },
  {
    label: 'Sessions today',
    value: '18',
    change: '+3',
    tone: 'success',
    detail: '4 currently accepting check-ins',
  },
  {
    label: 'Attendance rate',
    value: '93.8%',
    change: '+1.2%',
    tone: 'success',
    detail: 'Rolling 30-day average',
  },
  {
    label: 'Manual interventions',
    value: '14',
    change: '-5',
    tone: 'warning',
    detail: 'Lower than last week',
  },
]

export const organizations = [
  {
    id: 'ORG-001',
    name: 'Northwind Academy',
    email: 'ops@northwind.edu',
    phone: '+1 (555) 104-2200',
    address: '12 Harbor Avenue, Seattle',
    admin: 'Mia Reynolds',
    attendees: 420,
    status: 'Active',
  },
  {
    id: 'ORG-002',
    name: 'Summit Health Institute',
    email: 'admin@summithealth.org',
    phone: '+1 (555) 938-1100',
    address: '88 Crest Park, Denver',
    admin: 'David Kim',
    attendees: 318,
    status: 'Onboarding',
  },
  {
    id: 'ORG-003',
    name: 'Pioneer Training Center',
    email: 'hello@pioneertraining.co',
    phone: '+1 (555) 410-8910',
    address: '5 Market Lane, Austin',
    admin: 'Angela Boyd',
    attendees: 546,
    status: 'Active',
  },
]

export const departments = [
  {
    id: 'DEP-101',
    name: 'Computer Science',
    organization: 'Northwind Academy',
    lead: 'Aaron Blake',
    attendees: 180,
    description: 'Lecture and lab attendance for degree cohorts.',
    status: 'Healthy',
  },
  {
    id: 'DEP-102',
    name: 'Emergency Nursing',
    organization: 'Summit Health Institute',
    lead: 'Nadine Costa',
    attendees: 112,
    description: 'Shift-based practical attendance monitoring.',
    status: 'At Risk',
  },
  {
    id: 'DEP-103',
    name: 'Operations Trainees',
    organization: 'Pioneer Training Center',
    lead: 'Joel Mason',
    attendees: 94,
    description: 'Weekly instructor-led sessions and workshops.',
    status: 'Healthy',
  },
]

export const attendees = [
  {
    id: 'ATT-1001',
    name: 'Olivia Bennett',
    email: 'olivia.bennett@northwind.edu',
    phone: '+1 (555) 212-4101',
    department: 'Computer Science',
    organization: 'Northwind Academy',
    status: 'Active',
    attendanceRate: '98%',
  },
  {
    id: 'ATT-1002',
    name: 'Liam Carter',
    email: 'liam.carter@summithealth.org',
    phone: '+1 (555) 830-2229',
    department: 'Emergency Nursing',
    organization: 'Summit Health Institute',
    status: 'Attention',
    attendanceRate: '84%',
  },
  {
    id: 'ATT-1003',
    name: 'Sophia Evans',
    email: 'sophia.evans@pioneertraining.co',
    phone: '+1 (555) 180-7714',
    department: 'Operations Trainees',
    organization: 'Pioneer Training Center',
    status: 'Active',
    attendanceRate: '95%',
  },
  {
    id: 'ATT-1004',
    name: 'Noah Johnson',
    email: 'noah.johnson@northwind.edu',
    phone: '+1 (555) 401-9191',
    department: 'Computer Science',
    organization: 'Northwind Academy',
    status: 'Inactive',
    attendanceRate: '73%',
  },
]

export const sessions = [
  {
    id: 'SES-301',
    title: 'Morning Assembly',
    department: 'Computer Science',
    organization: 'Northwind Academy',
    date: format(now, 'MMM dd, yyyy'),
    window: '08:00 - 09:00',
    grace: '10 mins',
    status: 'Live',
    qr: 'QR ready',
  },
  {
    id: 'SES-302',
    title: 'Clinical Lab Rotation',
    department: 'Emergency Nursing',
    organization: 'Summit Health Institute',
    date: format(addDays(now, 1), 'MMM dd, yyyy'),
    window: '09:30 - 11:30',
    grace: '15 mins',
    status: 'Scheduled',
    qr: 'Pending',
  },
  {
    id: 'SES-303',
    title: 'Safety Workshop',
    department: 'Operations Trainees',
    organization: 'Pioneer Training Center',
    date: format(subDays(now, 1), 'MMM dd, yyyy'),
    window: '13:00 - 15:00',
    grace: '5 mins',
    status: 'Closed',
    qr: 'Archived',
  },
]

export const attendanceRecords = [
  {
    id: 'REC-9001',
    attendee: 'Olivia Bennett',
    session: 'Morning Assembly',
    checkedAt: '08:03',
    status: 'Present',
    method: 'QR',
  },
  {
    id: 'REC-9002',
    attendee: 'Liam Carter',
    session: 'Morning Assembly',
    checkedAt: '08:14',
    status: 'Late',
    method: 'QR',
  },
  {
    id: 'REC-9003',
    attendee: 'Sophia Evans',
    session: 'Safety Workshop',
    checkedAt: '13:20',
    status: 'Manual',
    method: 'Admin entry',
  },
]

export const notifications = [
  {
    id: 'NOT-1',
    title: 'Attendance threshold alert',
    message: 'Emergency Nursing dropped below the 85% threshold this week.',
    time: '5 mins ago',
    tone: 'warning',
    read: false,
  },
  {
    id: 'NOT-2',
    title: 'QR session generated',
    message: 'Morning Assembly is ready to be displayed for check-in.',
    time: '32 mins ago',
    tone: 'info',
    read: true,
  },
  {
    id: 'NOT-3',
    title: 'Report export completed',
    message: 'March attendance report is available for download.',
    time: 'Yesterday',
    tone: 'success',
    read: true,
  },
]

export const historyRecords = [
  {
    id: 'HIS-1',
    date: format(subDays(now, 2), 'MMM dd, yyyy'),
    session: 'Safety Workshop',
    attendee: 'Sophia Evans',
    status: 'Present',
    note: 'Checked in via QR within grace period.',
  },
  {
    id: 'HIS-2',
    date: format(subDays(now, 3), 'MMM dd, yyyy'),
    session: 'Clinical Lab Rotation',
    attendee: 'Liam Carter',
    status: 'Late',
    note: 'Arrived after 15-minute grace period.',
  },
  {
    id: 'HIS-3',
    date: format(subDays(now, 4), 'MMM dd, yyyy'),
    session: 'Morning Assembly',
    attendee: 'Noah Johnson',
    status: 'Absent',
    note: 'No check-in before session close.',
  },
]

export const reportCards = [
  {
    title: 'Daily Attendance',
    value: '91.4%',
    detail: 'Compared to 89.6% yesterday',
  },
  {
    title: 'Late Check-ins',
    value: '36',
    detail: '8 fewer than last week',
  },
  {
    title: 'Export Queue',
    value: '3',
    detail: 'CSV, PDF, and executive summary',
  },
]
