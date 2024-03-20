import { create } from "zustand"

const useSwapAmount = create((set) => ({
  amount: 0,
  setAmount: (amount: number) => {
    set(() => ({ amount }))
  },
}))

export { useSwapAmount }
