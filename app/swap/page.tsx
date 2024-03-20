"use client"
import { useEthersProvider } from "@/app/hooks/useProvider"
import { SupportedChainId, SwapWidget } from "@uniswap/widgets"
import { ethers } from "ethers"
import React from "react"
import "@uniswap/widgets/fonts.css"

const Swap = () => {
  const provider = useEthersProvider() as ethers.providers.JsonRpcProvider

  return (
    <div className="Uniswap">
      <SwapWidget
        width="100%"
        defaultChainId={SupportedChainId.POLYGON}
        
        // provider={provider}
      />
    </div>
  )
}

export default Swap
