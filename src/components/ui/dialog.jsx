import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

import { Button } from './button'

export function Dialog({
  open,
  title,
  description,
  children,
  onClose,
  footer,
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="panel w-full max-w-2xl p-6"
            initial={{ y: 20, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-brand-text">{title}</h3>
                {description ? (
                  <p className="mt-2 text-sm text-brand-muted">{description}</p>
                ) : null}
              </div>
              <Button variant="ghost" type="button" onClick={onClose}>
                <X className="size-4" />
              </Button>
            </div>
            <div>{children}</div>
            {footer ? <div className="mt-6 flex justify-end gap-3">{footer}</div> : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
