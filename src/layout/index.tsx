import { AppProvider } from '@/providers/app-provider'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <AppProvider>
      <main>{children}</main>
    </AppProvider>
  )
}
