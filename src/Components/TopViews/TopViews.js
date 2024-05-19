import React from 'react'
import topImg from '../../images/topImg.png'
import Просмотры from '../Просмотры/Просмотры'

const info=[
    {
        id:"1",

        img: topImg,
        top: "топ",

        street:'г.Ташкент, М.Улугбеск...',

        square:"120 кв",

        cost: "$63.000"
    },
    {
        id:"2",

        img: topImg,
        top: "топ",

        street:'г.Ташкент, М.Улугбеск...',

        square:"120 кв",

        cost: "$63.000"
    },{
        id:"3",

        img: topImg,
        top: "топ",

        street:'г.Ташкент, М.Улугбеск...',

        square:"120 кв",

        cost: "$63.000"
    },{
        id:"4",

        img: topImg,
        top: "топ",

        street:'г.Ташкент, М.Улугбеск...',

        square:"120 кв",

        cost: "$63.000"
    },{
        id:"5",

        img: topImg,
        top: "топ",

        street:'г.Ташкент, М.Улугбеск...',

        square:"120 кв",

        cost: "$63.000"
    },{
        id:"6",

        img: topImg,
        top: "топ",

        street:'г.Ташкент, М.Улугбеск...',

        square:"120 кв",

        cost: "$63.000"
    },{
        id:"7",

        img: topImg,
        top: "топ",

        street:'г.Ташкент, М.Улугбеск...',

        square:"120 кв",

        cost: "$63.000"
    },{
        id:"8",

        img: topImg,
        top: "топ",

        street:'г.Ташкент, М.Улугбеск...',

        square:"120 кв",

        cost: "$63.000"
    }
]

function TopViews() {
  return (
    <>
        <Просмотры info={info} />
    </>
  )
}

export default TopViews