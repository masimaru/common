import { ChangeEventHandler, useState } from 'react'
import styles from './toggleTextSwitch.module.scss'

interface IProps {
  name: string
  dataList: { id: string; text: string }[]
}

export default function ToggleTextSwitch({ name, dataList }: IProps) {
  const [currentId, setCurrentId] = useState(0)
  const size = dataList.length

  const handleClick: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target
    setCurrentId(Number(value))
  }

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
              type='checkbox'
              id={`${name}-${data.id}`}
              name={name}
              value={index}
              onChange={handleClick}
              checked={currentId === index}
            />
            <label htmlFor={`${name}-${data.id}`}>{data.text}</label>
          </div>
        ))}

        <div className={styles.slider} style={sliderStyle(currentId)} />
      </div>
    </div>
  )
}
