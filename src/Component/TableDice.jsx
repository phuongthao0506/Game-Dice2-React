import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playGame } from '../redux/Action/action'
import ItemDice from './ItemDice'

export default function TableDice() {
  let{arrItemDice} = useSelector(state => state.GameReducer)
  let dispatch = useDispatch()
  return (

   <div className="bg-white mt-5 ml-5 container" style={{ width: 400, height: 400, borderRadius: 150 }}>
      <div className="row ">
        <div className="col-12 text-center" style={{ margin: '1% 30%'  }}>
         <ItemDice ItemDice={arrItemDice[0]} />
        </div>  
        <div className="col-6  mt-1 px-5">
        <ItemDice ItemDice={arrItemDice[1]}/>
        </div>
        <div className="col-6 mt-1 px-5">
        <ItemDice ItemDice={arrItemDice[2]}/>
        </div>
        <div className="col-12 text-center" >
         <button className="btn btn-danger m-5" onClick ={()=>{dispatch(playGame())}}>Play</button>
        </div>
      </div>
    </div>

  )
}
