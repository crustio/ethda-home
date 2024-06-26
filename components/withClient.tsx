import { useEffect, useState } from 'react'

export function withClient<T = {}>(WrappedComponent: React.ComponentType<T>) {
  return function WithClient(p: T) {
    const [show, setShow] = useState(false)
    useEffect(() => {
      setShow(true)
    }, [])
    if (!show) return null
    return <WrappedComponent {...(p as any)} />
  }
}
