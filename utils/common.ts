export function sleep(t: number = 0) {
  return new Promise<undefined>((resolve) => {
    setTimeout(() => resolve(undefined), t)
  })
}

export const formatEthereumAddress = (address: any) => {
  if (!address) {
    return ''
  }

  const prefix = address?.slice(0, 7)
  const suffix = address?.slice(-5)
  const ellipsis = '...'

  return `${prefix}${ellipsis}${suffix}`
}

export const scrollToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

export function shortStr(str?: string, startLen: number = 6, endLen: number = 6) {
  if (!str) return ''
  if (str.length <= startLen + endLen) return str
  const start = str?.substring(0, startLen) || ''
  const end = str?.substring(str.length - endLen) || ''
  return `${start}...${end}`
}
