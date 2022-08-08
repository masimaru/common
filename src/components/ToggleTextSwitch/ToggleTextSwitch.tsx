import { ChangeEventHandler } from 'react'
import styles from './toggleTextSwitch.module.scss'

interface IProps {
  value: number
  name: string
  dataList: { id: string; text: string }[]
  handleToggle: (value: number) => void
}

export default function ToggleTextSwitch({ value, name, dataList, handleToggle }: IProps) {
  const size = dataList.length
  const handleClick: ChangeEventHandler<HTMLInputElement> = (e) => handleToggle(Number(e.target.value))

  const sliderStyle = (id: number) => ({
    '--size': `calc(100% / ${size})`,
    left: `calc(${id} * var(--size) + 3px)`,
    width: `calc(var(--size) - 3px * 2)`,
  })

  return (
    <div className={styles.wrapper}>
      {dataList.map((data, index) => (
        <div className={styles['input-box']} key={data.id}>
          <input
            type='checkbox'
            id={`${name}-${data.id}`}
            name={name}
            value={index}
            onChange={handleClick}
            checked={value === index}
          />
          <label htmlFor={`${name}-${data.id}`}>{data.text}</label>
        </div>
      ))}

      <div className={styles.slider} style={sliderStyle(value)} />
    </div>
  )
}
