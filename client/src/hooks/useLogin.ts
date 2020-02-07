import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { loadLogin, failLogin, successLogin, logout } from '../store/login'
import { useCallback } from 'react'

export default function useLogin() {
  const { isLoading, isLogin, name } = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch()

  const onLoadLogin = useCallback(() => dispatch(loadLogin()), [dispatch])
  const onFailLogin = useCallback(() => dispatch(failLogin()), [dispatch])
  const onSuccessLogin = useCallback((name: String) => dispatch(successLogin(name)), [dispatch])
  const onLogout = useCallback(() => dispatch(logout()), [dispatch])

  return {
    isLoading,
    isLogin,
    name,
    onLoadLogin,
    onFailLogin,
    onSuccessLogin,
    onLogout,
  }
}
