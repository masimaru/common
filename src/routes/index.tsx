import LoginForm from 'components/LoginForm/LoginForm'
import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

export default function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<LoginForm type='login' />} />
        <Route path='login' element={<LoginForm type='login' />} />
        <Route path='register' element={<LoginForm type='register' />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}
