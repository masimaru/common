import styles from './movieItem.module.scss'
import { IMovieItem } from 'types/movie'

interface IProps {
  item: IMovieItem
}

export default function MovieItem({ item }: IProps) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.imgBox}>
        <img src={item.Poster} alt='movie-poster' />
      </div>
      <ul className={styles.infoList}>
        <li className={styles.title}>{item.Title}</li>
        <li className={styles.info}>
          <span>{item.Year}</span>
          <span>/</span>
          <span>{item.Type}</span>
        </li>
      </ul>
    </li>
  )
}
