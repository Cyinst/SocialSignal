import { Token } from "@uniswap/sdk-core"

interface ExampleConfig {
  rpc: {
    local: string
    mainnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

const currentConfig: ExampleConfig = {
  rpc: {
    local: "http://localhost:8545",
    mainnet: "https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721",
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 1000,
    out: WETH_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
}
