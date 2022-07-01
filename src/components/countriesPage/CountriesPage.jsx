import './CountriesPage.sass'
import CountriesItem from "./CountriesItem";

const CountriesPage = ({data}) => {
    return (
        <main>
            <div className={"countriesPage"}>
                {data.map((country, index) => <CountriesItem name={country.name} flag={country.flag} key={index}/>)}
            </div>
        </main>
    )
}

export default CountriesPage