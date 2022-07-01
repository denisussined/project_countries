import './CountriesPage.sass'
import CountriesItem from "./CountriesItem";
import Pagination from "../pagination/Pagination";

const CountriesPage = ({data, changePage, currentPage, firstPage, lastPage}) => {

    return (
        <main>
            <div className={"countriesPage"}>
                {data.map((country, index) => <CountriesItem name={country.name} flag={country.flag} key={index}/>)}
            </div>
            <Pagination
                changePage={changePage}
                currentPage={currentPage}
                firstPage={firstPage}
                lastPage={lastPage}
            />
        </main>
    )
}

export default CountriesPage