import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { createConfig, http } from 'wagmi'

import { defineChain } from 'viem/utils'
import { zeroAddress } from 'viem'

const walletConnectProjectId = '08655efd533e1054791755a0c58862c4'

export const ethda = defineChain({
  id: 2832,
  network: 'EthDA Testnet',
  name: 'EthDA Testnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc-testnet.ethda.io'],
    },
    public: {
      http: ['https://rpc-testnet.ethda.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blockscan',
      url: 'https://scan-testnet.ethda.io',
    },
    blobs: {
      name: 'Blobscan',
      url: 'https://blobscan-testnet.ethda.io',
    }
  },
  contracts: {
    blobTo: { address: '0xD0d387145B497FF1992DF7b35DE4594991adf00B' },
  },

  // id: 1001,
  // network: 'EthDA Devnet',
  // name: 'EthDA Devnet',
  // nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  // rpcUrls: {
  //   default: {
  //     http: ['https://rpc-devnet2.ethda.io'],
  //   },
  //   public: {
  //     http: ['https://rpc-devnet2.ethda.io'],
  //   },
  // },
  // blockExplorers: {
  //   default: {
  //     name: 'Blockscan',
  //     url: 'https://scan-testnet.ethda.io',
  //   },
  // },
  // contracts: {},
})

import { coinbaseWallet, imTokenWallet } from '@rainbow-me/rainbowkit/wallets'
import { createClient } from 'viem'
const connectors = connectorsForWallets([{ groupName: 'Recommended', wallets: [coinbaseWallet, imTokenWallet] }], {
  appName: 'EthDA',
  appUrl: 'https://ethda.io',
  appIcon: 'https://ethda.io/logo.svg',
  projectId: walletConnectProjectId,
})
const config = createConfig({
  connectors,
  chains: [ethda] as any,
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
})

export default config
