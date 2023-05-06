import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Monitors from "./Pages/Map/Monitors";
import Report from "./Pages/Report/Report";
import Welcome from "./Pages/Welcome/Welcome";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Monitors/>} path="map"/>
                <Route element={<Welcome/>} path="/"/>
                <Route element={<Report/>} path="/report"/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
