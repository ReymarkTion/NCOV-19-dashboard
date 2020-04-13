import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { MdMultilineChart, MdHome } from "react-icons/md";

export default function NavigationBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="dashboard">Northern Mindanao COVID-19 Updates</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto">
                    <li className={"nav-item ".concat( props.nav_active === "home" ? 'active' : '')}>
                        <a className="nav-link" href="dashboard"><MdHome /><code> Home </code></a>
                    </li>
                    <li className={"nav-item ".concat( props.nav_active === "daily-charts" ? 'active' : '')}>
                        <a className="nav-link" href="daily-charts"><MdMultilineChart /><code> Daily Charts </code></a>
                    </li>
                    <li className={"nav-item mr-5 ".concat( props.nav_active === "about-page" ? 'active' : '')}>
                        <a className="nav-link" href="#"><IoIosPeople /><code> About Page </code></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}