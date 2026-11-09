import classes from './Burger.module.css'

const Burger = ({...props}) => {
  return (
    <div className={classes.burger} {...props}>
      <span ></span>
      <span ></span>
      <span ></span>
    </div>
  )
}

export default Burger;