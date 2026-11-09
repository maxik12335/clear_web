// import { useEffect, useState } from "react";
import classes from "./Navbar.module.css"
import Close from '../UI/Close/Close'
import Burger from '../UI/Burger/Burger'
import { useState } from "react";
import { NavLink } from "react-router-dom";


// const Navbar = ({navColor, textColor}) => {
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
   <div className={`${classes.navbar} line-dark ${isOpen ? classes.isOpen : ''}`}>

      <div className="container-navbar">

        {/* ======= меню desctop ======= */}
        <div className={classes.desctopMenu}>
          <p className="text-base">clear web</p>

          <div className={classes.menu}>
            <NavLink className="text-base hover"  to="/">главная</NavLink>
            <NavLink className="text-base hover"  to="/creation">творчество</NavLink>
          </div>
        </div>

        {/* ======= burger ======= */}
        <div className={classes.burgerBox}>
          <p className="text-base">clear web</p>
          <Burger onClick={() => setIsOpen(true)} />
        </div>

        {/* ======= меню mobyle ======= */}
        <div className={`${classes.mobyleMenu} ${isOpen ? classes.isOpen : ''}`}>
          <div className={classes.top}>
            <p className="h3">clear web</p>

            <Close onClick={() => setIsOpen(false)} />
          </div>

          <div className={classes.menu}>
            <NavLink
              className={`${classes.link} text-base`}
              to="/"
              onClick={() => setIsOpen(false)}>главная</NavLink>
            <NavLink
              className={`${classes.link} text-base`}              
              to="/creation"
              onClick={() => setIsOpen(false)}>творчество</NavLink>
          </div>

          <div className={classes.media}>
            <a className="text-sm hover" href="" target="_blank">max</a>
            <a className="text-sm hover" href="https://vk.ru/maximkuznetsov2015" target="_blank">vk</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;