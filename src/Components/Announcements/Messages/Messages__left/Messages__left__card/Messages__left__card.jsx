import React from 'react'
import './Messages__left__card.scss'
import Messages__img from '../../../../../images/Messages__left__img.png'

function Messages__left__card() {
  return (
    <div className="Messages__left__card__inner">
      <img
        className="Messages__left__card__inner__img"
        src={Messages__img}
        alt="Messages"
      />
      <div className="Messages__left__card__inner__div">
        <h2 className="Messages__left__card__inner__div__title">Дмитрий Лебедев</h2>
        <p className="Messages__left__card__inner__div__p">id:28397429</p>
      </div>
    </div>
  )
}

export default Messages__left__card