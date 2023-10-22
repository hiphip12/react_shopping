import React from 'react'
import Menu from "./Menu";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Link } from "react-router-dom";


const Homepage = () => {
    return (
        <div className="homepage">
            <ThemeProvider>
                <Menu />
                <div className="homepage_text">
                    <Link to="/products-list">
                        <h1>Super Store</h1>
                        <h5> May your wildest shopping dreams come true</h5>
                    </Link>
                </div>
            </ThemeProvider >
        </div >
    )
}

export default Homepage;