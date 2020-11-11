import React from "react";
import './../styles/header.css';

function Navbar() {
    return(
        <header>
            <div className="logo">
                AJD
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="https://google.com">Services</a>
                    </li>
                    <li>
                        <a href="https://google.com">Clients</a>
                    </li>
                    <li>
                        <a href="https://google.com">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;