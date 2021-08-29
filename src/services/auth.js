import * as API from './api'

export const checkUserLogin = async () => {
    const response = await API.get('/user')
    if (response.data.message === 'unauthenticated') {
        return {
            data: {},
            isLogin: false
        }
    }

    return {
        data: response.data,
        isLogin: true
    }
}