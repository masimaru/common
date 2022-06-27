import styles from './infiniteScrollPage.module.scss'
import IphoneModel from 'components/IphoneModel/IphoneModel'
import SearchBar from 'components/SearchBar/SearchBar'
import MovieList from './MovieList/MovieList'

export default function InfiniteScrollPage() {
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
