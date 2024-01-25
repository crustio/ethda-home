import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'

import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { defineChain, getAddress } from 'viem/utils'
import {} from 'wagmi/connectors'
import { UserRejectedRequestError } from 'viem'
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
const cbConnector = new CoinbaseWalletConnector({
  chains: [ethda],
  options: {
    headlessMode: false,
    appName: 'Ethda',
  },
})
;(cbConnector as any).connect = async ({ chainId }: { chainId?: number } = {}) => {
  const anyCb = cbConnector as any
  const provider = await cbConnector.getProvider()
  const reqAccounts = async (): Promise<`0x${string}`[]> => {
    try {
      const accounts = (
        (await provider.request({
          method: 'eth_requestAccounts',
        })) as string[]
      ).map((x) => getAddress(x))
      return accounts
    } catch (error) {
      if (error && (error as any).code == 4902) return await reqAccounts()
      throw error
    }
  }
  try {
    const accounts = await reqAccounts()
    provider.on('accountsChanged', anyCb.onAccountsChanged)
    provider.on('chainChanged', anyCb.onChainChanged)
    provider.on('disconnect', anyCb.onDisconnect.bind(anyCb))
    // Switch to chain if provided
    let currentChainId = await cbConnector.getChainId()
    console.info('doconect:', chainId, currentChainId)
    if (chainId && currentChainId !== chainId) {
      const chain = await anyCb.switchChain!({ chainId }).catch((error: any) => {
        console.info('switchError:', error)
        if (error.code === UserRejectedRequestError.code) throw error
        return { id: currentChainId }
      })
      currentChainId = chain?.id ?? currentChainId
    }
    console.info('doconectEnd:', currentChainId, accounts)
    const account = getAddress(accounts[0])
    return {
      account,
      chain: {
        id: currentChainId,
        unsupported: (cbConnector as any).isChainUnsupported(currentChainId),
      },
    }
  } catch (error) {
    if (/(user closed modal|accounts received is empty|user denied account)/i.test((error as Error).message))
      throw new UserRejectedRequestError(error as Error)
    throw error
  }
}
const connectors = [
  cbConnector,
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
