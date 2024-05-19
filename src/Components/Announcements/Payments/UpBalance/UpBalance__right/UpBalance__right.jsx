import React from "react";
import "./UpBalance__right.scss";
import Payme from '../../../../../images/Payme.png'
import UzumBank from '../../../../../images/UzumBank.png'
import Click from '../../../../../images/Click.png'

function UpBalance__right() {
  return (
    <>
      <div className="UpBalance__right__inner">
        <div className="UpBalance__right__inner__balance">
          <div className="UpBalance__right__inner__balance__div">
            <div>
              <span className="UpBalance__right__inner__balance__div__span">
                Ваш баланс:
              </span>
              <h2 className="UpBalance__right__inner__balance__div__title">
                167 000.00 UZS
              </h2>
            </div>
            <div>
              <span className="UpBalance__right__inner__balance__div__span">
                Для пополнение:
              </span>
              <form
                action="balance"
                className="UpBalance__right__inner__balance__div__form"
              >
                <label className="UpBalance__right__inner__balance__div__labbel">
                  <input
                    className="UpBalance__right__inner__balance__div__labbel__input"
                    type="radio"
                    name="пополнение"
                  />
                  <p className="UpBalance__right__inner__balance__div__labbel__p">
                    100 000 uzs
                  </p>
                </label>
                <label className="UpBalance__right__inner__balance__div__labbel">
                  <input
                    className="UpBalance__right__inner__balance__div__labbel__input"
                    type="radio"
                    name="пополнение"
                  />
                  <p className="UpBalance__right__inner__balance__div__labbel__p">
                    200 000 uzs
                  </p>
                </label>
                <label className="UpBalance__right__inner__balance__div__labbel">
                  <input
                    className="UpBalance__right__inner__balance__div__labbel__input"
                    type="radio"
                    name="пополнение"
                  />
                  <p className="UpBalance__right__inner__balance__div__labbel__p">
                    300 000 uzs
                  </p>
                </label>
              </form>
            </div>
          </div>
          <button className="UpBalance__right__inner__balance__title">
            + Пополнить баланс
          </button>
        </div>
        <div className="UpBalance__right__inner__out">
        <div className="UpBalance__right__inner__out__way">
          <h2 className="UpBalance__right__inner__out__way__title">Способ оплаты</h2>
          <form className="UpBalance__right__inner__out__way__form">
            <div className="UpBalance__right__inner__out__way__form__div">
              <label className="UpBalance__right__inner__out__way__form__div__label">
                <span>Name on card</span>
                <input
                  className="UpBalance__right__inner__out__way__form__div__label__input"
                  type="text"
                  name=""
                  id=""
                  placeholder="Olivia Rhye"
                />
              </label>
              <label className="UpBalance__right__inner__out__way__form__div__label__card">
                <span>Expiry</span>
                <input
                  className="UpBalance__right__inner__out__way__form__div__label__input"
                  type="text"
                  name=""
                  id=""
                  placeholder="06 / 2024"
                />
              </label>
            </div>
            <div className="UpBalance__right__inner__out__way__form__div">
              <label className="UpBalance__right__inner__out__way__form__div__label">
                <span>Card number</span>
                <svg
                  className="UpBalance__right__inner__out__way__form__div__label__svg"
                  width={23}
                  height={14}
                  viewBox="0 0 23 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.179 11.8294C9.99493 12.8275 8.45902 13.43 6.78069 13.43C3.03582 13.43 0 10.4303 0 6.72997C0 3.02966 3.03582 0.0299683 6.78069 0.0299683C8.45902 0.0299683 9.99493 0.632466 11.179 1.63051C12.363 0.632466 13.8989 0.0299683 15.5773 0.0299683C19.3221 0.0299683 22.358 3.02966 22.358 6.72997C22.358 10.4303 19.3221 13.43 15.5773 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8294Z"
                    fill="#ED0006"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.1797 11.8294C12.6376 10.6005 13.5621 8.77192 13.5621 6.72997C13.5621 4.68801 12.6376 2.85941 11.1797 1.63051C12.3637 0.632465 13.8996 0.0299683 15.578 0.0299683C19.3228 0.0299683 22.3587 3.02966 22.3587 6.72997C22.3587 10.4303 19.3228 13.43 15.578 13.43C13.8996 13.43 12.3637 12.8275 11.1797 11.8294Z"
                    fill="#F9A000"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.1793 11.8294C12.6372 10.6005 13.5616 8.77193 13.5616 6.72999C13.5616 4.68805 12.6372 2.85946 11.1793 1.63055C9.72133 2.85946 8.79688 4.68805 8.79688 6.72999C8.79688 8.77193 9.72133 10.6005 11.1793 11.8294Z"
                    fill="#FF5E00"
                  />
                </svg>
                <input
                  className="UpBalance__right__inner__out__way__form__div__label__input"
                  type="text"
                  name=""
                  id=""
                  placeholder="1234 1234 1234 1234"
                />
              </label>
              <label className="UpBalance__right__inner__out__way__form__div__label__card">
                <span>CVV</span>
                <input
                  className="UpBalance__right__inner__out__way__form__div__label__input"
                  type="password"
                  name="CVV"
                  id="CVV"
                  placeholder="***"
                />
              </label>
            </div>
          </form>
        </div>
          <div className="UpBalance__right__inner__systems">
            <h2 className="UpBalance__right__inner__systems__title">А так же через платёжные системы</h2>
            <p className="UpBalance__right__inner__systems__p">А так же через платёжные системы</p>
            <div className="UpBalance__right__inner__systems__div">
            <img src={Payme} alt="" />
            <img src={UzumBank} alt="" />
            <img src={Click} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpBalance__right;
