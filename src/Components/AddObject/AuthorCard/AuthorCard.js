import React from 'react'
import './AuthorCard.scss'
import Axmad from '../../../images/Axmad.png'

function AuthorCard() {
  return (
    <div className='AuthorCard__inner'>
      <div className='AuthorCard__inner__card'>
      <img className='AuthorCard__inner__img' src={Axmad} alt='Axmad'/>
      <div className='AuthorCard__inner__card__out'>
      <h2 className='AuthorCard__inner__card__out__title'>Ahmad G’aniyev</h2>
      <span className='AuthorCard__inner__card__out__span'>Был в сети: 15:32</span>
      <h3 className='AuthorCard__inner__card__out__h3'>Все обекты автора</h3>
      </div>
      </div>
      <span className='AuthorCard__inner__span'></span>
      <p className='AuthorCard__inner__p'>If you do what you've always done, you'll get what you've always gotten.</p>
      <span className='AuthorCard__inner__span2'></span>
      <button className='AuthorCard__inner__btn'>
      Все апартаменты автора
      <svg
          width={11}
          height={10}
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.833252 0.833328L4.99992 5L0.833252 9.16666M5.83325 0.833328L9.99992 5L5.83325 9.16666"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default AuthorCard