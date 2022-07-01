import './CountriesPage.sass'
import CountriesItem from "./CountriesItem";

const CountriesPage = ({data, changePage, currentPage, firstPage, lastPage}) => {

    return (
        <main>
            <div className={"countriesPage"}>
                {data.map((country, index) => <CountriesItem name={country.name} flag={country.flag} key={index}/>)}
            </div>
            <nav>
                <div>
                    <button className={"back"} disabled={currentPage === firstPage} onClick={() => changePage('back')}>
                        {'<<'}
                    </button>
                    <button className={"forward"} disabled={currentPage === lastPage} onClick={() => changePage('forward')}>
                        {'>>'}
                    </button>
                </div>
            </nav>
        </main>
    )
}

export default CountriesPage