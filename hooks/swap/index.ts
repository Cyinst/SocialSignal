import { ethers } from "ethers"
import { useAccount, useChainId } from "wagmi"
import { useEthersProvider, useEthersSigner } from "../useProvider"
import { useCallback, useState } from "react"
import { Token } from "@uniswap/sdk-core"

import { approve, swap, quote } from "./ethers"
import { FeeAmount } from "@uniswap/v3-sdk"
export enum SwapState {
  new = "NEW",
  approving = "APPROVING",
  approved = "APPROVED",
  swapping = "SWAPPING",
  finished = "FINISHED",
  error = "ERROR",
}

const useSwap = (
  tokenA: Token,
  tokenB: Token,
  option?: {
    onApproved?: () => void
    onSwappeed?: () => void
    onError?: () => void
  }
) => {
  // const { chains, switchChain } = useSwitchChain()
  const account = useAccount()
  const chainId = useChainId()
  const [transactionHash, setTransactionHash] = useState("")

  const [state, setState] = useState<SwapState>(SwapState.new)
  const [error, setError] = useState("")

  const signer = useEthersSigner()
  const executeSwap = useCallback(
    async (amount: string) => {
      if (Number.isNaN(amount)) {
        setError(`${amount} is not a valid number`)
        setState(SwapState.error)
        option?.onError?.()
        console.log(amount)
        return
      }
      const encodedAmountIn = ethers.utils.parseUnits(amount, "ether")
      try {
        setState(SwapState.approving)
        const receiptApprove = await approve(tokenA, encodedAmountIn, signer)
        option?.onApproved?.()
        setState(SwapState.swapping)
        const receiptSwap = await swap(
          tokenA,
          tokenB,
          encodedAmountIn,
          500,
          account.address!,
          signer
        )
        setState(SwapState.finished)
        console.log("end")
        option?.onSwappeed?.()
      } catch (err) {
        setState(SwapState.error)
        console.log(err)
        option?.onError?.()
        setError(`something wrong happened after state ${state}`)
      }
    },
    [account.address, option, signer, state, tokenA, tokenB]
  )
  return { executeSwap, error, state }
}

export default useSwap
