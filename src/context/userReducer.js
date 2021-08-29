const appReducer = (state, action) => {
    switch (action.type) {
        case 'user/userLogin':
            return {
                ...state,
                user: {
                    isLogin: action.payload.isLogin,
                    userInfo: action.payload.userInfo
                }
            }
        case 'user/checkUserLogin':
            return {
                ...state,
                user: {
                    isLogin: action.payload.isLogin,
                    userInfo: action.payload.data
                }
            }
        case 'user/logOutingUser':
            return {
                ...state,
                user: {
                    isLogin: action.payload.isLogin,
                    userInfo: action.payload.data
                }
            }

        default:
            return state;
    }
}

export default appReducer