import {agent} from "../../agent/agent";

export const authorization = {
     getCurrentUser: async () => {
        const res = await agent.get(`auth/me`)
        return res.data
    },
    login: async (data: any) => {
        console.log({email: data.login, password: data.password, captcha: data.captcha})
        const res = await agent.post('auth/login', {email: data.login, password: data.password, captcha: data.captcha})
        return res.data
    },
    logout: async () => {
        const res = await agent.delete('auth/login')
        return res.data
    }
}


