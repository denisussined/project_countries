import {connect} from "react-redux";
import {useEffect} from "react";
import {getCountries} from "../../redux/thunkCreators";
import CountriesPage from "./CountriesPage";
import Loader from "../loader/Loader";

const CountriesPageContainer = ({getCountries, isLoaded, data}) => {

    useEffect(() => {
        getCountries()
    }, [])

    return isLoaded
        ? <CountriesPage data={data} />
        : <Loader />
}

let mapStateToProps = (state) => ({
    data: state.mainData.countries.data,
    isLoaded: state.mainData.countries.isLoaded
})

export default connect(mapStateToProps, {getCountries})(CountriesPageContainer)