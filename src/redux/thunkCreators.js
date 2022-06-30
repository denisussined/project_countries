import {setCountry} from "./actionCreators";
import {api} from "../api/api";

export const getCountry = (name) => dispatch => {

    api.getCountry(name).then(info => {
        dispatch(setCountry(info))
    })
}