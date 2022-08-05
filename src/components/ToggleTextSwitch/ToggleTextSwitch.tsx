import { useState } from 'react'
import styles from './toggleTextSwitch.module.scss'

interface IProps {
  dataList: { id: string; text: string }[]
}

export default function ToggleTextSwitch({ dataList }: IProps) {
  const [currentId, setCurrentId] = useState(0)
  const handleClick = (id: number) => () => setCurrentId(id)

  const size = dataList.length

  const sliderStyle = (id: number) => ({
    '--size': `calc(100% / ${size})`,
    left: `calc(${id} * var(--size) + 3px)`,
    width: `calc(var(--size) - 3px * 2)`,
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.toggleBox}>
        {dataList.map((data, index) => (
          <div className={styles.inputBox} key={data.id}>
            <input
              type='radio'
              id={data.id}
              name='switch'
              value={index}
              onChange={handleClick(index)}
              checked={currentId === index}
            />
            <label htmlFor={data.id}>{data.text}</label>
          </div>
        ))}

        <div className={styles.slider} style={sliderStyle(currentId)} />
      </div>
    </div>
  )
}
