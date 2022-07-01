import {CLEAR_COUNTRY, SET_COUNTRIES, SET_COUNTRY} from "./actions";

export const setCountries = (filteredData) => ({type: SET_COUNTRIES, data: filteredData})
export const setCountry = (filteredData) => ({type: SET_COUNTRY, data: filteredData})
export const clearCountry = () => ({type: CLEAR_COUNTRY})