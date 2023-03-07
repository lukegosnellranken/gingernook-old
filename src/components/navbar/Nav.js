import React from "react";
import gingernooklogo from '../../images/gingernooklogo.png';
import './Nav.css';
import './NavItem'
import NavItem from "./NavItem";
 
function Nav() {
    return(
        <div>
            <nav className="nav background">
                <div className="logo">
                    <img src={gingernooklogo} alt="logo" />
                </div>
                <ul className="nav-list">
                    <NavItem name="Life"/>
                    <NavItem name="Recipes"/>
                    <NavItem name="Our Family"/>
                    <NavItem name="Resources"/>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;