import classes from './TopMain.module.css'

const TopMain = () => {
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <div className={classes.text}>
            <h1 className='h1'>Делаю сайты чище</h1>
            <p className='text-base'>
              беру сайт, урезаю лишнее, оставляю только суть
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopMain;