// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Register } from "./pages/Register";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

export function App() {

    // const { isLogged, setIsLogged } = useState(false)

    return (
        <BrowserRouter>
            <Routes>
                {/* {
                    !isLogged && <Route path="/" element={<Register />} />
                }
                {
                    isLogged
                    && */}
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="products:id" element={<Products />} />
                </Route>
                {/* } */}
            </Routes>
        </BrowserRouter>
    )
}