import {Field, Formik } from "formik";
import {NextPage} from "next";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/authorization/authorization.actions";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

const Index: NextPage = () => {
    const dispatch = useDispatch()
    const captchaUrl = useSelector(state => state.auth.captchaUrl)

    return (
        <BaseLayout>
            <Formik onSubmit={values => dispatch(login(values))} initialValues={{login: '', password: '', rememberMe: false, captcha: ''}}>
                {(form) => (
                    <form onSubmit={form.handleSubmit}>
                        <div>
                            <input  name="login" type="text" placeholder="Login" value={form.values.login} onChange={form.handleChange}/>
                        </div>
                        <div>
                            <input  name="password" type="password" placeholder="Password" value={form.values.password} onChange={form.handleChange}/>
                        </div>
                        <div>
                            <input name="rememberMe" type="checkbox" checked={form.values.rememberMe} onChange={form.handleChange}/> remember me
                        </div>
                        {captchaUrl &&
                        <div>
                            <div><img src={captchaUrl} alt="Captcha"/></div>
                            <input  name="captcha"
                                    type="text"
                                    placeholder="Captcha"
                                    value={form.values.captcha}
                                    onChange={form.handleChange}/>
                        </div>}
                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                )}
            </Formik>
        </BaseLayout>
    );
}

export default Index;
