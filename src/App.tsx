import styles from './app.module.scss'
import DropdownPage from 'pages/DropdownPage'
import LoginPage from 'pages/LoginPage'
import SliderPage from 'pages/SliderPage'
import TabMenuPage from 'pages/TabMenuPage'
import TogglePage from 'pages/TogglePage'

export default function App() {
  return (
    <div className={styles.app}>
      {/* <DropdownPage />
      <LoginPage />
      <SliderPage />
      <TabMenuPage /> */}
      <TogglePage />
    </div>
  )
}
