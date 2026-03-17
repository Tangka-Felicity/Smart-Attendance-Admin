import { toast } from 'sonner'

import { Button } from '../../../components/ui/button'

export function SocialAuthButtons() {
  return (
    <div className="space-y-3">
      <Button
        fullWidth
        variant="secondary"
        type="button"
        onClick={() => toast.info('Google authentication is UI-only in this prototype.')}
      >
        Continue with Google
      </Button>
      <Button
        fullWidth
        variant="secondary"
        type="button"
        onClick={() => toast.info('SSO connection will be added during backend integration.')}
      >
        Continue with SSO
      </Button>
    </div>
  )
}
