import {combineReducers} from 'redux'
import GameReducer from './GameReducer'
export  const rootReducer = combineReducers({
    GameReducer:GameReducer
})