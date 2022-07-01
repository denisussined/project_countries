import './InitialPage.sass'
import {useNavigate} from 'react-router-dom'

const InitialPage = () => {

    let navigate = useNavigate()

    return (
        <main>
           <button className={"initialButton"} onClick={() => navigate('/countries')}>COUNTRIES</button>
        </main>
    )
}

export default InitialPage