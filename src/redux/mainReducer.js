import {CLEAR_COUNTRY, SET_COUNTRIES, SET_COUNTRY} from "./actions";

let initialState = {
    countries: {
        data: null,
        isLoaded: false
    },

    country: {
        data: null,
        isLoaded: false
    },
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES: return {
            ...state,
            countries: {
                ...state.countries,
                data: action.data,
                isLoaded: true
            }
        }

        case SET_COUNTRY: return {
            ...state,
            country: {
                ...state.country,
                data: action.data,
                isLoaded: true
            }
        }

        case CLEAR_COUNTRY: return {
            ...state,
            country: {
                ...state.country,
                data: null,
                isLoaded: false
            }
        }

        default: return state
    }
}

export default mainReducer