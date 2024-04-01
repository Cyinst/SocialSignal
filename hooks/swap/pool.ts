import { Token } from "@uniswap/sdk-core"
import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json"
import { FeeAmount, Pool, computePoolAddress } from "@uniswap/v3-sdk"
import { ethers, providers } from "ethers"
import { mainnet } from "viem/chains"

interface PoolInfo {
  token0: string
  token1: string
  fee: number
  tickSpacing: number
  sqrtPriceX96: ethers.BigNumber
  liquidity: ethers.BigNumber
  tick: number
}

const POOL_ADDRESS = "0x813d502152A0D6750534FA6836567b3c57EcE166"
const Mainnet_ADDRESS = "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"
export async function getPoolInfo(
  provider: providers.BaseProvider
): Promise<PoolInfo> {
  const poolContract = new ethers.Contract(
    Mainnet_ADDRESS,
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

  console.log(token0, token1, fee)
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

export const getPool = (
  tokenA: Token,
  tokenB: Token,
  poolFee: FeeAmount,
  poolInfo: PoolInfo
  //   provider: providers.BaseProvider
) => {
  const pool = new Pool(
    tokenA,
    tokenB,
    poolFee,
    poolInfo.sqrtPriceX96.toString(),
    poolInfo.liquidity.toString(),
    poolInfo.tick
  )
  return pool
}
