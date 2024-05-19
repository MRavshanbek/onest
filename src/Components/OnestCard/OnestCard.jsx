import React, { useState, useRef } from "react";
import "./OnestCard.scss";
import onestImg from "../../images/onestImg.png";
import icon from "../../images/Icon.png";
import Woman from "../../images/Woman.png";

function OnestCard() {
  const [isLeft, setIsLeft] = useState(false)
  const leftRef=useRef();
  const OnestCardRef=useRef();

  const handleLeft =()=>{
    if(!isLeft){
      setIsLeft(true)
      leftRef.current.style.transition="all 3s"
      OnestCardRef.current.style.transform= "-50%"
      OnestCardRef.current.style.left= "50%"


    }
    else{
      setIsLeft(false)
      leftRef.current.style.transition="all 3s";
      OnestCardRef.current.style.transform= "125%"  
    }

  }
  return (
    <div className="OnestCard__inner" style={{width: isLeft ? "605px" : "170px"}} ref={OnestCardRef}>
      <div className="OnestCard__inner__left" ref={leftRef}>
        <img
          className="OnestCard__inner__left__img"
          src={onestImg}
          alt="Logo"
        />
        <h2 className="OnestCard__inner__left__h2">ONEST</h2>
        <img
          className="OnestCard__inner__left__images"
          onClick={handleLeft}
          src={icon}
          alt="icon"
        />
      </div>
      <div className="OnestCard__inner__medium" >
        <h2 className="OnestCard__inner__medium__h2">
          <svg
            width={12}
            height={10}
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3334 1H6.66675M11.3334 5H5.33341M11.3334 9H6.66675M3.33341 2.33333L0.666748 5L3.33341 7.66667"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Назад
        </h2>
        <img
          className="OnestCard__inner__medium__img"
          src={Woman}
          alt="Woman"
        />
        <div>
          <p className="OnestCard__inner__medium__p">Alla Pugachova</p>
          <span className="OnestCard__inner__medium__span">Автор</span>
        </div>
      </div>
      <div className="OnestCard__inner__right">
        <h2 className="OnestCard__inner__right__h2">Показать телефон</h2>
      </div>
    </div>
  );
}

export default OnestCard;
