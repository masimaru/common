import { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './loginForm.module.scss'
import Email from './Email'
import Password from './Password'

interface IProps {
  type: 'login' | 'register'
}

export default function LoginForm({ type }: IProps) {
  const name = {
    login: '로그인',
    register: '회원가입',
  }[type]
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [errorMeg, setErrorMeg] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
  const handleChangePwd = (e: ChangeEvent<HTMLInputElement>) => setPwd(e.currentTarget.value)
  const handleChangeConfirmPwd = (e: ChangeEvent<HTMLInputElement>) => setConfirmPwd(e.currentTarget.value)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (pwd !== confirmPwd) {
      setErrorMeg('비밀번호가 일치하지 않습니다.')
      setPwd('')
      setConfirmPwd('')
      return
    }

    setErrorMeg('')
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <h2>{name}</h2>
      <div className={styles.content}>
        <Email email={email} handleChange={handleChangeEmail} />
        <Password name='비밀번호' pwd={pwd} handleChange={handleChangePwd} />
        {type === 'register' && (
          <Password name='비밀번호 확인' pwd={confirmPwd} handleChange={handleChangeConfirmPwd} />
        )}
      </div>
      <div className={styles.error}>{errorMeg}</div>
      <footer>
        <button type='submit'>{name}</button>
        <div className={styles.linkBox}>
          {type === 'register' ? <Link to='/login'>로그인</Link> : <Link to='/register'>회원가입</Link>}
        </div>
      </footer>
    </form>
  )
}
