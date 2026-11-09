import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className="section" id="contacts"> 
      <div className={`${classes.container} container-navbar`}>
        
        <div className={`${classes.content} content`}>
          <ul className={classes.list}>
            <li className={classes.item}>
              <a className="text-sm hover" href="" target="_blank">max</a>
            </li>
            <li className={classes.item}>
              <a className="text-sm hover" href="https://vk.ru/maximkuznetsov2015" target="_blank">vk</a>
            </li>
          </ul>
          <p className='text-base'>clear web</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer;