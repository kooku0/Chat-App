import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { loadLogin, failLogin, logout } from '../store/login'
import { RoomsState } from 'src/store/rooms'
import { setRooms } from '../store/rooms'
// import { useCallback } from 'react'

export default function useLogin() {
  // const { name } = useSelector((state: RootState) => state.login)
  const socket = useSelector((state: RootState) => state.socketIO.socket)
  const dispatch = useDispatch()
  const onLogin = (name: string) => {
    console.log(name)
    dispatch(loadLogin())
    socket?.emit('login', name, (rooms: RoomsState) => {
      console.log(rooms)
      dispatch(setRooms(rooms))
    })
    socket?.on('error', function(e: any) {
      if (e.error() != 'websocket: close sent') {
        console.log('An unexpected error occured: ', e.error())
        dispatch(failLogin())
      }
    })
  }
  function onLogout() {
    dispatch(logout())
  }
  // const onLoadLogin = useCallback(() => dispatch(loadLogin()), [dispatch])
  //const onFailLogin = useCallback(() => dispatch(failLogin()), [dispatch])
  //const onSuccessLogin = useCallback((name: string) => dispatch(successLogin(name)), [dispatch])
  // const onLogout = useCallback(() => dispatch(logout()), [dispatch])

  return {
    onLogin,
    onLogout,
  }
}
