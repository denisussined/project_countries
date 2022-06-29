import {CLEAR_COUNTRY, SET_COUNTRIES, SET_COUNTRY} from "./actions";

let initialState = {
    countries: [],
    country: [],
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES: return {
            ...state,
            countries: action.countries
        }

        case SET_COUNTRY: return {
            ...state,
            country: action.country
        }

        case CLEAR_COUNTRY: return {
            ...state,
            country: []
        }
    }
}

export default mainReducer