import { combineReducers } from 'redux'
import login from './login'
import rooms from './rooms'
import messages from './messages'

const rootReducer = combineReducers({
  login,
  rooms,
  messages,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
