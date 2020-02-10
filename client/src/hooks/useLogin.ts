import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { loadLogin, failLogin, logout, successLogin } from '../store/login'
import { RoomsState } from 'src/store/rooms'
import { setRooms } from '../store/rooms'

export default function useLogin() {
  const socket = useSelector((state: RootState) => state.socketIO.socket)
  const dispatch = useDispatch()
  const onLogin = (name: string) => {
    dispatch(loadLogin())
    socket?.emit('login', name, (rooms: RoomsState) => {
      dispatch(successLogin(name, socket.id))
      dispatch(setRooms(rooms))
    })
    socket?.on('error', function(e: ErrorEvent) {
      if (e.error() != 'websocket: close sent') {
        console.log('An unexpected error occured: ', e.error())
        dispatch(failLogin())
      }
    })
  }
  function onLogout() {
    dispatch(logout())
  }
  return {
    onLogin,
    onLogout,
  }
}
