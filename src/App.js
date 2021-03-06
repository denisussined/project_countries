import './App.sass';
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import InitialPage from "./components/initialPage/InitialPage";
import Header from "./components/header/Header";
import CountryPageContainer from "./components/countryPage/CountryPageContainer";
import CountriesPageContainer from "./components/countriesPage/CountriesPageContainer";

const App = () => {
    return (
        <div className={"app"}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout />}>
                        <Route index element={<InitialPage />}/>
                        <Route path={'countries'} element={<CountriesPageContainer />}/>
                        <Route path={'countries/:name'} element={<CountryPageContainer />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}

export default App;
