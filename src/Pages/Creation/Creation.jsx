import { useState } from 'react';
import classes from './Creation.module.css'
import Modal from '../../Components/Modal/Modal';
import Close from '../../Components/UI/Close/Close';


// sofa
import sofa_1 from '../../assets/creations/sofa/screen_1.png'
import sofa_2 from '../../assets/creations/sofa/screen_2.png'
import sofa_3 from '../../assets/creations/sofa/screen_3.png'

// manikur
import manikur_before_1 from '../../assets/creations/manikur/before/screen_1.png'
import manikur_before_2 from '../../assets/creations/manikur/before/screen_2.png'
import manikur_before_3 from '../../assets/creations/manikur/before/screen_3.png'

import manikur_after_1 from '../../assets/creations/manikur/after/screen_1.png'
import manikur_after_2 from '../../assets/creations/manikur/after/screen_2.png'
import manikur_after_3 from '../../assets/creations/manikur/after/screen_3.png'

const Creation = () => {
  const [isOpen, setIsOpen] = useState(null);

  const creations = [
  {
    title: 'sofa',
    href: 'https://maxik12335.github.io/sofa/',
    type: 'scratch',
    screens: [sofa_1, sofa_2, sofa_3],
  },
  {
    title: 'manikur',
    href: 'https://maxik12335.github.io/manikur/',
    type: 'redesign',
    before: {
      href: 'https://dikidi.net/1772470?p=0.pi',   
      screens: [manikur_before_1, manikur_before_2, manikur_before_3],   // для редизайна сайта
    },
    after: [manikur_after_1, manikur_after_2, manikur_after_3],
  },
]

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
              <Close onClick={() => setIsOpen(false)} />
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
                <div className={classes.screensList}>
                  
                  <div className={classes.screensItem}> 
                    <p className="text-base">до</p>
                    <div className={classes.screens}>
                      {isOpen.before.screens.map((src, i) => (
                        <img key={i} src={src} alt={`Старый сайт, экран ${i + 1}`} className={classes.img} />
                      ))}
                    </div>
                  </div>

                  <div className={classes.screensItem}>
                    <p className="text-base">после</p>
                    <div className={classes.screensType}>
                      {isOpen.after.map((src, i) => (
                        <img key={i} src={src} alt={`${isOpen.title}, экран ${i + 1}`} className={classes.img} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Modal>
        )}

    </div>
  )
}

export default Creation;