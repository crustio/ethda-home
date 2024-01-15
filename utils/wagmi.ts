import { getDefaultConfig } from 'connectkit'
import { createClient } from 'viem'
import { arbitrumSepolia } from 'viem/chains'
import { createConfig } from 'wagmi'

const walletConnectProjectId = '2222222'

// const config = createConfig(
//   getDefaultConfig({
//     autoConnect: true,
//     appName: 'EthDa',
//     chains: [arbitrumSepolia],
//     alchemyId: process.env.ALCHEMY_ID, // or infuraId
//     walletConnectProjectId,

//     appUrl: 'https://family.co',
//     appIcon: 'https://family.co/logo.png',
//   }),
// )

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId,
    // Required
    appName: 'EthDa',
    // Optional
    appDescription: 'Your App Description',
    appUrl: 'https://family.co', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
)

export default config
