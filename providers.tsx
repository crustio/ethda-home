'use client'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { ReactNode } from 'react'
import config from './utils/wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { withClient } from './components/withClient'

const queryClient = new QueryClient()

export const Providers = withClient(({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale='en-US' modalSize='compact'>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
})