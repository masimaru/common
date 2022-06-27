import { RefObject, useEffect, useRef } from 'react'

interface IProps {
  ref: RefObject<HTMLElement>
  disable: boolean
  hasNextPage: boolean
  fetchCallback: (page: number) => Promise<void>
}

export default function useInfiniteScroll({ ref, disable, hasNextPage, fetchCallback }: IProps) {
  const page = useRef(1)

  useEffect(() => {
    if (!ref.current || disable || !hasNextPage) return undefined

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (target.isIntersecting) {
        page.current += 1
        fetchCallback(page.current)
      }
    }

    const option = {
      rootMargin: '0px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    observer.observe(ref.current)

    return () => {
      observer && observer.disconnect()
      page.current = 1
    }
  }, [disable, fetchCallback, hasNextPage, ref])
}
