import { ADD_DICE, PLAY_GAME, PLAY_AGAIN } from "./Type/type"

const initState = {
    listDice: [
        { id: 'ga', img: './img/ga.png', point: 0 },
        { id: 'bau', img: './img/bau.png', point: 0 },
        { id: 'ca', img: './img/ca.png', point: 0 },
        { id: 'nai', img: './img/nai.png', point: 0 },
        { id: 'cua', img: './img/cua.png', point: 0 },
        { id: 'tom', img: './img/tom.png', point: 0 },
    ],
    totalPoint: 1000,
    arrItemDice: [
        { id: 'ga', img: './img/ga.png' },
        { id: 'bau', img: './img/bau.png' },
        { id: 'ca', img: './img/ca.png' },
    ]
}


const GameReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_DICE:
            let item = state.listDice.find(d => d.id == action.dice.id);
            if (item) {
                if (action.flag == true && state.totalPoint > 0) {
                    item.point += 100
                    state.totalPoint -= 100
                } else if (action.flag == false && state.totalPoint < 1000) {
                    item.point -= 100
                    state.totalPoint += 100
                }
                else {
                    alert('Không đủ điểm cược ')
                }
            }
            return { ...state }
        case PLAY_GAME:

            let arrItemDiceUpdate = []
            for (let index = 0; index < 3; index++) {
                let i = Math.floor(Math.random() * 6)
                const itemDice = state.listDice[i]
                arrItemDiceUpdate.push(itemDice)

            }
            state.arrItemDice = arrItemDiceUpdate
            arrItemDiceUpdate.forEach((dice, index) => {
                let item = state.listDice.find(i => i.id == dice.id)
                if (item) {
                    state.totalPoint += item.point
                }
            })
            state.listDice.forEach((dice, index) => {
                let item = arrItemDiceUpdate.find(i => i.id == dice.id)
                if (item) {
                    state.totalPoint += item.point
                }
            })
            state.listDice = state.listDice.map((dice, index) => ({
                ...dice, point: 0
            }))
            return { ...state }
        case PLAY_AGAIN:
            console.log(111);
            window.location.reload();
            return  state 
        default: return { ...state }
    }

}
export default GameReducer