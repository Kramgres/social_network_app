import {INITIALIZED_SUCCESS} from './app.constants'

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false
}

const app = (state = initialState, {type}: any): InitialStateType => {
  switch (type) {
  case INITIALIZED_SUCCESS:
    return {...state, initialized: true}
  default:
    return state
  }
}

export default app
