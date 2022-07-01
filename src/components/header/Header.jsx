import './Header.sass'
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({isLoaded}) => {

    let navigate = useNavigate()

    return (
        <header>
            <h1 className={"header__item"} onClick={() => navigate('/')}>Project_countries</h1>
            <button
                className={"header__item"} onClick={() => navigate('/countries')} hidden={!isLoaded}
            >Countries</button>
        </header>
    )
}

let mapStateToProps = (state) => ({
    isLoaded: state.mainData.country.isLoaded
})

export default connect(mapStateToProps)(Header)