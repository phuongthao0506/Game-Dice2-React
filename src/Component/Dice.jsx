import React from 'react'
import { useDispatch } from 'react-redux'
import { addDice } from '../redux/Action/action'
import { useSpring, animated } from 'react-spring'

export default function Dice(props) {
    let { item } = props
    let dispatch = useDispatch()
    const [propsUseSpringInCrease, set] = useSpring(() => ({
        scale: 1.25,
        from: { scale: 1 },
        reset: true

    }))

    const [propsUseSpringDeCrease, setDeCrease] = useSpring(() => ({
        scale: 1.25,
        from: { scale: 1 },
        reset: true

    }))


    return (
        <div className="mt-3  ">
            <img src={item.img} style={{ width: 200 }} alt="" />
            <div className="bg-success mt-2 p-2 text-center container" style={{ borderRadius: '10px', width: 200 }}>
                <animated.button style={{ transform: propsUseSpringInCrease.scale.to(scale => `scale(${scale})`) }} className="btn btn-danger mr-3 h1" onClick={() => {

                    set({ scale: 1 })
                    set({ scale: 1.25 })
                    dispatch(addDice(item, true))
                }}>+<i className="fa fa-plus"></i></animated.button>
                <span className="mt-2" style={{ color: 'yellow', fontSize: 20 }}>{item.point}</span>
                <animated.button style={{ transform: propsUseSpringDeCrease.scale.to(scale => `scale(${scale})`) }} className="btn h1 btn-danger ml-3" onClick={() => {
                    setDeCrease({ scale: 1 })
                    setDeCrease({ scale: 1.25 })
                    dispatch(addDice(item, false))
                }}>-</animated.button>
            </div>
        </div>
    )
}
