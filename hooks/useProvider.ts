import { ethers, providers } from "ethers"
import { use, useMemo } from "react"
import type { Chain, Client, Transport } from "viem"
import { Config, useAccount, useClient } from "wagmi"

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === "fallback" || typeof window === "undefined")
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<Transport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network)
      )
    )
  return new ethers.providers.Web3Provider(window?.ethereum, "any")
}

/** Hook to convert a viem Client to an ethers.js Provider. */
export function useEthersProvider({
  chainId,
}: { chainId?: number | undefined } = {}) {
  const client = useClient<Config>({ chainId })!
  return useMemo(() => clientToProvider(client), [client])
}

export function useEthersSigner() {
  const { address } = useAccount()
  const provider = useEthersProvider() as providers.Web3Provider
  return useMemo(() => provider.getSigner(address), [address, provider])
}
