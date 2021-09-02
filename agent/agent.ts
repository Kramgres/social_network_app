import axios from "axios";

export const agent = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "557a6032-de76-4337-91d9-fa17e45e618d"
    }
})

agent.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status || 0

        if (status === 401) {
            /*removeToken();*/
        }

        return Promise.reject(error)
    }
);
