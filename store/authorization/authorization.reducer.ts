import {SET_CAPTCHA, SET_USER_DATA} from './authorization.constants'

export type UserType = {
    id: number | null,
    login: string | null,
    email: string | null
}

export type InitialStateType = {
    isAuthorized: boolean,
    user: UserType,
    captchaUrl: string | null
}

const initialState: InitialStateType = {
  isAuthorized: false,
  user: {
    id: null,
    login: null,
    email: null
  },
  captchaUrl: null
}

const auth = (state = initialState, {type, payload}: any): InitialStateType => {
  switch (type){
  case SET_USER_DATA:
    return {...state, ...payload}
  case SET_CAPTCHA:
    return {...state, ...payload}
  default:
    return state
  }
}

export default auth
