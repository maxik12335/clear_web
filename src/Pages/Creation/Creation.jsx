import { useEffect, useState } from 'react';
import classes from './Creation.module.css'
import Modal from '../../Components/Modal/Modal';
import Close from '../../Components/UI/Close/Close';
import { creations } from '../../data/creation'

const Creation = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div>
      {/* заголовок */}
      <div className='section line-dark'>
        <div className="container">

          <div className="content">
            <h2 className={`${classes.h2} h2 line-dark`}>Творчество</h2>
          </div>

        </div>
      </div>

      {/* список */}
      <div className='section line-dark'>
        <div className="container">

          <div className="content">
            <ul className={classes.list}>
              {creations.map((creation, index) => (
                <li className={`${classes.item} hover`} key={creation.title} onClick={() => setIsOpen(creation)}>
                  <p className='h3 bold'>{creation.title}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* modal */}
        {isOpen && (
          <Modal onClick={() => setIsOpen(null)}>

            <div className={classes.top}>
              <div>
                <p className="h3 bold">{isOpen.title}</p>
                <a className="text-sm hover" href={isOpen.href} target="_blank">посмотреть сайт</a>
              </div>
              <Close onClick={() => setIsOpen(null)} />
            </div>

            <div className={classes.content}>
              {isOpen.type === 'scratch' && (
                <div className={classes.screensType}>
                  {isOpen.screens.map((src, i) => (
                    <img key={i} src={src} alt={`${isOpen.title}, экран ${i + 1}`} className={classes.img} />
                  ))}
                </div>
              )}

              {isOpen.type === 'redesign' && (
                <ul className={classes.screensList}>
                  
                  <li className={classes.screensItem}> 
                    <p className="text-base">до</p>
                    <div className={classes.screens}>
                      {isOpen.before.screens.map((src, i) => (
                        <img key={i} src={src} alt={`Старый сайт, экран ${i + 1}`} className={classes.img} />
                      ))}
                    </div>
                  </li>

                  <li className={classes.screensItem}>
                    <p className="text-base">после</p>
                    <div className={classes.screensType}>
                      {isOpen.after.map((src, i) => (
                        <img key={i} src={src} alt={`${isOpen.title}, экран ${i + 1}`} className={classes.img} />
                      ))}
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </Modal>
        )}

    </div>
  )
}

export default Creation;