'use client'

import { JotaiProvider } from '@/providers/jotai-provider'
import { SwrProvider } from '@/providers/swr-provider'

type Props = {
  children: React.ReactNode
}
export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <SwrProvider>
      <JotaiProvider>{children}</JotaiProvider>
    </SwrProvider>
  )
}
