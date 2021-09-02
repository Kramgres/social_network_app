import {SET_CAPTCHA, SET_USER_DATA} from "./authorization.constants";
import {authorization} from "../../services/authorization/authorization";
import {security} from "../../services/security/security";

export const getAuthUserData = () => async (dispatch: any) => {
    const res = await authorization.getCurrentUser()
    if (res.resultCode === 0) {
        dispatch({
            type: SET_USER_DATA,
            payload: {
                user: {...res.data},
                isAuthorized: true,
                captchaUrl: null
            }
        });
    }
}

export const getCaptcha = () => async (dispatch: any) => {
    const res = await security.getCaptcha()
    dispatch({
        type: SET_CAPTCHA,
        payload: {
            captchaUrl: res.url
        }
    })
}

export const login = (data: any) => async (dispatch: any) => {
    console.log('login')
    console.log(data)
    const res = await authorization.login(data)
    console.log(res)
    if (res.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if (res.resultCode === 10) {
        dispatch(getCaptcha());
    } /*else {
        dispatch(stopSubmit("login", {_error: "Email or password is wrong"}))
    }*/
}

export const logout = () => async (dispatch: any) => {
    const res = await authorization.logout()
    if (res.resultCode === 0) {
        dispatch({
            type: SET_USER_DATA,
            payload: {
                isAuthorized: false,
                user: {
                    id: null,
                    login: null,
                    email: null
                }
            }
        });
    }
}
