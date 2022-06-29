import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import InitialPage from "./components/initialPage/InitialPage";
import './App.css';

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
            <Outlet/>
        </>
    )
}

export default App;
