import { ChainId, Token } from "@uniswap/sdk-core"

export const SWAP_ROUTER_ADDRESS = "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E"
const QUOTER_V2_ADDRESS = "0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3"

export const SS_TOKEN = new Token(
  ChainId.SEPOLIA,
  "0x34A87A110c9c6834cC90c7Ee5A8A13803b332632",
  18,
  undefined,
  "Social Signal"
)
export const SEPOLIA_ETH_TOKEN = new Token(
  ChainId.SEPOLIA,
  "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
  18,undefined,"WETH"
)
