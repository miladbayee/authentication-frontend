import * as API from './api'

const logOutingUser = async () => {
    const response = await API.post('/logout')
    if (response.data.message === 'success') {
        return {
            isLogin: false,
            userInfo: {}
        }
    }
}

export default logOutingUser