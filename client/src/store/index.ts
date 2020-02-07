import { combineReducers } from 'redux'
import login from './login'
import rooms from './rooms'

const rootReducer = combineReducers({
  login,
  rooms,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
