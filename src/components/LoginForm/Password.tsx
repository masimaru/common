import { ChangeEvent, useState } from 'react'
import cx from 'classnames'
import { EyeIcon, EyeSlashIcon } from 'assets/svgs'
import styles from './_shared/loginSection.module.scss'

interface IProps {
  pwd: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Password({ pwd, handleChange }: IProps) {
  const [isView, setIsView] = useState(false)
  const handleClick = () => setIsView((prev) => !prev)

  return (
    <section className={styles.wrapper}>
      <label className={styles.label} htmlFor='pwd'>
        Password
      </label>
      <div className={styles.inputBox}>
        <input
          type={isView ? 'text' : 'password'}
          id='pwd'
          placeholder='Password'
          autoComplete='off'
          required
          value={pwd}
          onChange={handleChange}
        />
        <button className={cx(styles.iconBox, { [styles.active]: isView })} type='button' onClick={handleClick}>
          {isView ? <EyeIcon fill='currentColor' /> : <EyeSlashIcon fill='currentColor' />}
        </button>
      </div>
    </section>
  )
}
