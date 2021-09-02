import { INITIALIZED_SUCCESS } from './app.constants'
import {getAuthUserData} from '../authorization/authorization.actions'

export const initializeApp = () => (dispatch: any) => {
  Promise.all([
    dispatch(getAuthUserData())
  ]).then(
    dispatch({type: INITIALIZED_SUCCESS})
  )
}
