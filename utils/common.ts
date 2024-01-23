export function sleep(t: number = 0) {
  return new Promise<undefined>((resolve) => {
    setTimeout(() => resolve(undefined), t)
  })
}

export const formatEthereumAddress = (address: any) => {
  if (address && address.length <= 10) {
    return ''
  }

  const prefix = address.slice(0, 5)
  const suffix = address.slice(-5)
  const ellipsis = '...'

  return `${prefix}${ellipsis}${suffix}`
}

export const scrollToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
