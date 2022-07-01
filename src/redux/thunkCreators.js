import {setCountries, setCountry} from "./actionCreators";
import {api} from "../api/api";

export const getCountry = (name) => dispatch => {

    api.getCountry(name).then(data => {
        let filteredData = {
            'flag': data.flags.svg,
            'country': data.name.common,
            'official name': data.name.official ? data.name.official : '---',
            'capital': data.capital ? data.capital.join(' ') : '---',
            'region': data.region ? data.region : '---',
            'languages': data.languages ? Object.values(data.languages).join(', ') : '---',
            'currencies': data.currencies ? Object.values(data.currencies).map(cur => cur.name).join(' ') : '---',
            'area': data.area ? data.area : '---',
            'population': data.population ? data.population : '---',
            'borders': data.borders ? data.borders.join(', ') : '---',
        }

        dispatch(setCountry(filteredData))
    })
}

export const getCountries = () => dispatch => {

    api.getCountries().then(data => {
        let filteredData = data.map(country => ({
            flag: country.flags.svg,
            name: country.name.common
        }))

        dispatch(setCountries(filteredData))
    })
}