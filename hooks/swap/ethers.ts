import { ethers } from "ethers"
import swapRouterAbi from "./abis/swapRouterAbi.json"
import { ChainId, SWAP_ROUTER_02_ADDRESSES, Token } from "@uniswap/sdk-core"
import ERC20_ABI from "./abis/erc20.json"
import { FeeAmount } from "@uniswap/v3-sdk"
import JSBI from "jsbi"
import quoterV2Abi from "@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json"
import stakeAbi from "./abis/stake.json"
const SEPOLIA_SWAP_ROUTER_02_ADDRESS =
  "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E"
const SEPOLIA_QUOTER_V2_ADDRESS = "0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3"
export const approve = async (
  token: Token,
  amount: ethers.BigNumberish,
  signer: ethers.Signer
) => {
  const tokenContract = new ethers.Contract(
    token.address,
    ERC20_ABI.abi,
    signer
  )
  const tx = await tokenContract.approve(SEPOLIA_SWAP_ROUTER_02_ADDRESS, amount)
  console.log("approving at ", tx.hash)
  await tx.wait()
}

export const swap = async (
  tokenIn: Token,
  tokenOut: Token,
  amountIn: ethers.BigNumber,
  fee: FeeAmount,
  wallet: string,
  signer: ethers.Signer
) => {
  const swapRouter = new ethers.Contract(
    SEPOLIA_SWAP_ROUTER_02_ADDRESS,
    swapRouterAbi,
    signer
  )
  const params = {
    tokenIn: tokenIn.address,
    tokenOut: tokenOut.address,
    fee,
    recipient: wallet,
    deadline: Math.floor(Date.now()) + 18000,
    amountIn,
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0,
  }
  const tx = await swapRouter.exactInputSingle(params, {
    from: wallet,
    gasPrice: ethers.utils.parseUnits("1", "gwei"),
    gasLimit: 300000,
  })

  const recipient = await tx.wait()
  // console.log(recipient)
  const amountOut = ethers.BigNumber.from(recipient.logs[0].data)
  // console.log(amountOut)
  // console.log("Received " + ethers.utils.formatUnits(amountOut, "ether"))

  return amountOut
}
export const SS_TOKEN = new Token(
  ChainId.SEPOLIA,
  "0x34A87A110c9c6834cC90c7Ee5A8A13803b332632",
  18
)
export const SEPOLIA_ETH_TOKEN = new Token(
  ChainId.SEPOLIA,
  "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
  18
)
// const AMOUNTIN = ethers.utils.parseUnits("0.02", "ether")
// export const execute = async (wallet: string, signer: ethers.Signer) => {
//   //   const token = new ethers.Contract(SS_TOKEN, erc20Abi, signer)
//   await approve(SS_TOKEN, AMOUNTIN, signer) //approving buy

//   try {
//     await swap(SS_TOKEN, SEPOLIA_ETH_TOKEN, AMOUNTIN, 3000, wallet, signer)
//   } catch (err) {
//     console.log(err)
//   }
//   console.log("swap end")
// }

export const quote = async (
  tokenIn: Token,
  tokenOut: Token,
  side: "input" | "output",
  amount: ethers.BigNumber,
  fee: FeeAmount,
  provider: ethers.providers.BaseProvider
) => {
  const quoterContract = new ethers.Contract(
    SEPOLIA_QUOTER_V2_ADDRESS,
    quoterV2Abi.abi,
    provider
  )
  const params = {
    tokenIn: tokenIn.address,
    tokenOut: tokenOut.address,
    fee,
    [side === "input" ? "amountIn" : "amount"]: amount,
    sqrtPriceLimitX96: 0,
  }
  const quotedAmount = await quoterContract.callStatic[
    side === "input" ? "quoteExactInputSingle" : "quoteExactOutputSingle"
  ](params)
  return quotedAmount
}

export const balanceof = async (
  token: Token,
  signer: ethers.Signer,
  wallet: string
) => {
  const tokenContract = new ethers.Contract(
    token.address,
    ERC20_ABI.abi,
    signer
  )
  const tx = await tokenContract.balanceof(wallet)
  return await tx.wait()
}

export const stake = async (
  token: Token,
  amount: ethers.BigNumber,
  signer: ethers.Signer
) => {
  const stakeContract = new ethers.Contract(token.address, stakeAbi, signer)
  const tx = await stakeContract.stake(
    amount,
    ethers.utils.parseUnits("1", "ether")
  )
  return await tx.wait()
}
