import React from "react";
import './Faq.scss'
import User1 from '../../images/user1.png'
import User2 from '../../images/user2.png'
import User3 from '../../images/user3.png'

import { useState } from "react";

function Faq() {
  const [information,setInformation]=useState(false);
  const [information1,setInformation1]=useState(false);
  const [information2,setInformation2]=useState(false);
  const [information3,setInformation3]=useState(false);
  const [information4,setInformation4]=useState(false);
  const [information5,setInformation5]=useState(false);
  const [information6,setInformation6]=useState(false);

  const handleInformation =()=>{
    setInformation(!information)
    setInformation1(false)
    setInformation2(false)
    setInformation3(false)
    setInformation4(false)

  }
  const handleInformation1 =()=>{
    setInformation1(!information1)
    setInformation(false)
    setInformation2(false)
    setInformation3(false)
    setInformation4(false)
    setInformation5(false)
  }
  const handleInformation2 =()=>{
    setInformation2(!information2)
    setInformation3(false)
    setInformation4(false)
    setInformation5(false)
    setInformation1(false)
    setInformation(false)
  }
  const handleInformation3 =()=>{
    setInformation3(!information3)
    setInformation(false)
    setInformation1(false)
    setInformation2(false)
    setInformation4(false)
    setInformation5(false)

  }
  const handleInformation4 =()=>{
    setInformation4(!information4)
    setInformation(false)
    setInformation1(false)
    setInformation2(false)
    setInformation3(false)
    setInformation5(false)

  }
  const handleInformation5 =()=>{
    setInformation5(!information5)
    setInformation(false)
    setInformation1(false)
    setInformation2(false)
    setInformation3(false)
    setInformation4(false)
  }
  return (
    <div className="Faq">
      <div className="container">
        <div className="Faq__inner">
          <h2 className="Faq__inner__title">Часто задаваемые вопросы</h2>
          <p className="Faq__inner__p">
            Все, что вам нужно знать о продукте и выставлении счетов.
          </p>
          <ul className="Faq__inner__list">
            <li className="Faq__inner__list__item">
              <div className="Faq__inner__list__item__div">
              Все, что вам нужно знать о продукте и выставлении счетов.
              <div className="Faq__inner__list__item__div__sircle" onClick={(e)=>{ handleInformation()}}defaultValue={true}>
              <div className="Faq__inner__list__item__div__sircle__columns"></div>
              <div className="Faq__inner__list__item__div__sircle__rows" style={{display:information? "none":"block"}}></div>
              </div>
              </div>
              <ul className="Faq__inner__list__item__lists" style={{display:information? "block":"none"}}>
                <li className="Faq__inner__list__item__lists__items">
                  Да, вы можете попробовать нас бесплатно в течение 30 дней.
                  Если вы хотите, мы предоставим вам бесплатный
                  персонализированный 30-минутный вводный звонок, чтобы помочь
                  вам начать работу как можно скорее.
                </li>
              </ul>
            </li>

            <li className="Faq__inner__list__item">
              <div className="Faq__inner__list__item__div">
              Могу ли я изменить свой план позже?
              <div className="Faq__inner__list__item__div__sircle" onClick={(e)=>{ handleInformation1()}}>
              <div className="Faq__inner__list__item__div__sircle__columns"></div>
              <div className="Faq__inner__list__item__div__sircle__rows"style={{display:information1? "none":"block"}} ></div>
              </div>
              </div>
              <ul className="Faq__inner__list__item__lists" style={{display:information1? "block":"none"}}>
                <li className="Faq__inner__list__item__lists__items">
                  Да, вы можете попробовать нас бесплатно в течение 30 дней.
                  Если вы хотите, мы предоставим вам бесплатный
                  персонализированный 30-минутный вводный звонок, чтобы помочь
                  вам начать работу как можно скорее.
                </li>
              </ul>
            </li>
            <li className="Faq__inner__list__item">
              <div className="Faq__inner__list__item__div">
              Каковы ваши правила отмены?
              <div className="Faq__inner__list__item__div__sircle" onClick={(e)=>{ handleInformation2()}}>
              <div className="Faq__inner__list__item__div__sircle__columns"></div>
              <div className="Faq__inner__list__item__div__sircle__rows"style={{display:information2? "none":"block"}} ></div>
              </div>
              </div>
              <ul className="Faq__inner__list__item__lists" style={{display:information2? "block":"none"}}>
                <li className="Faq__inner__list__item__lists__items">
                  Да, вы можете попробовать нас бесплатно в течение 30 дней.
                  Если вы хотите, мы предоставим вам бесплатный
                  персонализированный 30-минутный вводный звонок, чтобы помочь
                  вам начать работу как можно скорее.
                </li>
              </ul>
            </li>
            <li className="Faq__inner__list__item">
              <div className="Faq__inner__list__item__div">
              Можно ли добавить в счет-фактуру другую информацию?
              <div className="Faq__inner__list__item__div__sircle" onClick={(e)=>{ handleInformation3()}}>
              <div className="Faq__inner__list__item__div__sircle__columns"></div>
              <div className="Faq__inner__list__item__div__sircle__rows"style={{display:information3? "none":"block"}} ></div>
              </div>
              </div>
              <ul className="Faq__inner__list__item__lists" style={{display:information3? "block":"none"}}>
                <li className="Faq__inner__list__item__lists__items">
                  Да, вы можете попробовать нас бесплатно в течение 30 дней.
                  Если вы хотите, мы предоставим вам бесплатный
                  персонализированный 30-минутный вводный звонок, чтобы помочь
                  вам начать работу как можно скорее.
                </li>
              </ul>
            </li>
            <li className="Faq__inner__list__item">
              <div className="Faq__inner__list__item__div">
              Как отменить подписку?
              <div className="Faq__inner__list__item__div__sircle" onClick={(e)=>{ handleInformation4()}}>
              <div className="Faq__inner__list__item__div__sircle__columns"></div>
              <div className="Faq__inner__list__item__div__sircle__rows"style={{display:information4? "none":"block"}} ></div>
              </div>
              </div>
              <ul className="Faq__inner__list__item__lists" style={{display:information4? "block":"none"}}>
                <li className="Faq__inner__list__item__lists__items">
                  Да, вы можете попробовать нас бесплатно в течение 30 дней.
                  Если вы хотите, мы предоставим вам бесплатный
                  персонализированный 30-минутный вводный звонок, чтобы помочь
                  вам начать работу как можно скорее.
                </li>
              </ul>
            </li>
            <li className="Faq__inner__list__item">
              <div className="Faq__inner__list__item__div">
              У меня не проходит оплата подписки. Что делать?
              <div className="Faq__inner__list__item__div__sircle" onClick={(e)=>{ handleInformation5()}}>
              <div className="Faq__inner__list__item__div__sircle__columns"></div>
              <div className="Faq__inner__list__item__div__sircle__rows"style={{display:information5? "none":"block"}} ></div>
              </div>
              </div>
              <ul className="Faq__inner__list__item__lists" style={{display:information5? "block":"none"}} >
                <li className="Faq__inner__list__item__lists__items">
                  Да, вы можете попробовать нас бесплатно в течение 30 дней.
                  Если вы хотите, мы предоставим вам бесплатный
                  персонализированный 30-минутный вводный звонок, чтобы помочь
                  вам начать работу как можно скорее.
                </li>
              </ul>
            </li>
          </ul>
          <div className="Faq__inner__users">
          <img className="Faq__inner__users__img" src={User1} alt="User" />
          <img className="Faq__inner__users__img1" src={User2} alt="User" />
          <img className="Faq__inner__users__img2" src={User3} alt="User" />
          </div>
          <h3 className="Faq__inner__h3">Остались вопросы? Сейчас ответим</h3>
          <p className="Faq__inner__paragraph">Не можете найти ответ, который вы ищете? Пожалуйста, пообщайтесь с нашей дружной командой.</p>
          <button className="Faq__inner__btn">Связаться</button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
