import {connect} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {clearCountry} from "../../redux/actionCreators";
import {getCountry} from "../../redux/thunkCreators";
import Loader from "../loader/Loader";
import CountryPage from "./CountryPage";

const CountryPageContainer = ({getCountry, clearCountry, data, isLoaded}) => {

    let {name} = useParams()

    useEffect(() => {
        getCountry(name)
        return () => clearCountry()
    }, [])

    return !isLoaded
        ? <Loader />
        : <CountryPage data={Object.entries(data)}/>
}

const mapStateToProps = (state) => ({
    data: state.mainData.country.data,
    isLoaded: state.mainData.country.isLoaded
})

export default connect(mapStateToProps, {getCountry, clearCountry})(CountryPageContainer)