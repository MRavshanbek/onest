import React from "react";
import "./Payments__right.scss";

function Payments__right() {
  return (
    <div className="Payments__right__inner">
      <div className="Payments__right__inner__balance">
        <div className="Payments__right__inner__balance__div">
          <div>
          <span className="Payments__right__inner__balance__div__span">Ваш баланс:</span>
          <h2 className="Payments__right__inner__balance__div__title">167 000.00 UZS</h2>
          </div>
          <div>
          <span className="Payments__right__inner__balance__div__span">Для пополнение:</span>
          <form action="balance" className="Payments__right__inner__balance__div__form">
          <label className="Payments__right__inner__balance__div__labbel">
            <input className="Payments__right__inner__balance__div__labbel__input" type="radio" name="пополнение" />
            <p className="Payments__right__inner__balance__div__labbel__p">100 000 uzs</p>
          </label>
          <label className="Payments__right__inner__balance__div__labbel">
            <input className="Payments__right__inner__balance__div__labbel__input" type="radio" name="пополнение" />
            <p className="Payments__right__inner__balance__div__labbel__p">200 000 uzs</p>
          </label>
          <label className="Payments__right__inner__balance__div__labbel">
            <input className="Payments__right__inner__balance__div__labbel__input" type="radio" name="пополнение"  />
            <p className="Payments__right__inner__balance__div__labbel__p">300 000 uzs</p>
          </label>
          </form>
          </div>
        </div>
        <button className="Payments__right__inner__balance__title">+   Пополнить баланс</button>
      </div>
      <table className="Payments__right__inner__table">
        <tr className="Payments__right__inner__table__row">
          <th className="Payments__right__inner__table__row__th">Data<select name="data" id="data"></select></th>
          <th className="Payments__right__inner__table__row__th">Номер операции</th>
          <th className="Payments__right__inner__table__row__th">Заголовок</th>
          <th className="Payments__right__inner__table__row__th">Сумма</th>
        </tr>
        <tr className="Payments__right__inner__table__column">
          <td className="Payments__right__inner__table__column__td">8 апр.2023 г.</td>
          <td className="Payments__right__inner__table__column__td">26598755</td>
          <td className="Payments__right__inner__table__column__td">VIP-объявление действует до 15.04.2023</td>
          <td className="Payments__right__inner__table__column__td">-16 000,00 UZS</td>
        </tr>
        <tr className="Payments__right__inner__table__column">
          <td className="Payments__right__inner__table__column__td">8 апр.2023 г.</td>
          <td className="Payments__right__inner__table__column__td">54889766</td>
          <td className="Payments__right__inner__table__column__td">Пополнение счета</td>
          <td className="Payments__right__inner__table__column__td">-17 000,00 UZS</td>
        </tr>
      </table>
    </div>
  );
}

export default Payments__right;
