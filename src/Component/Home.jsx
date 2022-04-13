import React from 'react'
import './BaiTapGameBauCua.css'
import Wallet from './Wallet'
import ListDice from './ListDice'
import TableDice from './TableDice'
export default function Home() {
  return (
    <div id="BaiTapGameBauCua" className="p-2">
         <h1 className="text-center display-4  " style={{color:'#58FA58',marginTop:0}}>GAME BẦU CUA  </h1>
        <Wallet/>
        <div className="row">
            <div className="col-7">
                <ListDice/>
            </div>
            <div className="col-5 container">
                    <TableDice/>
            </div>
        </div>

    </div>
  )
}
