import React from 'react'
import './Publications.scss'

function Publications() {
  return (
    <div className='Publications__inner'>
        <form className='Publications__inner__form'>
            <label className='Publications__inner__form__label'>
                <input className='Publications__inner__form__label__input' type="checkbox" />
                <h2 className='Publications__inner__form__label__title'>Я прочитал и согласен с <span className='Publications__inner__form__label__title__span'>условиями использования и публикации!</span></h2>
            </label>
            <div className='Publications__inner__form__div'>
            <button className='Publications__inner__form__div__save'>Сохранить как черновик</button>
            <button className='Publications__inner__form__div__publish'> Опубликовать объявление</button>
            </div>
        </form>
    </div>
  )
}

export default Publications