import { createContext } from "react"

const StateContext = createContext()

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'setPortfolios':
            return {
                ...state,
                portfolios: action.data
            }
        // case 'setUser':
        //     return {
        //         user: action.data
        //     }
        // case 'setError':
        //     return {
        //         error: action.data
        //     }
        default:
            return state
    }
            
}

export { StateContext, stateReducer }