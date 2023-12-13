function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(func: F, delay: number) {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<F>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), delay)
  }
}

function throttle<F extends (...args: Parameters<F>) => ReturnType<F>>(func: F, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | undefined
  return (...args: Parameters<F>) => {
    if (timeout) return
    timeout = setTimeout(() => {
      func(...args)
      timeout = undefined
    }, delay)
  }
}

export {
  debounce,
  throttle
}