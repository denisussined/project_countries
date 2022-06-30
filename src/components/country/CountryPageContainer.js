import {connect} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {clearCountry} from "../../redux/actionCreators";
import {getCountry} from "../../redux/thunkCreators";
import Loader from "../loader/Loader";
import CountryPage from "./CountryPage";

const CountryPageContainer = ({getCountry, clearCountry, info, isLoaded}) => {

    let {name} = useParams()

    useEffect(() => {
        getCountry(name)
        return () => clearCountry()
    }, [])

    return !isLoaded
        ? <Loader />
        : <CountryPage desc={Object.keys(info)} info={Object.values(info)} />
}

const mapStateToProps = (state) => ({
    info: state.mainData.country.info,
    isLoaded: state.mainData.country.isLoaded
})

export default connect(mapStateToProps, {getCountry, clearCountry})(CountryPageContainer)