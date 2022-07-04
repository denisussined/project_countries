import {connect} from "react-redux";
import {useEffect} from "react";
import {getCountries} from "../../redux/thunkCreators";
import Loader from "../loader/Loader";
import PaginatedCountriesPage from "./PaginatedCountriesPage";
import {setPreviousPage} from "../../redux/actionCreators";

const CountriesPageContainer = ({getCountries, isLoaded, data, itemsPerPage, previousPage, previousOffset, setPreviousPage}) => {

    useEffect(() => {
        if (!isLoaded) {
            getCountries()
        }
    }, [])

    return isLoaded
        ? <PaginatedCountriesPage
            data={data}
            itemsPerPage={itemsPerPage}
            previousPage={previousPage}
            previousOffset={previousOffset}
            setPreviousPage={setPreviousPage}/>
        : <Loader />
}

let mapStateToProps = (state) => ({
    data: state.mainData.countries.data,
    isLoaded: state.mainData.countries.isLoaded,
    itemsPerPage: state.mainData.countries.itemsPerPage,
    previousPage: state.mainData.countries.previousPage,
    previousOffset: state.mainData.countries.previousOffset,
})

export default connect(mapStateToProps, {getCountries, setPreviousPage})(CountriesPageContainer)