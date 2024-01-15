import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'
import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet'
import { defineChain } from 'viem/utils'

const walletConnectProjectId = '2222222'

export const ethda = defineChain({
  id: 177,
  network: 'ethda',
  name: 'Ethda',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc-devnet.ethda.io'],
    },
    public: {
      http: ['https://rpc-devnet.ethda.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://scan-devnet.ethda.io',
    },
  },
  contracts: {},
})

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId,
    // Required
    appName: 'EthDa',
    connectors: [
      new CoinbaseWalletConnector({
        chains: [ethda],
        options: {
          appName: 'Ethda',
        },
      }),
    ],
    // Optional
    appDescription: 'Your App Description',
    appUrl: 'https://family.co', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
)

export default config
