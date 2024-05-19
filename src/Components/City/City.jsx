import React from "react";
import "./City.scss";
import logo from "../../images/onestImg.png";
import Icon from "../../images/Icon.png";
import AllList from "./AllList/AllList";
import CityList from "./CityList/CityList";
import { useState } from "react";

function City({ handleCity, priceVisible,
  handleRoom, handleSize, handleRepair,
  handleMaterial,isCityActive,isCityActive1,
  isCityActive2,isCityActive3,
  isCityActive4,isCityActive5, isburgerMenu,setIsburgerMenu,
  setIsVisible,setIsPrice,setIsRepair,setIsRoom,setIsSize,setIsMaterial,
  setIsCityActive,setIsCityActive1,setIsCityActive2,setIsCityActive3,setIsCityActive4,setIsCityActive5

}) {

    const [isApartment, setIsApartment] = useState(false);

    const Apartment =()=>{
      setIsApartment(!isApartment)
      setIsVisible(false)
      setIsPrice(false)
      setIsRepair(false)
      setIsRoom(false)
      setIsSize(false)
      setIsMaterial(false)
      setIsCityActive(false)
      setIsCityActive1(false)
      setIsCityActive2(false)
      setIsCityActive3(false)
      setIsCityActive4(false)
      setIsCityActive5(false)

    }
    const handleBurgerMenu=()=>{
      if(!isburgerMenu){
        setIsburgerMenu(true);
      }
      else{
        setIsburgerMenu(false);
      }
    }
  return (
    <>
      <div className="City__inner">
        <div className="City__inner__one">
          <img className="City__inner__one__img" src={logo} alt="logo" />
          <h2 className="City__inner__one__h2">ONEST</h2>
          <img className="City__inner__one__images" src={Icon} alt="Icon" onClick={handleBurgerMenu} />
        </div>
        <CityList isCityActive={isCityActive} isCityActive1={isCityActive1} isCityActive2={isCityActive2} isCityActive3={isCityActive3} isCityActive4={isCityActive4}isCityActive5={isCityActive5} handleCity={handleCity} priceVisible={priceVisible} handleRoom={handleRoom} handleSize={handleSize} handleRepair={handleRepair} handleMaterial={handleMaterial} isApartment={isApartment} Apartment={Apartment}
        />
        <AllList Apartment={Apartment} isApartment={isApartment} />
      </div>
    </>
  );
}

export default City;
