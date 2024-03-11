import { Token } from "@uniswap/sdk-core"
import { USDC_TOKEN, WETH_TOKEN } from "./constants"
import { FeeAmount } from "@uniswap/v3-sdk"

export enum Environment {
  MAINNET,
  WALLET_EXTENSION,
}
interface ExampleConfig {
  env: Environment
  rpc: {
    local: string
    mainnet: string
  }
  wallet: {
    address: string
    privateKey: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

const CurrentConfig: ExampleConfig = {
  env: Environment.WALLET_EXTENSION,
  rpc: {
    local: "http://localhost:8545",
    mainnet: "https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721",
  },
  wallet: {
    address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    privateKey:
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 1000,
    out: WETH_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
}

export { CurrentConfig }
