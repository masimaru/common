import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import styles from './navigation.module.scss'

export default function Navigation() {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.active]: isActive })}>
            로그인 및 회원가입
          </NavLink>
        </li>
        <li>
          <NavLink to='slider' className={({ isActive }) => cx({ [styles.active]: isActive })}>
            슬라이더
          </NavLink>
        </li>
        <li>
          <NavLink to='tabMenu' className={({ isActive }) => cx({ [styles.active]: isActive })}>
            탭메뉴
          </NavLink>
        </li>
        <li>
          <NavLink to='toggle' className={({ isActive }) => cx({ [styles.active]: isActive })}>
            토글
          </NavLink>
        </li>
        <li>
          <NavLink to='dropdown' className={({ isActive }) => cx({ [styles.active]: isActive })}>
            드롭다운
          </NavLink>
        </li>
        <li>
          <NavLink to='iphone' className={({ isActive }) => cx({ [styles.active]: isActive })}>
            아이폰 목업
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
