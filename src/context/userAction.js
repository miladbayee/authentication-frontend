export const userLoginAction = (payload) => {
    return {
        type: 'user/userLogin',
        payload
    }
}

export const checkUserLoginAction = (payload) => {
    return {
        type: 'user/checkUserLogin',
        payload
    }
}

export const logOutingUserAction = (payload) => {
    return {
        type: 'user/logOutingUser',
        payload
    }
}
