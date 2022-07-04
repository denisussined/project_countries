import {CLEAR_COUNTRY, SET_COUNTRIES, SET_COUNTRY, SET_PREVIOUS_PAGE,} from "./actions";

export const setCountries = (filteredData) => ({type: SET_COUNTRIES, data: filteredData})
export const setCountry = (filteredData) => ({type: SET_COUNTRY, data: filteredData})
export const clearCountry = () => ({type: CLEAR_COUNTRY})
export const setPreviousPage = (pageNumber, offset) => ({type: SET_PREVIOUS_PAGE, pageNumber, offset})