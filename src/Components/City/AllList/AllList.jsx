import React from 'react'
import './AllList.scss'
import { Link } from 'react-router-dom'

function AllList({Apartment, isApartment}) {
  return (
        <div >
          <ul className='AllList__list' style={{display: isApartment ? "none" : "flex" }}>
            <Link to='/allAds/adsCenter/section' className='AllList__list__item'>Все</Link>
            <li className='AllList__list__item' onClick={Apartment}>Квартира</li>
            <li className='AllList__list__item'>Частный дом</li>
            <li className='AllList__list__item'>Коммерческая</li>
            <li className='AllList__list__item'>Земельные участки</li>
        </ul>
        </div>
  )
}

export default AllList