import {applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import {isServer} from "../constants/Server.constants";

const initialState = {}
const middleware = [thunk]

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const getCompositor = () => {
    if(isServer) {
        return compose
    }
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(rootReducer, initialState, getCompositor()(applyMiddleware(...middleware)))

export default store
