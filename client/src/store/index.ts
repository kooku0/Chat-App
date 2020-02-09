import { combineReducers } from 'redux'
import messages from './messages'
import socketIO from './SocketIO'
import login from './login'
import rooms from './rooms'

const rootReducer = combineReducers({
  messages,
  socketIO,
  login,
  rooms,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
