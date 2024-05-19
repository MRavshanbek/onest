import React from 'react'
import './Messages.scss'
import Messages__left from './Messages__left/Messages__left'
import Messages__right from './Messages__right/Messages__right'

function Messages() {
  return (
    <>
    <div className='container Messages__inner'>
    <Messages__left/>
    <Messages__right/>
    </div>
    </>
  )
}

export default Messages