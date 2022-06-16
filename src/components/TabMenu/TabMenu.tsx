import { useState } from 'react'
import cx from 'classnames'
import styles from './tabMenu.module.scss'

interface IProps {
  dataList: { id: number; name: string }[]
}

export default function TabMenu({ dataList }: IProps) {
  const [currentId, setCurrentId] = useState(dataList[0].id)
  const handleClick = (id: number) => () => setCurrentId(id)

  return (
    <div className={styles.wrapper}>
      <ul>
        {dataList.map(({ id, name }) => (
          <li className={cx(styles.menu, { [styles.active]: currentId === id })} key={`item-${id}`}>
            <button type='button' onClick={handleClick(id)}>
              {name}
            </button>
          </li>
        ))}
        <li className={styles.bottomBar} style={{ left: `calc(${currentId} * 160px + 5px)` }} />
      </ul>
    </div>
  )
}
