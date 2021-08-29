import { useContext } from "react"
import StateContext from "../context/StateContex"


const useStateContext = () => {
    const { state } = useContext(StateContext)
    return { state }
}

export default useStateContext