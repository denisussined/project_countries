import axios from "axios";

const instance = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'
})

export const api = {
    getCountries: () => instance.get('all'),

    getCountry: name => instance.get(`name/${name}`).then(res => {
        if (res.status === 200) {
            return {
                'flag': res.data[0].flags.svg,
                'country': res.data[0].name.common,
                'official name': res.data[0].name.official,
                'capital': res.data[0].capital.join(' '),
                'region': res.data[0].region,
                'languages': res.data[0].languages ? Object.values(res.data[0].languages).join(', ') : '---',
                'currencies': res.data[0].currencies ? Object.values(res.data[0].currencies).map(cur => cur.name).join(' ') : '---',
                'area': res.data[0].area,
                'population': res.data[0].population,
                'borders': res.data[0].borders ? res.data[0].borders.join(', ') : '---',
            }

        } else console.log('api.getCountry ERROR')

    })
}