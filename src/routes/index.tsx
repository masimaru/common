import LoginForm from 'components/LoginForm/LoginForm'
import Navigation from 'components/Navigation/Navigation'
import DropdownPage from 'pages/DropdownPage'
import IphonePage from 'pages/IphonePage'
import SliderPage from 'pages/SliderPage'
import TabMenuPage from 'pages/TabMenuPage'
import TogglePage from 'pages/TogglePage'
import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

export default function App() {
  return (
    <div className={styles.app}>
      <aside>
        <Navigation />
      </aside>

      <main>
        <Routes>
          <Route path='/' element={<LoginForm type='login' />} />
          <Route path='login' element={<LoginForm type='login' />} />
          <Route path='register' element={<LoginForm type='register' />} />

          <Route path='slider' element={<SliderPage />} />
          <Route path='TabMenu' element={<TabMenuPage />} />
          <Route path='toggle' element={<TogglePage />} />
          <Route path='dropdown' element={<DropdownPage />} />
          <Route path='iphone' element={<IphonePage />} />

          <Route path='*' element={<div>404</div>} />
        </Routes>
      </main>
    </div>
  )
}
