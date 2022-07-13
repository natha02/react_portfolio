import React, {useEffect, useState} from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Competences from "./components/competences/Competences";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {PacmanLoader} from "react-spinners";

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {
                loading
                    ?
                    (
                        <div id="pacman">
                            <PacmanLoader
                                          size={50}
                                          color={"#fff"}
                                          loading={loading}
                                          speedMultiplier={1}
                            />
                        </div>
                    )
                    :
                    (
                        <Router basename="/react_portfolio">
                            <Nav/>
                            <Routes>
                                <Route path="/" element={<Header/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/competences" element={<Competences/>}/>
                                <Route path="/portfolio" element={<Portfolio/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                            </Routes>
                        </Router>
                    )

            }

        </>
    );
}


export default App;