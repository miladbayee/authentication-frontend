import * as API from './api'

const userLogin = async (email, password) => {
    const response = await API.post('/login', {
        email,
        password,
    })
    return response
}

export default userLogin