import { useState } from 'react'
import { Eye, EyeOff, LoaderCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Tabs } from '../../../components/ui/tabs'
import { AuthFormShell } from '../components/AuthFormShell'
import { SocialAuthButtons } from '../components/SocialAuthButtons'

const signInSchema = z.object({
  identifier: z
    .string()
    .min(1, 'Email or phone number is required.')
    .refine(
      (value) =>
        z.string().email().safeParse(value).success || /^\+?[0-9()\-\s]{8,}$/.test(value),
      'Enter a valid email address or phone number.',
    ),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
})

export function SignInPage() {
  const [authMethod, setAuthMethod] = useState('email')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
    defaultValues: {
      identifier: '',
      password: '',
    },
  })

  function onSubmit() {
    setIsSubmitting(true)
    window.setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Signed in locally. Redirecting to dashboard prototype.')
      navigate('/app/dashboard')
    }, 900)
  }

  return (
    <AuthFormShell
      title="Sign in to the admin workspace"
      description="Use your email or phone number to access the smart attendance dashboard."
      footer={
        <>
          New organization?{' '}
          <Link className="font-semibold text-brand-primary" to="/register">
            Register here
          </Link>
        </>
      }
    >
      <Tabs
        className="mb-6"
        items={[
          { label: 'Email', value: 'email' },
          { label: 'Phone', value: 'phone' },
        ]}
        value={authMethod}
        onValueChange={setAuthMethod}
      />
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="mb-2 block text-label">
            {authMethod === 'email' ? 'Email address' : 'Phone number'}
          </label>
          <Input
            placeholder={authMethod === 'email' ? 'admin@organization.com' : '+1 (555) 555-0100'}
            {...register('identifier')}
          />
          {errors.identifier ? (
            <p className="mt-2 text-sm text-brand-danger">{errors.identifier.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-2 block text-label">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="pr-12"
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
          {errors.password ? (
            <p className="mt-2 text-sm text-brand-danger">{errors.password.message}</p>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <Link className="text-sm font-medium text-brand-primary" to="/forgot-password">
            Forgot password?
          </Link>
          <Link className="text-sm font-medium text-brand-primary" to="/verify">
            Mock OTP flow
          </Link>
        </div>
        <Button fullWidth disabled={!isValid || isSubmitting}>
          {isSubmitting ? <LoaderCircle className="size-4 animate-spin" /> : null}
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">or</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <SocialAuthButtons />
    </AuthFormShell>
  )
}
