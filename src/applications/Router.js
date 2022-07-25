import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import DetailBook from "../pages/DetailBook";


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Detalle" element={<DetailBook/>}/>
            </Routes>
        </BrowserRouter>
    )
}
