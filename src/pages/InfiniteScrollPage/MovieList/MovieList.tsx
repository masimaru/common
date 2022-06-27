import { useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import styles from './movieList.module.scss'
import { IMovieItem } from 'types/movie'
import { fetchMovieData } from 'services/movie'

import useInfiniteScroll from 'hooks/useInfiniteScroll'
import Loading from 'components/AsyncBoundary/Loading/Loading'
import Item from './MovieItem'

export default function MovieList() {
  const [searchParams] = useSearchParams()
  const searchInput = searchParams.get('search') || ''

  const [items, setItems] = useState<IMovieItem[]>([])
  const [hasNextPage, setHasNextPage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  const fetchCallback = useCallback(
    async (page: number) => {
      if (searchInput === '') return
      setIsLoading(true)
      const data = await fetchMovieData(searchInput, page)

      if (data.response === true) {
        const { searchItems, totalResults } = data
        setItems((prev) => [...prev, ...searchItems])
        const endPage = Math.ceil(Number(totalResults) / 10)
        setHasNextPage(page < endPage)
      }

      setIsLoading(false)
    },
    [searchInput]
  )

  useInfiniteScroll({
    ref: endRef,
    disable: items.length === 0,
    hasNextPage,
    fetchCallback,
  })

  useEffect(() => {
    ;(async () => {
      setHasNextPage(false)
      setItems([])
      await fetchCallback(1)
    })()
  }, [fetchCallback])

  return (
    <article className={styles.wrapper}>
      <ul>
        {items.map((item, index) => {
          const key = `${index}-${item.imdbID}`
          return <Item key={key} item={item} />
        })}
      </ul>
      {endRef && <div className={styles.endPoint} ref={endRef} />}
      {isLoading && <Loading />}
    </article>
  )
}
