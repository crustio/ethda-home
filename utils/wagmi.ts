import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { createConfig, http } from 'wagmi'

import { defineChain } from 'viem/utils'
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
    },
  },
  contracts: {
    // blobTo: { address: '0x9FC2d50067AC5B732cA4D02a2d1A8F286882D909' },
    // blobTo: { address: zeroAddress },
    blobTo: { address: '0xC23fD87AB80750075Ed34D0aAa6d302C9df4a7f9' },
  },
  custom: {
    bridgeUrl: 'https://bridge-testnet.ethda.io',
  },

  // id: 1001,
  // network: 'EthDA Testnet',
  // name: 'EthDA Testnet',
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

import { metaMaskWallet, tokenPocketWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets'
import { createClient, zeroAddress } from 'viem'
const connectors = connectorsForWallets([{ groupName: 'Suggested', wallets: [metaMaskWallet, tokenPocketWallet, walletConnectWallet] }], {
  appName: 'EthDA',
  appUrl: 'https://ethda.io',
  appIcon: 'https://ethda.io/logo.svg',
  projectId: walletConnectProjectId,
})
console.info('connectors', connectors)
const config = createConfig({
  connectors,
  chains: [ethda] as any,
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
})

export default config
