import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'

import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { defineChain } from 'viem/utils'
import {} from 'wagmi/connectors'
const walletConnectProjectId = '08655efd533e1054791755a0c58862c4'

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
const connectors = [
  new CoinbaseWalletConnector({
    chains: [ethda],
    options: {
      headlessMode: true,
      appName: 'Ethda',
    },
  }),
  new WalletConnectConnector({
    chains: [ethda],
    options: {
      projectId: walletConnectProjectId,
      showQrModal: false,
    },
  }),
]
const defConfig = getDefaultConfig({
  // Required API Keys
  alchemyId: process.env.ALCHEMY_ID, // or infuraId
  autoConnect: true,
  walletConnectProjectId,
  // Required
  appName: 'EthDA',
  chains: [ethda] as any,
  connectors: connectors as any,
  // Optional
  appDescription: 'As an Ethereum layer2 network',
  appUrl: 'https://family.co', // your app's url
  appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
})
const config = createConfig(defConfig as any)

export default config
