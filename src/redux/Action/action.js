
import { ADD_DICE, PLAY_GAME, PLAY_AGAIN } from '../Type/type.js'
export const addDice = (dice, flag) => ({
    type: ADD_DICE,
    dice, flag
})
export const playGame = () => ({
    type: PLAY_GAME,

})
export const playAgain = () => ({ type: PLAY_AGAIN }

)