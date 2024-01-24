'use client'

import { ConnectKitProvider } from 'connectkit'
import { WagmiConfig } from 'wagmi'
import { ReactNode } from 'react'
import config from './utils/wagmi'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider
        options={{
          enforceSupportedChains: true,
        }}
      >
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
