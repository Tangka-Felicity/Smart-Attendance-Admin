import { Toaster } from 'sonner'

export function AppProviders({ children }) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        richColors
        closeButton
        toastOptions={{
          classNames: {
            toast: '!rounded-2xl !border !shadow-panel',
          },
        }}
      />
    </>
  )
}
