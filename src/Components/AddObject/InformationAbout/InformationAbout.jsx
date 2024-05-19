import React from 'react'
import './InformationAbout.scss'

function InformationAbout() {
  return (
    <div className='InformationAbout__inner' >
        <h2 className='InformationAbout__inner__title '>Вся информация об объекте</h2>
        <form className='InformationAbout__inner__form'>
            <div>
        <span className='InformationAbout__inner__span'>Площадь, м² *</span>
            <label className='InformationAbout__inner__form__label'>
            <input className='InformationAbout__inner__form__label__input' type="text"  placeholder='Жилая'/>
            <input className='InformationAbout__inner__form__label__input' type="text"  placeholder='Кухня'/>
            <input className='InformationAbout__inner__form__label__input' type="text"  placeholder='Общая'/>
            </label>
            <span className='InformationAbout__inner__form__g'>G</span>
            <div className='InformationAbout__inner__form__div'>
            <button className='InformationAbout__inner__form__div__btn'>Кирпич</button>
            <button className='InformationAbout__inner__form__div__btn'>Монолит</button>
            <button className='InformationAbout__inner__form__div__btn'>Панель</button>
            <button className='InformationAbout__inner__form__div__btn'>Блочный</button>
            </div>
            </div>
            <div>
            <div className='InformationAbout__inner__form__div2'>
              <label className='InformationAbout__inner__form__div2__label'>
                <span className='InformationAbout__inner__form__div2__label__span'>Количество комнат *</span>
                <input className='InformationAbout__inner__form__div2__label__input' type="text"placeholder='Общая' />
              </label>
              <label className='InformationAbout__inner__form__div2__label'>
                <span className='InformationAbout__inner__form__div2__label__span'>Этаж*</span>
                <input className='InformationAbout__inner__form__div2__label__input' type="text"placeholder='Общая' />
              </label>
              <label className='InformationAbout__inner__form__div2__label'>
                <span className='InformationAbout__inner__form__div2__label__span'>Этаж из*</span>
                <input className='InformationAbout__inner__form__div2__label__input' type="text"placeholder='Общая' />
              </label>
            </div>
            <div className='InformationAbout__inner__form__div3'>
              <span className="InformationAbout__inner__form__div3__span">Тип ремонта</span>
              <div className="InformationAbout__inner__form__div3__label">
                <button className='InformationAbout__inner__form__div3__label__btn'>Евро</button>
                <button className='InformationAbout__inner__form__div3__label__btn'>Классик</button>
                <button className='InformationAbout__inner__form__div3__label__btn'>Безремонт</button>
                <button className='InformationAbout__inner__form__div3__label__btn'>Авторский проект</button>
              </div>

            </div>
            </div>
        </form>


    </div>
  )
}

export default InformationAbout