const LOAD_LOGIN = 'login/LOAD_LOGIN' as const
const FAIL_LOGIN = 'login/FAIL_LOGIN' as const
const SUCCESS_LOGIN = 'login/SUCCESS_LOGIN' as const
const LOGOUT = 'login/LOGOUT' as const

export const loadLogin = () => ({ type: LOAD_LOGIN })
export const failLogin = () => ({ type: FAIL_LOGIN })
export const successLogin = (name: String) => ({ type: SUCCESS_LOGIN, payload: name })
export const logout = () => ({ type: LOGOUT })

type LoginAction =
  | ReturnType<typeof loadLogin>
  | ReturnType<typeof failLogin>
  | ReturnType<typeof successLogin>
  | ReturnType<typeof logout>

type LoginState = {
  isLoading: Boolean
  isLogin: Boolean
  name: String
}

const initialState: LoginState = {
  isLoading: false,
  isLogin: false,
  name: '',
}

function login(state: LoginState = initialState, action: LoginAction) {
  switch (action.type) {
    case LOAD_LOGIN:
      return { isLoading: true, isLogin: false, name: '' }
    case FAIL_LOGIN:
      return initialState
    case SUCCESS_LOGIN:
      console.log('login', action.payload)
      return { isLoading: false, isLogin: true, name: action.payload }
    case LOGOUT:
      return { isLogin: false }
    default:
      return state
  }
}

export default login
