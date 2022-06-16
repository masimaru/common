import { ChangeEvent, useEffect, useState } from 'react'
import cx from 'classnames'
import { CircleCheckIcon } from 'assets/svgs'
import styles from './_shared/loginSection.module.scss'

// w3c 정규표현식 패턴(https://www.regextester.com/97767)
const regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface IProps {
  email: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Email({ email, handleChange }: IProps) {
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (regEmail.test(email)) setIsValid(true)
    else setIsValid(false)
  }, [email])

  return (
    <section className={styles.wrapper}>
      <label className={styles.label} htmlFor='email'>
        E-mail
      </label>
      <div className={styles.inputBox}>
        <input
          type='text'
          id='email'
          value={email}
          onChange={handleChange}
          placeholder='E-mail'
          autoComplete='off'
          required
        />
        <div className={cx(styles.iconBox, { [styles.active]: isValid })}>
          <CircleCheckIcon fill='currentColor' />
        </div>
      </div>
    </section>
  )
}
