import React, { Fragment } from 'react'


export default function ItemDice(props) {
  let { ItemDice } = props

  return (
    <Fragment>
    <div className="scene">
      <div className="cube">
        <img className="ml-3 cube__face front" style={{ width: 50 }} src={ItemDice.img} alt="" />
        <img className="ml-3 cube__face back" style={{ width: 50 }} src="./img/bau.png" alt="" />
        <img className="ml-3 cube__face left" style={{ width: 50 }} src="./img/ga.png" alt="" />
        <img className="ml-3 cube__face right" style={{ width: 50 }} src="./img/ca.png" alt="" />
        <img className="ml-3 cube__face top" style={{ width: 50 }} src="./img/tom.png" alt="" />
        <img className="ml-3 cube__face bottom " style={{ width: 50 }} src="./img/nai.png" alt="" />
     
      </div>
    </div>
    </Fragment>
  )
}
