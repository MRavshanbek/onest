import React from 'react'
import './AddObject.scss'
import Location from './Locations/Location'
import Picture from './Picture/Picture'
import Description from './Description/Description'
import InformationAbout from './InformationAbout/InformationAbout'
import Nearby from './Nearby/Nearby'
import Publications from './Publications/Publications'
import AuthorCard from './AuthorCard/AuthorCard'

function AddObject() {
  return (
    <div className='addObject' >
        <div className='container'>
            <div className='addObject__inner'>
            <h2 className='addObject__inner__title'>Добавить новое объявление</h2>
            <div className='addObject__inner__div'>
            <Location />
            <AuthorCard/>
            </div>
            <Picture/>
            <Description/>
            <InformationAbout/>
            <Nearby/>
            <Publications/>
            </div>
        </div>
    </div>
  )
}

export default AddObject