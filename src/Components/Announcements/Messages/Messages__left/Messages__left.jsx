import React from "react";
import "./Messages__left.scss";
import Messages__left__card from "./Messages__left__card/Messages__left__card";

function Messages__left() {
  return (
    <>
      <div className="Messages__left__inner">
        <Messages__left__card />
        <Messages__left__card />
        <Messages__left__card />
        <Messages__left__card />
        <button className="Messages__left__inner__btn">
          <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.667 11.8333L14.0003 8.5L10.667 5.16667"
              stroke="black"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 8.5H6"
              stroke="black"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 14.5H3.33333C2.97971 14.5 2.64057 14.3595 2.39052 14.1095C2.14048 13.8594 2 13.5203 2 13.1667V3.83333C2 3.47971 2.14048 3.14057 2.39052 2.89052C2.64057 2.64048 2.97971 2.5 3.33333 2.5H6"
              stroke="black"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="Messages__left__inner__btn__span">
            Выйти из профиля
          </span>
        </button>
      </div>
    </>
  );
}

export default Messages__left;
