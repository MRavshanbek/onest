import React from "react";
import "./Reviews.scss";
import Payne from "../../../images/Payne.png";
import Star from "../../../images/star.png";

function Reviews({data} ) {
  
  return (
    <div style={{display:'flex' , flexWrap:'wrap' , gap:'30px'}}>
      {data?.map((e) => (
        <div className="Reviews__inner">
          <div className="Reviews__inner__out">
            <img className="Reviews__inner__img" src={Payne} alt="Payne" />
            <div>
              <h2 className="Reviews__inner__title">
                {e?.name}
              </h2>
              <span className="Reviews__inner__span">@Sam.Payne90</span>
              <div className="Reviews__inner__div">
                <img className="Reviews__inner__div__img" src={Star} alt="" />
                <img className="Reviews__inner__div__img" src={Star} alt="" />
                <img className="Reviews__inner__div__img" src={Star} alt="" />
                <img className="Reviews__inner__div__img" src={Star} alt="" />
                <img className="Reviews__inner__div__img" src={Star} alt="" />
              </div>
            </div>
          </div>
          <div className="Reviews__inner__div2">
            <p className="Reviews__inner__div2__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel
            </p>
            <div className="Reviews__inner__div2__out">
              <span className="Reviews__inner__div2__out__span">Show more</span>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5893 13.0892C10.2638 13.4147 9.73618 13.4147 9.41074 13.0892L5.24408 8.92257C4.91864 8.59713 4.91864 8.06949 5.24408 7.74406C5.56951 7.41862 6.09715 7.41862 6.42259 7.74406L10 11.3215L13.5774 7.74406C13.9028 7.41862 14.4305 7.41862 14.7559 7.74406C15.0814 8.06949 15.0814 8.59713 14.7559 8.92257L10.5893 13.0892Z"
                  fill="#191D23"
                />
              </svg>
            </div>
          </div>
          <span className="Reviews__inner__span2">23 Nov 2023</span>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
