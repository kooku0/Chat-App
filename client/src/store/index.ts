import { combineReducers } from 'redux'
import login from './login'
import room from './room'

const rootReducer = combineReducers({
  login,
  room,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
