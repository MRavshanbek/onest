import React from 'react'
import Payments__left from './Payments__left/Payments__left'
import Payments__right from './Payments__right/Payments__right'
import './Payments.scss'
import { Outlet } from 'react-router-dom'
function Payments() {
  return (
    <>
      <div className='container payments__inner'>
      <Payments__left/>
      {<Outlet />}
      </div>
    </>
  )
}

export default Payments