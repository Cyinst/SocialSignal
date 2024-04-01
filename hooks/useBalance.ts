import { Token } from "@uniswap/sdk-core"
import { useEthersSigner } from "./useProvider"
import { ethers } from "ethers"
import ERC20_ABI from "./swap/abis/erc20.json"
import { useAccount } from "wagmi"
import { balanceof } from "./swap/ethers"
import { useEffect, useState } from "react"
const useBalance = (token: Token) => {
  const signer = useEthersSigner()
  const account = useAccount()
  const [isLoading, setIsLoading] = useState(false)
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    const _fetch = async () => {
      try {
        const banlance = await balanceof(token, signer, account.address!)
        setBalance(banlance)
      } catch (err) {
      } finally {
        setIsLoading(true)
      }
    }
    _fetch()
  }, [account.address, signer, token])

  return { isLoading, balance }
}
