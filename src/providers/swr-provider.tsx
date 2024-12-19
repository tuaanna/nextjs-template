import { SWRConfig, useSWRConfig } from 'swr'

type Props = {
  children: React.ReactNode
}

export const SwrProvider: React.FC<Props> = ({ children }) => {
  const swrConfig = useSWRConfig()

  return (
    <SWRConfig
      value={{
        ...swrConfig,
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  )
}
