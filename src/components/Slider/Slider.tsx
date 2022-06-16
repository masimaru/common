import { FormEvent } from 'react'
import cx from 'classnames'
import styles from './slider.module.scss'

interface IProps {
  value: number
  handleChange: (value: number) => void
}

const RANGE_DATA_LIST = [1, 25, 50, 75, 100]
export default function Slider({ value, handleChange }: IProps) {
  const handleRangeInput = (e: FormEvent<HTMLInputElement>) => handleChange(Number(e.currentTarget.value))
  const handleClick = (data: number) => () => handleChange(data)

  return (
    <div className={styles.wrapper}>
      <section className={styles.result}>
        <span className={styles.rangeTxt}>{value}</span>%
      </section>

      <section className={styles.rangeBox}>
        <input type='range' min='1' max='100' value={value} onInput={handleRangeInput} />
        <ul>
          {RANGE_DATA_LIST.map((data) => (
            <li className={cx(styles.dot, { [styles.active]: value >= data })} key={`dot-${data}`} />
          ))}
        </ul>
        <ul>
          {RANGE_DATA_LIST.map((data) => (
            <li className={styles.label} key={`label-${data}`}>
              <button type='button' className={cx({ [styles.active]: value >= data })} onClick={handleClick(data)}>
                {data}%
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.progressBar} style={{ width: `${value}%` }} />
      </section>
    </div>
  )
}
