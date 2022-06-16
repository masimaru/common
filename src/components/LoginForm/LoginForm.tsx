import { ChangeEvent, useState } from 'react'
import Email from './Email'
import styles from './loginForm.module.scss'
import Password from './Password'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
  const handleChangePwd = (e: ChangeEvent<HTMLInputElement>) => setPwd(e.currentTarget.value)

  return (
    <form className={styles.wrapper}>
      <Email email={email} handleChange={handleChangeEmail} />
      <Password pwd={pwd} handleChange={handleChangePwd} />
    </form>
  )
}
