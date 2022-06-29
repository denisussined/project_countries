import './App.sass';
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import InitialPage from "./components/initialPage/InitialPage";
import Header from "./components/header/Header";

const App = () => {
    return (
        <div className={"app"}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout />}>
                        <Route index element={<InitialPage />}/>
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
