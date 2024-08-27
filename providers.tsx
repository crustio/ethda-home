'use client'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { withClient } from './components/withClient'
import config from './utils/wagmi'

const queryClient = new QueryClient()

export const Providers = withClient(({ children }: { children: ReactNode }) => {
  console.info('Providers Changed')
  const mConfig = config()
  return (
    <WagmiProvider config={mConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale='en-US' modalSize='compact' initialChain={mConfig.chains[0]}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
})
