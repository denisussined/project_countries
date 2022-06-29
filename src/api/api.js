import axios from "axios";

const instance = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'
})

export const api = {
    getCountries: () => instance.get('all'),
    getCountry: (name) => instance.get(`name/${name}`)
}