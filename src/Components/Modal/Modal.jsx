import { useEffect } from 'react'
import classes from './Modal.module.css'
import { createPortal } from 'react-dom'

const Modal = ({children, ...props}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return createPortal(
    <div className={classes.modal} {...props} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>,
    document.body
  )
}

export default Modal;