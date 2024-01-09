import { getDefaultConfig } from 'connectkit'
import { arbitrumSepolia } from 'viem/chains'
import { createConfig } from 'wagmi'

const walletConnectProjectId = '2222222'

const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: 'Scratch',
    chains: [arbitrumSepolia],
    walletConnectProjectId,
  }),
)
export default config
