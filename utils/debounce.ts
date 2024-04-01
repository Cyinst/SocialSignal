type AnyFunction = (...args: any[]) => any

function debounce<F extends AnyFunction>(
  func: F,
  delay: number
): (...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null

  return function debounced(...args: Parameters<F>) {
    clearTimeout(timeoutId!)
    timeoutId = setTimeout(() => {
      func(...args)
      timeoutId = null
    }, delay)
  }
}

export default debounce
