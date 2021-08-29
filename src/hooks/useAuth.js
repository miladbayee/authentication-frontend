import { useEffect, useState } from "react";
import useStateContext from "./useStateContext";

const useAuth = () => {
    const [isUserLogin, setIsUserLogin] = useState(false);
    const { state } = useStateContext();

    useEffect(() => {
        setIsUserLogin(state.user.isLogin);
    }, [state]);

    return [isUserLogin, setIsUserLogin]
}

export default useAuth