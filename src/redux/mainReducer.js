import {CLEAR_COUNTRY, SET_COUNTRIES, SET_COUNTRY, SET_PREVIOUS_PAGE} from "./actions";

let initialState = {
    countries: {
        data: null,
        isLoaded: false,
        itemsPerPage: 32,
        previousPage: null,
        previousOffset: null
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

        case SET_PREVIOUS_PAGE: return {
            ...state,
            countries: {
                ...state.countries,
                previousPage: action.pageNumber,
                previousOffset: action.offset,
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