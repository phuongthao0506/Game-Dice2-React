import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { playAgain } from '../redux/Action/action'

export default function Wallet() {

  let{totalPoint} = useSelector( state => state.GameReducer)
let dispatch = useDispatch()
  return (
    <div>
       <div className="text-center mt-2">
                <span style={{fontSize:'30px',borderRadius:'5%'}} className="p-1 text-white  h1">Điểm thưởng: <span className="text-danger h2">{totalPoint.toLocaleString()}</span></span>

            </div>

            <div className="text-center mt-2">
                <button  style={{fontSize:'15px',borderRadius:'5%',border:'none'}} className="p-2 text-white btn btn-success" onClick ={()=>{
                  dispatch( playAgain())
             }}> Chơi lại </button>

            </div>
    </div>
  )
}
