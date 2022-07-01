import axios from "axios";

const instance = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'
})

export const api = {
    getCountries: () => instance.get('all').then(res => res.data),

    getCountry: name => instance.get(`name/${name}`).then(res => res.data[0])
}