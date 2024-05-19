import React from 'react'
import './Picture.scss'

function Picture() {
  return (
    <div className='Picture__inner'>
        <h2 className='Picture__inner__title'>Фото</h2>
        <p className='Picture__inner__p'>Первое фото будет на обложке объявления. Перетащите, чтобы изменить порядок.</p>
        <div className='Picture__inner__div'></div>
        <form className='Picture__inner__form'>
        <label className='Picture__inner__form__label'>
            <div className='Picture__inner__form__label__div'><span className='Picture__inner__form2__label__div__span'>Добавить фото</span></div>
            <input className='Picture__inner__form__label__input' type="file" />
        </label>
        <div className='Picture__inner__form__label__div'></div>
            <div className='Picture__inner__form__label__div'></div>
            <div className='Picture__inner__form__label__div'></div>
            <div className='Picture__inner__form__label__div'></div>
            <div className='Picture__inner__form__label__div'></div>
            <div className='Picture__inner__form__label__div'></div>
            <div className='Picture__inner__form__label__div'></div>
            <div className='Picture__inner__form__label__div'></div>
            <div className='Picture__inner__form__label__div'></div>
        </form>
    </div>
  )
}

export default Picture