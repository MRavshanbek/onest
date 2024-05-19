import React from 'react'
import ListCard from '../Announcements/ListCard/ListCard'
import MenuLeft from './MenuLeft/MenuLeft'
function Announcements() {
  return (
    <>
        <div className='Announcements__inner__out container' >
        <MenuLeft/>
        <div>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        </div>
        </div>
    </>
  )
}

export default Announcements