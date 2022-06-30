import {CLEAR_COUNTRY, SET_COUNTRIES, SET_COUNTRY} from "./actions";

export const setCountries = (countries) => ({type: SET_COUNTRIES, countries})
export const setCountry = (filteredData) => ({type: SET_COUNTRY, data: filteredData})
export const clearCountry = () => ({type: CLEAR_COUNTRY})