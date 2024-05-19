import React from 'react'
import './ChangePassword.scss'
import { Outlet } from 'react-router-dom'
function ChangePassword() {
  return (
    <div className='ChangePassword__inner'>
        <h2 className='ChangePassword__inner__title'>Сменить пароль</h2>
        <p className='ChangePassword__inner__p'>Ваш профиль не считается надежным, потому что вы не заполнили его полностью!</p>
        <form className='ChangePassword__inner__form'>
            <div className='ChangePassword__inner__form__div'>
            <label className='ChangePassword__inner__form__div__label'>
            <span className='ChangePassword__inner__form__div__label__span'>Пароль</span>
                <input className='ChangePassword__inner__form__div__label__input' type="text" placeholder='Пароль' />
            </label>
            <label className='ChangePassword__inner__form__div__label'>
            <span className='ChangePassword__inner__form__div__label__span'>Повторите пароль</span>
                <input className='ChangePassword__inner__form__div__label__input' type="text" placeholder='Повторите пароль'/>
            </label>
            </div>
            <button className='ChangePassword__inner__form__button'>Сохранить</button>
        </form>
        <Outlet/>
    </div>
  )
}

export default ChangePassword