import {SET_USER_DATA} from "./authorization.constants";

const initialState = {
    login: 'aaa'
}

const auth = (state = initialState, {type, payload}) => {
    switch (type){
        case SET_USER_DATA:
            return {...state, ...payload}
        default:
            return state
    }
}

export default auth
