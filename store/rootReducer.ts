import {combineReducers} from "redux";
import app from "./app/app.reducer";
import auth from "./authorization/authorization.reducer";

const rootReducer = combineReducers({
    app,
    auth
})

export default rootReducer
