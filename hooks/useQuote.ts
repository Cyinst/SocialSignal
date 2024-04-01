import { ethers } from "ethers"
import { quote } from "./swap/ethers"
import { useEthersProvider } from "./useProvider"
import { useCallback, useState } from "react"
import { Token } from "@uniswap/sdk-core"
import { toReadableAmount } from "@/app/libs/conversion"
export enum QuoteState {
  new = "NEW",
  quoting = "QUOTING",
  finished = "FINISHED",
  error = "ERROR",
}
const useQuote = (tokenA: Token, tokenB: Token) => {
  const provider = useEthersProvider()

  const [state, setState] = useState(QuoteState.new)
  const [error, setError] = useState("")
  const executeQuote = useCallback(
    async (amount: string, side: "input" | "output") => {
      setState(QuoteState.new)
      if (Number.isNaN(amount)) {
        setError(`${amount} is not a valid number`)
        setState(QuoteState.error)
        return
      }
      const encodedAmount = ethers.utils.parseUnits(amount, "ether")
      try {
        setState(QuoteState.quoting)
        const receiptQuote = await quote(
          tokenA,
          tokenB,
          side,
          encodedAmount,
          500,
          provider
        )
        setState(QuoteState.finished)
        console.log("finished", receiptQuote[0].toString())
        console.log(ethers.utils.formatUnits(receiptQuote[0], "ether"))
        return ethers.utils.formatUnits(receiptQuote[0], "ether")
      } catch (err) {
        console.log(err)
        setState(QuoteState.error)
        setError(`something wrong happened`)
      }
    },
    [provider, tokenA, tokenB]
  )

  return { state, executeQuote, error }
}

export default useQuote
