import { Token, ChainId } from "@uniswap/sdk-core"
import { Config } from "./pool"

const SS_TOKEN_ADDRESS = "0x826a25Ab9A302638A7B2eF51d128630Aab365d62"
const UNI_TOKEN_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"

const SEPOLIA_ETH_TOKEN_ADDRESS = ""
const SS_TOKEN = new Token(ChainId.SEPOLIA, SS_TOKEN_ADDRESS, 18)
const UNI_TOKEN = new Token(ChainId.SEPOLIA, UNI_TOKEN_ADDRESS, 18)
// const SEPOLIA_ETH_TOKEN = new Token(
//   ChainId.SEPOLIA,
//   SEPOLIA_ETH_TOKEN_ADDRESS,
//   18
// )

const config: Config = {
  tokens: {
    in: SS_TOKEN,
    out: UNI_TOKEN,
    amountIn: 0.001,
    poolFee: 3000,
  },
}
