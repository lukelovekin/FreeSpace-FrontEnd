import { createContext } from "react"

const UserContext = createContext(false)
const ErrorContext = createContext(false)
const StateContext = createContext()

// Reducer function
const stateReducer = (state, action) => {
    switch (action.type) {
        case 'setPortfolios':
            return {
                ...state,
                portfolios: action.data
            }
        default:
            return state
    }
            
}

export { StateContext, ErrorContext, UserContext, stateReducer }