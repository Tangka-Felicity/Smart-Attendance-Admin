import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Select } from '../../../components/ui/select'
import { Tabs } from '../../../components/ui/tabs'
import { AuthFormShell } from '../components/AuthFormShell'
import { SocialAuthButtons } from '../components/SocialAuthButtons'

const registerSchema = z
  .object({
    organizationName: z.string().min(2, 'Organization name is required.'),
    adminName: z.string().min(2, 'Admin name is required.'),
    contact: z
      .string()
      .min(1, 'Email or phone is required.')
      .refine(
        (value) =>
          z.string().email().safeParse(value).success || /^\+?[0-9()\-\s]{8,}$/.test(value),
        'Enter a valid email address or phone number.',
      ),
    role: z.string().min(1, 'Choose a primary role.'),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(8, 'Please confirm your password.'),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  })

export function RegisterPage() {
  const [entryPoint, setEntryPoint] = useState('email')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  })

  function onSubmit() {
    setIsSubmitting(true)
    window.setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Registration details captured locally. Continue to verification.')
      navigate('/verify')
    }, 1000)
  }

  return (
    <AuthFormShell
      title="Create your attendance workspace"
      description="Start with a super admin or organization admin account using email or phone registration."
      footer={
        <>
          Already have access?{' '}
          <Link className="font-semibold text-brand-primary" to="/sign-in">
            Sign in instead
          </Link>
        </>
      }
    >
      <Tabs
        className="mb-6"
        items={[
          { label: 'Email signup', value: 'email' },
          { label: 'Phone signup', value: 'phone' },
        ]}
        value={entryPoint}
        onValueChange={setEntryPoint}
      />
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-2 block text-label">Organization name</label>
            <Input placeholder="Northwind Academy" {...register('organizationName')} />
            {errors.organizationName ? (
              <p className="mt-2 text-sm text-brand-danger">{errors.organizationName.message}</p>
            ) : null}
          </div>
          <div>
            <label className="mb-2 block text-label">Admin name</label>
            <Input placeholder="Mia Reynolds" {...register('adminName')} />
            {errors.adminName ? (
              <p className="mt-2 text-sm text-brand-danger">{errors.adminName.message}</p>
            ) : null}
          </div>
          <div>
            <label className="mb-2 block text-label">
              {entryPoint === 'email' ? 'Email address' : 'Phone number'}
            </label>
            <Input
              placeholder={entryPoint === 'email' ? 'admin@organization.com' : '+1 (555) 555-0100'}
              {...register('contact')}
            />
            {errors.contact ? (
              <p className="mt-2 text-sm text-brand-danger">{errors.contact.message}</p>
            ) : null}
          </div>
          <div>
            <label className="mb-2 block text-label">Primary role</label>
            <Select defaultValue="" {...register('role')}>
              <option value="" disabled>
                Choose a role
              </option>
              <option value="super-admin">Super Admin</option>
              <option value="org-admin">Organization Admin</option>
            </Select>
            {errors.role ? <p className="mt-2 text-sm text-brand-danger">{errors.role.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-label">Password</label>
            <Input type="password" placeholder="Create a password" {...register('password')} />
            {errors.password ? (
              <p className="mt-2 text-sm text-brand-danger">{errors.password.message}</p>
            ) : null}
          </div>
          <div>
            <label className="mb-2 block text-label">Confirm password</label>
            <Input type="password" placeholder="Repeat your password" {...register('confirmPassword')} />
            {errors.confirmPassword ? (
              <p className="mt-2 text-sm text-brand-danger">{errors.confirmPassword.message}</p>
            ) : null}
          </div>
        </div>
        <Button fullWidth disabled={!isValid || isSubmitting}>
          {isSubmitting ? <LoaderCircle className="size-4 animate-spin" /> : null}
          {isSubmitting ? 'Creating workspace...' : 'Create account'}
        </Button>
      </form>
      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">optional</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <SocialAuthButtons />
    </AuthFormShell>
  )
}
