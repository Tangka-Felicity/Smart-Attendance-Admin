import { useState } from 'react'
import { CheckCircle2, LoaderCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { AuthFormShell } from '../components/AuthFormShell'

export function VerifyOtpPage() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const isComplete = code.every((item) => item.length === 1)

  function updateCode(index, value) {
    const clean = value.replace(/\D/g, '').slice(0, 1)
    setCode((current) => current.map((item, itemIndex) => (itemIndex === index ? clean : item)))
  }

  function handleVerify() {
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      toast.success('Verification completed in local prototype mode.')
      navigate('/app/dashboard')
    }, 800)
  }

  return (
    <AuthFormShell
      title="Verify your access code"
      description="Use this OTP screen as the mock step for email reset or first-time account verification."
    >
      <div className="rounded-3xl border bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-5 text-brand-primary" />
          <p className="text-sm text-brand-muted">
            Demo tip: enter any 6 digits to continue. This is a local-only interaction flow.
          </p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        {code.map((value, index) => (
          <Input
            key={index}
            value={value}
            onChange={(event) => updateCode(index, event.target.value)}
            className="h-14 text-center text-lg font-semibold"
            inputMode="numeric"
          />
        ))}
      </div>
      <Button className="mt-6" fullWidth disabled={!isComplete || loading} onClick={handleVerify}>
        {loading ? <LoaderCircle className="size-4 animate-spin" /> : null}
        {loading ? 'Verifying...' : 'Verify code'}
      </Button>
    </AuthFormShell>
  )
}
