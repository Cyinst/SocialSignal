import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json"
import { FeeAmount, computePoolAddress } from "@uniswap/v3-sdk"
import { ethers, providers } from "ethers"

import { Token } from "@uniswap/sdk-core"

export interface Config {
  tokens: {
    in: Token
    out: Token
    amountIn: number
    poolFee: FeeAmount.MEDIUM
  }
}

interface PoolInfo {
  token0: string
  token1: string
  fee: number
  tickSpacing: number
  sqrtPriceX96: ethers.BigNumber
  liquidity: ethers.BigNumber
  tick: number
}

export async function getPoolInfo(
  provider: providers.Provider,
  poolAddress: `0x${string}`,
  config: Config
): Promise<PoolInfo> {
  const currentPoolAddress = computePoolAddress({
    factoryAddress: poolAddress,
    tokenA: config.tokens.in,
    tokenB: config.tokens.out,
    fee: config.tokens.poolFee,
  })

  const poolContract = new ethers.Contract(
    currentPoolAddress,
    IUniswapV3PoolABI.abi,
    provider
  )

  const [token0, token1, fee, tickSpacing, liquidity, slot0] =
    await Promise.all([
      poolContract.token0(),
      poolContract.token1(),
      poolContract.fee(),
      poolContract.tickSpacing(),
      poolContract.liquidity(),
      poolContract.slot0(),
    ])

  return {
    token0,
    token1,
    fee,
    tickSpacing,
    liquidity,
    sqrtPriceX96: slot0[0],
    tick: slot0[1],
  }
}
