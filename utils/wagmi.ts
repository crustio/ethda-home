import { getDefaultConfig } from 'connectkit'
import { createClient } from 'viem'
import { arbitrumSepolia } from 'viem/chains'
import { createConfig } from 'wagmi'

const walletConnectProjectId = '2222222'

const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: 'EthDa',
    chains: [arbitrumSepolia],
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId,

    appUrl: 'https://family.co',
    appIcon: 'https://family.co/logo.png',
  }),
)

export default config
