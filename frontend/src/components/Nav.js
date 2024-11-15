
import React, {useEffect} from "react";

import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

const Nav=()=>{
    return (
        <React.Fragment>
            
            <div className="Title">
            <h1>All Shops</h1>
            </div>
            <div className="navbar">

                <Link to="allshops"><button variant="contained" color="secondary"></button></Link>
                <Link to="/home"><button type="button">Home</button></Link>
                <Link to="/about"><button type="button">About us</button></Link>
                <Link to="/allshops"><button type="button">All Shopowners</button></Link>
                <Link to="/deleteshop"><button type="button">Delete Shopowners</button></Link>
                <Link to="/updateshop"><button type="button">Update Shopowners</button></Link>
            </div>
            <div className="Footer">

            </div>
        
        </React.Fragment>
    )
}
export default Nav;