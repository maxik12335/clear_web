import classes from './Close.module.css'

const Close = ({...props}) => {
  return (
    <div className={classes.close} {...props}>
      <span ></span>
      <span ></span>
    </div>
  )
}

export default Close;