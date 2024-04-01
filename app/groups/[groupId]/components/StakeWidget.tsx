import React, { useCallback, useState } from "react"
import { Input, Button, Select, SelectItem } from "@nextui-org/react"
import { stake } from "@/hooks/swap/ethers"
import { ethers } from "ethers"
import { useEthersSigner } from "@/hooks/useProvider"
import toast from "react-hot-toast"
import { useAccount, useBalance } from "wagmi"
import { SS_TOKEN } from "@/hooks/swap/constants"
const tokens = [SS_TOKEN]
const StakeWidget = () => {
  const [amount, setAmount] = useState("0")
  const signer = useEthersSigner()
  const { address } = useAccount()
  const [tokenAddress, setTokenAddress] = useState(SS_TOKEN.address)
  const tokenBalance = useBalance({
    address: address!,
    token: tokenAddress! as `0x${string}`,
  })
  console.log(tokenBalance)
  const [isLoading, setIsLoading] = useState(false)
  const handlePressAmountMax = useCallback(() => {}, [])
  const handleStake = useCallback(async () => {
    setIsLoading(true)
    try {
      const receiptStake = await stake(
        SS_TOKEN,
        ethers.utils.parseUnits(amount, "ether"),
        signer
      )
      toast("stake successfully")
    } catch (err) {
      toast("something went wrong")
    } finally {
      setIsLoading(false)
    }
  }, [amount, signer])
  return (
    <div className="w-full mx-auto rounded-lg ">
      <div className="flex justify-between items-start gap-10 my-4">
        <div className="rounded-md">
          <Input
            endContent={
              <Button onPress={handlePressAmountMax} className="bg-[#26273E]">
                max
              </Button>
            }
            type="number"
            value={amount}
            size="lg"
            className="max-w-md"
            onValueChange={(value) => {
              setAmount(value)
            }}
          ></Input>
        </div>
        <div className="w-[30%]">
          <Select
            isDisabled
            items={tokens}
            size="sm"
            label="select input token"
            defaultSelectedKeys={[SS_TOKEN.address]}
            onChange={(e) => {
              setTokenAddress(e.target.value)
            }}
          >
            {tokens.map((item) => (
              <SelectItem key={item.address} textValue={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
          <div>
            balance :
            {!!tokenAddress
              ? ethers.utils
                  .formatEther(tokenBalance.data?.value! || 0)
                  .slice(0, 6)
              : 0}
          </div>
        </div>
      </div>
      <Button onPress={handleStake} fullWidth isLoading={isLoading}>
        Stake
      </Button>
    </div>
  )
}

export default StakeWidget
