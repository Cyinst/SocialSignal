import {
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
  uniswapWallet,
  bitgetWallet,
  coinbaseWallet,
  okxWallet,
} from "@rainbow-me/rainbowkit/wallets"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  Locale,
  ConnectButton,
  midnightTheme,
} from "@rainbow-me/rainbowkit"
import { walletConnect } from "wagmi/connectors"
import {
  createConfig,
  WagmiProvider as WagmiInternalProivder,
  http,
} from "wagmi"
// import { publicProvider } from "wagmi/providers/public"
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
  goerli,
  localhost,
} from "wagmi/chains"

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || ""
const appName = "Social Signal"

// const { wallets } = getDefaultWallets({
//   appName,
//   projectId,
//   chains,
// })

const demoAppInfo = {
  appName,
}

// const connectors = connectorsForWallets([
//   // ...wallets,
//   {
//     groupName: "Popular",
//     wallets: [
//       injectedWallet({ chains }),
//       metaMaskWallet({ projectId, chains }),
//       walletConnectWallet({ projectId, chains }),
//       uniswapWallet({ projectId, chains }),
//       bitgetWallet({ projectId, chains }),
//       coinbaseWallet({ appName, chains }),
//       okxWallet({ projectId, chains }),
//     ],
//   },
//   // {
//   //   groupName: 'Other',
//   //   wallets: [
//   //     argentWallet({ projectId, chains }),
//   //     trustWallet({ projectId, chains }),
//   //     ledgerWallet({ projectId, chains }),
//   //   ],
//   // },
// ])

const wagmiConfig = createConfig({
  // autoConnect: true,
  connectors: [
    walletConnect({
      projectId,
    }),
  ],
  chains: [
    mainnet,
    polygon,
    goerli,
    sepolia,
    // optimism,
    // arbitrum,
    // base,
    // zora,
    // localhost,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [zora.id]: http(),
    [localhost.id]: http(),
    [sepolia.id]: http(),
  },
  // publicClient,
  // webSocketPublicClient,
})

const queryClient = new QueryClient()

const WagmiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <WagmiInternalProivder config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          appInfo={demoAppInfo}
          modalSize="compact"
          theme={midnightTheme({
            accentColorForeground: "white",
            borderRadius: "large",
            fontStack: "system",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiInternalProivder>
  )
}
export default WagmiProvider
