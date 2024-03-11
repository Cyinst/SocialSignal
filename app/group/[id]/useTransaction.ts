import { parseEther } from "ethers"
import { useSendTransaction, useWaitForTransaction } from "wagmi"
const useTransition = () => {
  const {
    data: hash,
    error,
    isLoading,
    isError,
    sendTransaction: sendTransactionFn,
  } = useSendTransaction()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransaction({ hash: hash?.hash })

  const sendTransition = async ({
    to,
    value,
  }: {
    to: `0x${string}`
    value: string
  }) => {
    try {
      console.log(to, value)
      sendTransactionFn({ to, value: parseEther(value) })
    } catch (err) {
      console.log(err)
    }
  }
  return {
    hash,
    sendTransition,
    isLoading,
    error,
    isError,
    isConfirming,
    isConfirmed,
  }
}

export default useTransition
