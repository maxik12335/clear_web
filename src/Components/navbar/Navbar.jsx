import classes from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { NAV_LINKS } from "../../data/links";


const Navbar = () => {
  
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <p className="text-base">clear web</p>

          <div className={classes.menu}>
            {NAV_LINKS.map(link => (
              <NavLink key={link.to} className="text-base hover" to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <MobileMenu />

      </div>
    </div>
  )
}

export default Navbar;