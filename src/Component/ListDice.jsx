import React from 'react'
import { useSelector } from 'react-redux'
import Dice from './Dice'
export default function ListDice() {
    let {listDice} = useSelector( state=> state.GameReducer)
    let renderDice = listDice.map((item,index)=>(
        <div className="col-4" key={index}>
        <Dice item ={item}/>
    </div>
    ))
  return (
    <div className="row mt-5">
          {renderDice}
        </div>
  )
}
