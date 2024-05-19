import React from "react";
import Messages__left__card from "../Messages__left/Messages__left__card/Messages__left__card";
import points from "../../../../images/Vector.png";
import Add from '../../../../images/Add.png'
import "./Messages__right.scss";
import Send from '../../../../images/Send.png'

function Messages__right() {
  return (
    <div className="Messages__right__inner">
      <div className="Messages__right__inner__div">
        <Messages__left__card />
        <span className="Messages__right__inner__div__span">19.02.2023</span>
        <img
          className="Messages__right__inner__div__img"
          src={points}
          alt="Vector"
        />
      </div>
      <div className="Messages__right__inner__div1">
        <p className="Messages__right__inner__div1__p">Задавайте интресуюещейся вопроси!</p>
        <span className="Messages__right__inner__div1__span">2:20PM</span>
      </div>
      <div className="Messages__right__inner__div2">
        <p className="Messages__right__inner__div2__p">Задавайте интресуюещейся вопроси!</p>
        <span className="Messages__right__inner__div2__span">2:20PM</span>
      </div>
      <div className="Messages__right__inner__div3">
        <img className="Messages__right__inner__div3__img" src={Add} alt="Add" />
        <img className="Messages__right__inner__div3__images" src={Send} alt="Send" />
      </div>
    </div>
  );
}

export default Messages__right;
