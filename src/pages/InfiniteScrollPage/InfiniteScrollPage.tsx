import { useSearchParams } from 'react-router-dom'
import styles from './infiniteScrollPage.module.scss'
import IphoneModel from 'components/IphoneModel/IphoneModel'
import SearchBar from 'components/SearchBar/SearchBar'
import MovieList from './MovieList/MovieList'
import { useEffect } from 'react'

export default function InfiniteScrollPage() {
  const [, setSearchParams] = useSearchParams()
  useEffect(() => {
    setSearchParams({ search: 'iron man' })
  }, [setSearchParams])

  return (
    <article>
      <IphoneModel>
        <div className={styles.content}>
          <SearchBar />
          <div className={styles.result}>
            <MovieList />
          </div>
        </div>
      </IphoneModel>
    </article>
  )
}
