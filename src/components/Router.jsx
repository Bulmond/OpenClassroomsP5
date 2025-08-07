import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Rentals from "../pages/Rentals.jsx";
import Error from "../pages/Error.jsx";
import Header from "../components/Header.jsx";
import Footer from "./Footer.jsx";

const Router = () => {
    const [rentals, setRentals] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5173/src/data/Rentals.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRentals(data);
            });
    }, []);
    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Header />
            <Routes>
                <Route path="/" element={<Home rentalList={rentals} />} />
                <Route path="/a-propos" element={<About />} />
                <Route
                    path="/logement/:rentalId"
                    element={<Rentals rentalList={rentals} />}
                />
                <Route path="*" element={<Error />} />
                <Route path="/logement/*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
