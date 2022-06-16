import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import styles from './navigation.module.scss'

export default function Navigation() {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.active]: isActive })}>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to='about2' className={({ isActive }) => cx({ [styles.active]: isActive })}>
            about2
          </NavLink>
        </li>
        <li>
          <NavLink to='about3' className={({ isActive }) => cx({ [styles.active]: isActive })}>
            about3
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
