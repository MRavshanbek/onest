import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../Announcements/Menu/Menu'

export default function Example() {
  return (
    <div>
      <Menu/>
        {<Outlet />}
    </div>
  )
}
