import {
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
  uniswapWallet,
  bitgetWallet,
  coinbaseWallet,
  okxWallet,
} from "@rainbow-me/rainbowkit/wallets"

import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  Locale,
  ConnectButton,
  midnightTheme,
} from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
  localhost,
} from "wagmi/chains"
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    localhost,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  [publicProvider()]
)

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || ""
const appName = "Social Signal"

const { wallets } = getDefaultWallets({
  appName,
  projectId,
  chains,
})

const demoAppInfo = {
  appName,
}

const connectors = connectorsForWallets([
  // ...wallets,
  {
    groupName: "Popular",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      uniswapWallet({ projectId, chains }),
      bitgetWallet({ projectId, chains }),
      coinbaseWallet({ appName, chains }),
      okxWallet({ projectId, chains }),
    ],
  },
  // {
  //   groupName: 'Other',
  //   wallets: [
  //     argentWallet({ projectId, chains }),
  //     trustWallet({ projectId, chains }),
  //     ledgerWallet({ projectId, chains }),
  //   ],
  // },
])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})
const WagmiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        appInfo={demoAppInfo}
        modalSize="compact"
        chains={chains}
        theme={midnightTheme({
          accentColorForeground: "white",
          borderRadius: "large",
          fontStack: "system",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default WagmiProvider
