import { createContext } from "react"

const StateContext = createContext()

const stateReducer = (state, action) => {
    return state
}

export { StateContext, stateReducer }