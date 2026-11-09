import { NavLink } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Close from '../UI/Close/Close'
import { NAV_LINKS } from '../../data/links'
import classes from './MobileMenu.module.css'
import { useState } from 'react'
import Burger from '../UI/Burger/Burger'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>

      <div className={classes.burgerBox}>
        <p className="text-base">clear web</p>
        <Burger onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && 
        <Modal onClick={() => setIsOpen(null)}>
          <div className={classes.mobyleMenu}>
            <div className={classes.header}>
              <p className="h3">clear web</p>
              <Close onClick={() => setIsOpen(null)} />
            </div>

            <nav className={classes.menu}>
              {NAV_LINKS.map(link => (
                <NavLink key={link.to} className={`${classes.link} text-base`} to={link.to} onClick={() => setIsOpen(null)}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className={classes.footer}>
              <a className="text-sm hover" href="" target="_blank">max</a>
              <a className="text-sm hover" href="https://vk.ru/maximkuznetsov2015" target="_blank">vk</a>
            </div>
          </div>
        </Modal>
      }

    </div>
  )
}

export default MobileMenu
