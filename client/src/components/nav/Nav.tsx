import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <nav className="navContainer">
            <ul className="navList">
                <li className="navItemDefault">
                    <Link to="/" className={currentPage === "/" ? "activeLink" : "link"}>
                        Home
                    </Link>
                </li>
                <li className="navItemMap">
                    <Link to="/map" className={currentPage === "/map" ? "activeLink" : "link"}>
                        Map
                    </Link>
                </li>
                <li className="navItemManage">
                    <Link to="/manage" className={currentPage === "/manage" ? "activeLink" : "link"}>
                        Manage
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;