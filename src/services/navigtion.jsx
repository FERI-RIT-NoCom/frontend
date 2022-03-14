import React from "react";
import {Link} from "react-router-dom";
import '../styles/bar.css'

function Navigtion(){

    function openNav() {
        document.getElementById("myside-menu").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("myside-menu").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

    return(
        <>
            <div id="myside-menu" className="side-menu">
                <a href="javascript:void(0)" className="close-btn" onClick={closeNav}>×</a>
                <Link to={"/login"}>Login</Link>
                <Link to={"/main"}>Main</Link>
                <Link to={"/register"}>Register</Link>
            </div>
            <div id="main">
                <button className="logo" onClick={closeNav}>NoCom</button>
                <button className="open-btn" onClick={openNav}>☰</button>
            </div>
        </>
    )
}

export default Navigtion;