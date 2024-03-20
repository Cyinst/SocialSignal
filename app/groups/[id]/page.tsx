"use client"
import React from "react"
import Daskboard from "./components/Daskboard"
import GroupInfo from "./components/GroupInfo"
import { SwapWidget } from "@uniswap/widgets"

const Home = () => {
  return (
    <div className="mt-16 mx-auto">
      <div className="mb-8">
        <GroupInfo />
      </div>
      <div className="mt-36 overflow-hidden">
        <Daskboard />
      </div>
      <div className="flex justify-center items-center h-32 w-[80%] mx-auto bg-slate-800">
        should be a swap widget
      </div>
    </div>
  )
}

export default Home
