const LOGIN = 'login/LOGIN' as const
const LOGOUT = 'login/LOGOUT' as const

export const signin = () => ({ type: LOGIN })
export const logout = () => ({ type: LOGOUT })

type LoginAction = ReturnType<typeof signin> | ReturnType<typeof logout>

type LoginState = {
  isLogin: Boolean
  name: String
}

const initialState: LoginState = {
  isLogin: false,
  name: '',
}

function login(state: LoginState = initialState, action: LoginAction) {
  switch (action.type) {
    case LOGIN:
      return { isLogin: true }
    case LOGOUT:
      return { isLogin: false }
    default:
      return state
  }
}

export default login
