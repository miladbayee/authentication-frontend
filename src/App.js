
import { useCallback,useEffect, useState } from "react";

import { checkUserLoginAction } from "./context/userAction";
import useDispatchContext from "./hooks/useDispatchContext";
import Layout from "./layout/Layout";
import { checkUserLogin } from "./services/auth";

const App = () => {
    const [loadig, setLoading] = useState(true)
    const { dispatch } = useDispatchContext()

    const checkedUserLogin = useCallback(() => {
        checkUserLogin().then(res => dispatch(checkUserLoginAction(res)))
    }, [dispatch])

    useEffect(() => {
        if (loadig) {
            checkedUserLogin()
        }

        return () => {
            setLoading(false)
        }

    }, [checkedUserLogin, loadig, setLoading])

    return (
        <Layout />
    )
}

export default App

