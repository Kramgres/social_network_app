import {agent} from '../../agent/agent'

export const security = {
  getCaptcha: async () => {
    const res = await agent.get('/security/get-captcha-url')
    return res.data
  }
}

