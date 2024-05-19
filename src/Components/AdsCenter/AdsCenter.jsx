import React from 'react'
import AllMenuLeft from '../AllAds/AllMenuLeft/AllMenuLeft'
import { Outlet } from 'react-router-dom'

function AdsCenter() {
  return (
    <div className='adsCenter__inner container'>
      <AllMenuLeft/>
      <div style={{paddingTop:'40px', paddingLeft:'40px' }}>
        {<Outlet />}
      </div>
    </div>
  )
}

export default AdsCenter