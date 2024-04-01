import React from "react";
import './Navbar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faAppleWhole} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light nav_bg">
                <a className="navbar-brand ml-5" href="#"><FontAwesomeIcon icon={faAppleWhole} /> iPhoneProd</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item active text-light">
                            <a className="nav-link" href="#">Waiting List</a>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">SignUp</a>
                        </li>
                        <li className="nav-item active">
                         <button type="button" className="btn btn-success butn_sytle">Get iPhoneProd Now <FontAwesomeIcon icon={faArrowRight}/></button>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </>
    );

    
}