import {useNavigate} from "react-router-dom";

const CountriesItem = ({flag, name}) => {

    let navigate = useNavigate()

    return (
        <div onClick={() => navigate(`${name}`)} className={"countriesItem"}>
            <img className={"countriesItem__flag"} src={flag} alt="flag"/>
            <div className={"countriesItem__name"}>{name}</div>
        </div>
    )
}

export default CountriesItem