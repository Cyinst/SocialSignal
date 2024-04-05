import { Token } from "@uniswap/sdk-core"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Input, Button, Select, SelectItem, Image } from "@nextui-org/react"
import { SS_TOKEN, SEPOLIA_ETH_TOKEN } from "@/hooks/swap/constants"
import { useAccount, useBalance } from "wagmi"
import useQuote from "@/hooks/useQuote"
import useSwap from "@/hooks/swap"
import { ethers } from "ethers"
import debounce from "@/utils/debounce"
import toast from "react-hot-toast"
import { ConnectButton } from "@rainbow-me/rainbowkit"
const tokens: Token[] = [SS_TOKEN, SEPOLIA_ETH_TOKEN]
const SwapWidget = () => {
  const [inputTokenAmount, setInputTokenAmount] = useState("0")
  const [outputTokenAmount, setOutputTokenAmount] = useState("0")
  const [inputTokenAddress, setInputTokenAddress] = useState("")
  const [outputTokenAddress, setOutputTokenAddress] = useState("")
  const { address } = useAccount()
  const inputTokenBalance = useBalance({
    address: address!,
    token: inputTokenAddress! as `0x${string}`,
  })
  console.log(inputTokenBalance)
  const outputTokenBalance = useBalance({
    address: address!,
    token: outputTokenAddress! as `0x${string}`,
  })
  const inputToken = useMemo(
    () => tokens.find(({ address }) => address === inputTokenAddress),
    [inputTokenAddress]
  )
  const outputToken = useMemo(
    () => tokens.find(({ address }) => address === outputTokenAddress),
    [outputTokenAddress]
  )
  const isTokensSelected = useMemo(
    () => Boolean(inputToken) && Boolean(outputToken),
    [inputToken, outputToken]
  )
  const {
    state: quoteState,
    executeQuote,
    error: quoterError,
  } = useQuote(inputToken!, outputToken!)
  const [isSwapping, setIsSwapping] = useState(false)
  const { state: swapState, executeSwap } = useSwap(inputToken!, outputToken!, {
    onApproved: () => toast("approved successfully!  waiting for swapping!"),
    onSwappeed: () => {
      setInputTokenAmount("0")
      setOutputTokenAmount("0")
      toast("swapped successfully ")
    },
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceQuote = useCallback(
    debounce(
      async (
        side: "input" | "output",
        amount: string,
        onQuoted?: (amount: string) => void
      ) => {
        console.log(side, inputToken, outputToken, amount)
        if (inputToken && outputToken) {
          console.log("quoting", amount)
          const quoteResult = await executeQuote(amount, side)
          onQuoted && onQuoted(quoteResult!)
        }
      },
      1000
    ),
    [inputToken, outputToken, executeQuote]
  )

  const handlePressInputAmountMax = useCallback(() => {
    const amount = String(
      Number(
        ethers.utils.formatEther(inputTokenBalance.data?.value! || 0)
      ).toFixed(6)
    )
    if (isTokensSelected) {
      debounceQuote("input", amount, (amount) => {
        setOutputTokenAmount(amount)
      })
      setInputTokenAmount(amount)
    }
  }, [debounceQuote, inputTokenBalance.data?.value, isTokensSelected])
  const handlePressOutputAmountMax = useCallback(() => {
    const amount = String(
      Number(
        ethers.utils.formatEther(outputTokenBalance.data?.value! || 0)
      ).toFixed(6)
    )
    if (isTokensSelected) {
      debounceQuote("output", amount, (amount) => {
        setInputTokenAmount(amount)
      })
      setOutputTokenAmount(amount)
    }
  }, [debounceQuote, isTokensSelected, outputTokenBalance.data?.value])

  const [oneInputTokenCost, setOneInputTokenCost] = useState("0")
  useEffect(() => {
    if (isTokensSelected) {
      debounceQuote("input", "1", (amount) => setOneInputTokenCost(amount))
    }
  }, [debounceQuote, isTokensSelected])

  return (
    <div className="w-full mx-auto px-16 py-4 min-w-[800px]">
      <div className="mb-4 flex items-center justify-center text-[40px] text-white font-peace drop-shadow-[0px_4px_8px_#b133ff]">
        Swap
      </div>
      <div className="bg-slate-800 rounded-md p-4">
        <div className="flex justify-between items-start gap-10 my-4 ">
          <div className="rounded-md">
            <Input
              disabled={!isTokensSelected}
              endContent={
                <Button
                  onPress={handlePressInputAmountMax}
                  className="bg-[#26273E]"
                >
                  max
                </Button>
              }
              type="number"
              value={inputTokenAmount}
              size="lg"
              className="max-w-md"
              onValueChange={(value) => {
                setInputTokenAmount(value)

                !Number.isNaN(value) &&
                  debounceQuote("input", value, (amount) => {
                    setOutputTokenAmount(amount)
                  })
              }}
            ></Input>
            <div>$0.0</div>
          </div>
          <div className="w-[40%]">
            <Select
              items={tokens}
              size="sm"
              label="select input token"
              selectedKeys={[inputTokenAddress].filter(Boolean)}
              onChange={(e) => {
                setInputTokenAddress(e.target.value)
              }}
            >
              {tokens
                .filter(({ address }) => address !== outputTokenAddress)
                .map((item) => (
                  <SelectItem key={item.address} textValue={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
            </Select>
            <div>
              balance :
              {inputToken
                ? ethers.utils
                    .formatEther(inputTokenBalance.data?.value! || 0)
                    .slice(0, 6)
                : 0}
            </div>
          </div>
        </div>
        <div className="my-4 flex h-10 items-center">
          <div className="w-6 h-6 mx-2">
            <Image src="/arrowDown.svg" alt="" />
          </div>
          {isTokensSelected && (
            <div>
              <div>Market Price</div>

              {oneInputTokenCost !== "0" ? (
                <div>
                  1 {inputToken!.name} ={" "}
                  {String(Number(oneInputTokenCost).toFixed(2))}{" "}
                  {outputToken!.name}
                </div>
              ) : (
                "fetching"
              )}
            </div>
          )}
        </div>
        <div className="flex justify-between items-start gap-10 my-4">
          <div className="rounded-md">
            <Input
              disabled={!isTokensSelected}
              endContent={
                <Button
                  onPress={handlePressOutputAmountMax}
                  className="bg-[#26273E]"
                >
                  max
                </Button>
              }
              type="number"
              size="lg"
              className="max-w-md"
              value={outputTokenAmount}
              onValueChange={(value) => {
                setOutputTokenAmount(value)

                !Number.isNaN(value) &&
                  debounceQuote("output", value, (amount) => {
                    setInputTokenAmount(amount)
                  })
              }}
            ></Input>
            <div>$0.0</div>
          </div>
          <div className="w-[40%]">
            <Select
              size="sm"
              items={tokens}
              onChange={(e) => {
                setOutputTokenAddress(e.target.value)
              }}
              label="select output token"
              selectedKeys={[outputTokenAddress].filter(Boolean)}
            >
              {tokens
                .filter(({ address }) => address !== inputTokenAddress)
                .map((token) => (
                  <SelectItem key={token.address} textValue={token.name}>
                    <div>{token.name}</div>
                  </SelectItem>
                ))}
            </Select>
            <div>
              balance :
              {outputToken
                ? ethers.utils
                    .formatEther(outputTokenBalance.data?.value! || 0)
                    .slice(0, 6)
                : 0}
            </div>
          </div>
        </div>
        {!!address ? (
          <Button
            isLoading={isSwapping}
            onPress={async () => {
              try {
                setIsSwapping(true)
                await executeSwap(inputTokenAmount)
              } catch (err) {
              } finally {
                setIsSwapping(false)
              }
            }}
            fullWidth
          >
            swap
          </Button>
        ) : (
          <ConnectButton.Custom>
            {({
              mounted,
              authenticationStatus,
              account,
              chain,
              openConnectModal,
              openChainModal,
              openAccountModal,
            }) => {
              const ready = mounted && authenticationStatus !== "loading"
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated")

              return (() => {
                if (!connected) {
                  return (
                    <Button onClick={openConnectModal} fullWidth>
                      Connect Wallet
                    </Button>
                  )
                }

                if (chain.unsupported) {
                  return (
                    <Button onClick={openChainModal} type="button">
                      Wrong network
                    </Button>
                  )
                }
              })()
            }}
          </ConnectButton.Custom>
        )}
      </div>
    </div>
  )
}

export default SwapWidget
