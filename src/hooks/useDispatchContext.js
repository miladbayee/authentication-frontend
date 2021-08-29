import { useContext } from "react"
import DispatchContext from "../context/DispatchContex"


const useDispatchContext = () => {
    const { dispatch } = useContext(DispatchContext)
    return { dispatch }
}

export default useDispatchContext