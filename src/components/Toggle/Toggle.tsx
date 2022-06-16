import { useState } from 'react'
import cx from 'classnames'
import styles from './toggle.module.scss'

export default function Toggle() {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle((prev) => !prev)

  return (
    <div className={styles.wrapper}>
      <button type='button' onClick={handleClick}>
        <div className={cx(styles.text, { [styles.active]: toggle })}>기본</div>
        <div className={cx(styles.text, styles.right, { [styles.active]: toggle })}>상세</div>
        <div className={cx(styles.circle, { [styles.active]: toggle })} />
      </button>
    </div>
  )
}
