import React from "react";
import { Link } from "react-router-dom";
import "./AllMenu.scss";
import img from "../../../images/Axmad.png";

function AllMenu() {
  return (
    <div className="AllMenu__out">
      <div className="AllMenu__inner container">
        <div className="AllMenu__inner__div">
          <img className="AllMenu__inner__div__img" src={img} alt="Axmed" />
          <div className="AllMenu__inner__div__out">
          <h2 className="AllMenu__inner__div__title">Ahmad G’aniyev</h2>
          <p className="AllMenu__inner__div__p">Баланс: 120 000 uzs</p>
          </div>
        </div>
        <ul className="AllMenu__inner__list">
          <li >
            <Link className="AllMenu__inner__list__item" to='/allAds/adsCenter/section'>
            <svg
              width={16}
              height={17}
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66602 13.5C2.66602 13.058 2.84161 12.634 3.15417 12.3215C3.46673 12.0089 3.89065 11.8333 4.33268 11.8333H13.3327"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.33268 1.83331H13.3327V15.1666H4.33268C3.89065 15.1666 3.46673 14.9911 3.15417 14.6785C2.84161 14.3659 2.66602 13.942 2.66602 13.5V3.49998C2.66602 3.05795 2.84161 2.63403 3.15417 2.32147C3.46673 2.00891 3.89065 1.83331 4.33268 1.83331V1.83331Z"
                stroke="Black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Объявления
            </Link>
          </li>
          <li >
            <Link className="AllMenu__inner__list__item" to='/allAds/adsCenter/reviewsData'>
            <svg
              width={14}
              height={13}
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0009 6.88133L7.00085 11.8333L2.00085 6.88133C1.67106 6.56041 1.41128 6.17467 1.23788 5.74842C1.06449 5.32217 0.981226 4.86463 0.993343 4.40462C1.00546 3.94461 1.11269 3.49209 1.30829 3.07555C1.50389 2.65902 1.78361 2.2875 2.12984 1.98438C2.47608 1.68127 2.88132 1.45312 3.32006 1.31432C3.7588 1.17551 4.22152 1.12905 4.6791 1.17786C5.13667 1.22668 5.57918 1.3697 5.97877 1.59793C6.37835 1.82617 6.72635 2.13466 7.00085 2.504C7.27654 2.13734 7.62494 1.83154 8.02425 1.60573C8.42356 1.37992 8.86518 1.23896 9.32147 1.19168C9.77776 1.14439 10.2389 1.19179 10.676 1.33092C11.1132 1.47005 11.5169 1.69791 11.8619 2.00024C12.2069 2.30256 12.4858 2.67285 12.6811 3.08792C12.8765 3.503 12.984 3.95392 12.9971 4.41247C13.0101 4.87102 12.9284 5.32732 12.7569 5.75283C12.5855 6.17833 12.3281 6.56388 12.0009 6.88533"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Отзывы
            </Link>
          </li>
          <li className="AllMenu__inner__list__item">
            <svg
              width={14}
              height={13}
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0009 6.88133L7.00085 11.8333L2.00085 6.88133C1.67106 6.56041 1.41128 6.17467 1.23788 5.74842C1.06449 5.32217 0.981226 4.86463 0.993343 4.40462C1.00546 3.94461 1.11269 3.49209 1.30829 3.07555C1.50389 2.65902 1.78361 2.2875 2.12984 1.98438C2.47608 1.68127 2.88132 1.45312 3.32006 1.31432C3.7588 1.17551 4.22152 1.12905 4.6791 1.17786C5.13667 1.22668 5.57918 1.3697 5.97877 1.59793C6.37835 1.82617 6.72635 2.13466 7.00085 2.504C7.27654 2.13734 7.62494 1.83154 8.02425 1.60573C8.42356 1.37992 8.86518 1.23896 9.32147 1.19168C9.77776 1.14439 10.2389 1.19179 10.676 1.33092C11.1132 1.47005 11.5169 1.69791 11.8619 2.00024C12.2069 2.30256 12.4858 2.67285 12.6811 3.08792C12.8765 3.503 12.984 3.95392 12.9971 4.41247C13.0101 4.87102 12.9284 5.32732 12.7569 5.75283C12.5855 6.17833 12.3281 6.56388 12.0009 6.88533"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Сообщения
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AllMenu;
