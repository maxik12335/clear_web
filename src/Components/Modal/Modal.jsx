import { useEffect } from 'react'
import classes from './Modal.module.css'

const Modal = ({children, ...props}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
  <div className={classes.modal}  {...props} onClick={(e) => e.stopPropagation()}>
    {children}
  </div>
  )
}

export default Modal;