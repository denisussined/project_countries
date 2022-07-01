import {connect} from "react-redux";
import {useEffect} from "react";
import {getCountries} from "../../redux/thunkCreators";
import Loader from "../loader/Loader";
import PaginatedCountriesPage from "./PaginatedCountriesPage";

const CountriesPageContainer = ({getCountries, isLoaded, data, itemsPerPage}) => {

    useEffect(() => {
        getCountries()
    }, [])

    return isLoaded
        ? <PaginatedCountriesPage data={data} itemsPerPage={itemsPerPage}/>
        : <Loader />
}

let mapStateToProps = (state) => ({
    data: state.mainData.countries.data,
    isLoaded: state.mainData.countries.isLoaded,
    itemsPerPage: state.mainData.countries.itemsPerPage,
})

export default connect(mapStateToProps, {getCountries})(CountriesPageContainer)