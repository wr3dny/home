import { t } from "i18next"
import { PATHS } from "../../consts/paths"
import styles from './Navbar.module.css'
import classNames from 'classnames'
import { Button } from "../Button/Button"



export const Navbar = () => {
    const availablePaths = PATHS.filter(path => path.available)

    return (
        <nav>
          {availablePaths.map((link) => (
                <Button 
                  label={t(link.key)} 
                  typeOf="Navbar"
                  color="orange"
                  onClick={() => window.location.href = link.path} 
                />
          ))}

      </nav>
    )
}  

