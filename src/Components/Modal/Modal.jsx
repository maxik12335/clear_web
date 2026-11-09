import classes from './Modal.module.css'

const Modal = ({children, ...props}) => {
  return (
  <div className={classes.modal}  {...props}>
    <div className={classes.content} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
  )
}

export default Modal;