import {setCountry} from "./actionCreators";
import {api} from "../api/api";

export const getCountry = (name) => dispatch => {

    api.getCountry(name).then(data => {
        let filteredData = {
            'flag': data.flags.svg,
            'country': data.name.common,
            'official name': data.name.official,
            'capital': data.capital.join(' '),
            'region': data.region,
            'languages': data.languages ? Object.values(data.languages).join(', ') : '---',
            'currencies': data.currencies ? Object.values(data.currencies).map(cur => cur.name).join(' ') : '---',
            'area': data.area,
            'population': data.population,
            'borders': data.borders ? data.borders.join(', ') : '---',
        }

        dispatch(setCountry(filteredData))
    })
}