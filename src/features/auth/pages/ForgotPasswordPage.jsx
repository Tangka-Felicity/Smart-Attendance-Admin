import { useState } from 'react'
import { LoaderCircle, MailCheck } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { Input } from '../../../components/ui/input'
import { AuthFormShell } from '../components/AuthFormShell'

const forgotSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
})

export function ForgotPasswordPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(forgotSchema),
    mode: 'onChange',
  })

  function onSubmit() {
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSent(true)
      toast.success('Reset instructions were simulated successfully.')
    }, 800)
  }

  return (
    <AuthFormShell
      title="Recover access"
      description="We’ll simulate sending a reset email so you can preview the UX without backend integration."
      footer={
        <>
          Remembered your password?{' '}
          <Link className="font-semibold text-brand-primary" to="/sign-in">
            Return to sign in
          </Link>
        </>
      }
    >
      {sent ? (
        <Card className="border-emerald-200 bg-emerald-50">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-white p-3">
              <MailCheck className="size-5 text-brand-success" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-brand-text">Reset link simulated</h2>
              <p className="mt-2 text-sm text-brand-muted">
                Check your inbox for a mock recovery email, or continue to the OTP screen to preview
                the next step.
              </p>
              <Link className="mt-4 inline-flex text-sm font-semibold text-brand-primary" to="/verify">
                Open verification screen
              </Link>
            </div>
          </div>
        </Card>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="mb-2 block text-label">Work email</label>
            <Input placeholder="admin@organization.com" {...register('email')} />
            {errors.email ? <p className="mt-2 text-sm text-brand-danger">{errors.email.message}</p> : null}
          </div>
          <Button fullWidth disabled={!isValid || loading}>
            {loading ? <LoaderCircle className="size-4 animate-spin" /> : null}
            {loading ? 'Sending reset link...' : 'Send reset link'}
          </Button>
        </form>
      )}
    </AuthFormShell>
  )
}
