import {combineReducers} from "redux";
import auth from "./authorization.reducer";

const rootReducer = combineReducers({
    auth
})

export default rootReducer
