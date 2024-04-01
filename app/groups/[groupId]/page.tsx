"use client"
import React, { useCallback, useEffect } from "react"
import Daskboard from "./components/Daskboard"
import GroupInfo from "./components/GroupInfo"
import { useEthersProvider, useEthersSigner } from "@/hooks/useProvider"
import { useAccount, useSendTransaction } from "wagmi"
import OperationWidget from "./components/OperationWidget"
const Home: React.FC<{ params: { groupId: string } }> = ({
  params: { groupId },
}) => {
  const provider = useEthersProvider()
  const signer = useEthersSigner()
  const { address } = useAccount()
  return (
    <div className="mt-16 mx-auto">
      <div className="mb-8">
        <GroupInfo />
      </div>
      <div className="mt-36 overflow-hidden">
        <Daskboard />
      </div>
      <div className="flex w-full justify-center items-center mx-auto">
        <OperationWidget />
      </div>
    </div>
  )
}

export default Home
