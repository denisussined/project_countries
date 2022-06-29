import {CLEAR_COUNTRY, SET_COUNTRIES, SET_COUNTRY} from "./actions";

export const setCountries = (countries) => ({type: SET_COUNTRIES, countries})
export const setCountry = (country) => ({type: SET_COUNTRY, country})
export const clearCountry = () => ({type: CLEAR_COUNTRY})