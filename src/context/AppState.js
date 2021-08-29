import { useReducer } from "react"
import DispatchContext from "./DispatchContex"
import StateContext from "./StateContex"
import initialState from './initialState'
import reducer from './userReducer'

const AppState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <DispatchContext.Provider value={{ dispatch }}>
            <StateContext.Provider value={{ state }}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export default AppState
