import React from 'react'
import AllMenu from './AllMenu/AllMenu'
import { Outlet } from 'react-router-dom'
import './AllAds.scss'
function AllAds() {
  return (
    <>
    <AllMenu/>
    {<Outlet />}
    </>
    
  )
}

export default AllAds