import { Link } from "react-router-dom"
import { t } from "i18next"
import { PATHS } from "../../consts/paths"
import styles from './Navbar.module.css'
import classNames from 'classnames'




export const Navbar = () => {

      const currentDay = new Date().getDay()
    const isWeekend = currentDay === 0 || currentDay === 6
    const weekendOrNot = isWeekend ? false : true

    const availablePaths = PATHS.filter(path => path.available)

    return (
        <nav>
          <ul className={classNames(styles.main, {[styles.weekend]: weekendOrNot})}>
            {availablePaths.map((link) => (
              <li key={link.key}  >
                <Link to={link.path} className={styles.link}>{t(link.key)}</Link>
              </li>
            ))}
          </ul>
      </nav>
    )
} 

