import React from "react";
import "./Размещение.scss";
import uy from "../../../images/uy.png";
import { useNavigate } from "react-router-dom";
import HoverUy from "../../../images/Hover.jfif";
import { useEffect,useRef} from "react";
import { useLocation } from "react-router-dom";

function Размещение({ data }) {

  const router=useLocation();
  const s=useRef();
  useEffect((e)=>{
    if(router.pathname === '/'){

    }
  })

  const navigate = useNavigate();
  return (
    <div className="home" style={{display: 'flex', flexWrap:'wrap', maxHeight: '700px', overflowY: 'auto',marginBottom:'100px'}} ref={s} >
      {data.map((e) => (
        <section
          className="Размещение"
          onClick={() => navigate(`/Second/${e?.id}`)}
        >
          <div className="Размещение__inner">
            <span className="Размещение__inner__komfort">Комфорт</span>
            <img
              className="Размещение__inner__img"
              src={HoverUy}
              alt="дома"
              onMouseOver={(evt) => {
                evt.target.src = uy;
              }}
              onMouseOut={(evt) => {
                evt.target.src = HoverUy;
              }}
              id={e.id}
            />
            <h1 className="Размещение__inner__h1">
              Пересечении ул.Тимур Малика и Дурмон йули.
            </h1>
            <div className="Размещение__inner__card">
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1956 7.73685L12.8347 10.8947H12.1956V12.7895H17.9475V10.8947H16.6693L12.8347 0.157898L9.0001 7.10527L5.16552 0.157898L1.33093 10.8947H0.0527344V12.7895H5.80461V10.8947H5.16552L5.80461 7.73685L9.0001 12.7895L12.1956 7.73685Z"
                  fill="#F87171"
                />
              </svg>
              <p className="Размещение__inner__card__p">2-Bekat</p>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="3" height="3" rx="1.5" fill="#6A6A6A" />
              </svg>
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.19229 2.79071C5.95382 2.79071 6.57686 2.1628 6.57686 1.39535C6.57686 0.627908 5.95382 0 5.19229 0C4.43076 0 3.80768 0.627908 3.80768 1.39535C3.80768 2.1628 4.43076 2.79071 5.19229 2.79071ZM2.63076 5.1628L0.858462 14.1698C0.768459 14.5954 1.10076 15 1.53692 15H1.5923C1.91769 15 2.1946 14.7768 2.27076 14.4558L3.3923 9.41863L4.84614 10.8139V14.3024C4.84614 14.686 5.15768 15 5.53844 15C5.91921 15 6.23075 14.686 6.23075 14.3024V10.3675C6.23075 9.98374 6.07843 9.62092 5.80152 9.35583L4.77691 8.37211L5.19229 6.27908C5.93305 7.14421 7.00616 7.76513 8.21077 7.96049C8.62615 8.02328 9 7.68839 9 7.26281C9 6.92094 8.75077 6.6349 8.41151 6.57909C7.35924 6.40467 6.48693 5.77676 6.02305 4.9535L5.33075 3.83722C4.94306 3.21628 4.16767 2.96512 3.49614 3.25117L0.844609 4.38141C0.332307 4.60466 0 5.10699 0 5.67211V7.3256C0 7.70932 0.311537 8.02328 0.692308 8.02328C1.07307 8.02328 1.38461 7.70932 1.38461 7.3256V5.65118L2.63076 5.1628Z"
                  fill="#121212"
                />
              </svg>
              <p className="Размещение__inner__card__p">28 min</p>
            </div>
            <span className="Размещение__inner__span">$63.000</span>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Размещение;
