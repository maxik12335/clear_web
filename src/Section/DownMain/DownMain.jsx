import classes from './DownMain.module.css'

import img_1 from '../../assets/people/1.jpg'
import img_2 from '../../assets/people/2.jpg'

const DownMain = () => {
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <ul className={classes.list}>
            <li className={classes.item}>
              <img className={classes.img} src={img_1} alt="Микеланджело Буонарроти" />
              <div className={classes.text}>
                <p className='text-base bold'>
                  Микеланджело Буонарроти
                </p>
                <p className='text-sm'>
                  «Я беру глыбу мрамора и отсекаю от неё всё лишнее»
                </p>
              </div>
            </li>

            <li className={classes.item}>
              <img className={classes.img} src={img_2} alt="Антуана де Сент-Экзюпери" />
              <div className={classes.text}>
                <p className='text-base bold'>
                  Антуана де Сент-Экзюпери
                </p>
                <p className='text-sm'>
                  «Совершенство достигается не тогда, когда нечего добавить, а когда нечего убрать»
                </p>
              </div>
            </li>
          </ul>

          <div className={`${classes.quote} text-sm`}>
            <p>
              не «добавь во мне ещё одно качество», а «убери всё, что мной не является»
            </p>
            <p>
              то, что останется после осечения, и есть подлинное «я»
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DownMain;