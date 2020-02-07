import * as actions from './actions'

export type LoginAction =
  | ReturnType<typeof actions.loadLogin>
  | ReturnType<typeof actions.failLogin>
  | ReturnType<typeof actions.successLogin>
  | ReturnType<typeof actions.logout>

export type LoginState = {
  isLoading: Boolean
  isLogin: Boolean
  name: String
}