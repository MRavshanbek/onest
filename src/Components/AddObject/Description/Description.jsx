import React from 'react'
import './Description.scss'

function Description() {
  return (
    <div className='Description__inner'>
        <h2 className='Description__inner__title'>Краткое описание </h2>
        <textarea className='Description__inner__text' name="" id="" cols="30" rows="10" placeholder='Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание' ></textarea>
    </div>
  )
}

export default Description