import React, {useState } from "react";
import "./ToEnter.scss";
import AccessIcon from "../../images/AccessIcon.png";
import Google from "../../images/Google.png";
import Googles from "../../images/Googles.png";
import Registration from '../Registration/Registration'
import { useEffect } from "react";

function ToEnter({ access, setAccess, setIsConfirmation}) {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [emailDirty,setEmailDirty] = useState(false)
  const [passwordDirty,setPasswordDirty] = useState(false)
  const [emailEror,setEmailEror] = useState('Емейл не может быть пустым')
  const [passwordEror,setPasswordEror] = useState('Пароль не может быть пустым')
  const [formValid, setFormValid] = useState(false)


  useEffect(()=>{
    if(emailEror || passwordEror){
      setFormValid(false)
    }
    else{
      setFormValid(true)
    }
  }, [emailEror, passwordEror])

  
  const [isRegistion, setIsRegistion] = useState(false)
  const handleisRegistion =()=>{
    setIsRegistion(!isRegistion);
    setIsConfirmation(false);
  }

  const blurHandle = (e)=>{
    switch(e.target.name){
      case 'email':
        setEmailDirty(true)
        break;
        case 'password':
          setPasswordDirty(true)
          break;
    }
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value)
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value))){
      setEmailEror('некорретный емейл')
    }
    else{
      setEmailEror(false)
    }
    
  }
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8){
      setPasswordEror('Парол должен быть длиннее 3 и меньше 8')
      if(!e.target.value){
      setPasswordEror('Пароль не может быть пустым')
      }
    }
    else{
      setPasswordEror(false)
    }
  }




  return (
    <div className="wrapper"
    onClick={()=>{
      setAccess(false)
      document.body.style.overflow="auto"
    }}
     style={{ display: access ? "block" : "none"}}>
      <div className="ToEnter__inner" onClick={(e)=>{
        e.stopPropagation()
      }}>
        <div className="ToEnter__inner__left">
          <h2 className="ToEnter__inner__left__h2">Приветствую</h2>
          <div className="ToEnter__inner__left__div">
            <img
              className="ToEnter__inner__left__img"
              src={AccessIcon}
              alt="Logo"
            />
            <div>
              <h2 className="ToEnter__inner__left__title">ONEST</h2>
              <p className="ToEnter__inner__left__p">Продажа недвижимости</p>
            </div>
          </div>
        </div>
        <div className="ToEnter__inner__right">
          <h2 className="ToEnter__inner__right__h2">Войти</h2>
          <form className="ToEnter__inner__right__form">

              {(emailDirty && emailEror) && <div style={{color: "red"}} >{emailEror}</div> }

            <label className="ToEnter__inner__right__form__label">
              Email или номер телефона
              <input
              onBlur={e => blurHandle(e)}
                className="ToEnter__inner__right__form__label__input"
                onChange={emailHandler}
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email или номер телефона"
                />
            </label>

                {(passwordDirty && passwordEror) && <div style={{color: "red"}} >{passwordEror}</div> }

            <label className="ToEnter__inner__right__form__label" htmlFor="">
              Пароль
              <input
              onBlur={e => blurHandle(e)}
                className="ToEnter__inner__right__form__label__input"
                onChange={passwordHandler}
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Пароль"
              />
            </label>
            <button className="ToEnter__inner__right__form__btn" type="submit"
            disabled={!formValid}
            >
              Войти
            </button>
          </form>
          <p className="ToEnter__inner__right__p"onClick={handleisRegistion} >
            Забыли пароль? |{" "}
            <span className="ToEnter__inner__right__p__span"  >
              {" "}
              Зарегистрироватся
            </span>
          </p>
          <div className="ToEnter__inner__right__div">
            <img
              className="ToEnter__inner__right__div__img"
              src={Google}
              alt="Google"
            />
            <img
              className="ToEnter__inner__right__div__img"
              src={Googles}
              alt="Google"
            />
          </div>
        </div>
      </div>
      <Registration isRegistion={isRegistion} setIsRegistion={setIsRegistion} setIsConfirmation={setIsConfirmation}/>
    </div>
  );
}

export default ToEnter;
