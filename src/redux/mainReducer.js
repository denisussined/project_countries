import {CLEAR_COUNTRY, SET_COUNTRIES, SET_COUNTRY} from "./actions";

let initialState = {
    countries: [],

    country: {
        info: null,
        isLoaded: false
    },
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES: return {
            ...state,
            countries: action.countries
        }

        case SET_COUNTRY: return {
            ...state,
            country: {
                ...state.country,
                info: action.info,
                isLoaded: true
            }
        }

        case CLEAR_COUNTRY: return {
            ...state,
            country: {
                ...state.country,
                info: null,
                isLoaded: false
            }
        }

        default: return state
    }
}

export default mainReducer