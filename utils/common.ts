export function sleep(t: number = 0) {
  return new Promise<undefined>((resolve) => {
    setTimeout(() => resolve(undefined), t)
  })
}
