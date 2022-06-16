import styles from './app.module.scss'
import DropdownPage from 'pages/DropdownPage'
import LoginPage from 'pages/LoginPage'

export default function App() {
  return (
    <div className={styles.app}>
      <DropdownPage />
      <LoginPage />
    </div>
  )
}
