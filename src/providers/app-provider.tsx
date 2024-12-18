'use client'

import { SwrProvider } from '@/providers/swr-provider'
import { JotaiProvider } from './jotai-provider'

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
