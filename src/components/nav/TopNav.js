import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav as blah, NavItem as blah2, DropdownItem } from 'reactstrap';
import { withRouter, Route, Router } from 'react-router';
import { NavLink, Redirect } from 'react-router-dom'
import logo from '../../logo.svg'
import secondaryLogo from '../../secondaryLogo-07.svg'
import index from "../../index.css"
import { stack as Menu } from 'react-burger-menu'

import { IconContext } from "react-icons";
import { FiUser, FiSearch, FiBarChart2, FiSun, FiShield, FiCornerDownLeft } from "react-icons/fi";
import { logout } from '../login/LoginHandler'
import { Stats } from 'fs';


let topNavStyles = {
    backgroundColor: '#2A4D59',
};

var sideNavStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '30px',
        height: '20px',
        right: '36px',
        top: '15px',
        color: '#8FC6BB'
    },
    bmBurgerBars: {
        background: '#8FC6BB'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        borderTop: '1px solid rgba(0, 0, 0, 0.35)'
    },
    bmMenu: {
        background: '#466E75',
        // padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        // padding: '0.8em',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '3em'
    },
    bmItem: {
        display: 'inline-block',
        boxShadow: "inset 0 -1px rgba(0, 0, 0, 0.35)",
        padding: "1em",
        color: "#C7E5DE"
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    },

}


export default class TopNav extends React.Component {



    render() {


        return (
            <IconContext.Provider value={{ size: "1.3em" }}>
                <Navbar style={topNavStyles} light >
                    <NavbarBrand href="/" className="mr-auto"><img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
                </Navbar>
                <Menu styles={sideNavStyles} left noOverlay disableAutoFocus>
                    <div>
                        <img src={secondaryLogo} className="secondaryLogo" alt="logo" />
                    </div>
                    <NavLink to="/regulate" className="menuItem"><FiSun style={{ marginRight: "10px", marginBottom: "5px" }} />Regulate</NavLink>
                    <NavLink to="/coping" className="menuItem"><FiShield style={{ marginRight: "10px", marginBottom: "5px" }} />Coping Mechanisms</NavLink>
                    <NavLink to="/stats" className="menuItem"><FiBarChart2 style={{ marginRight: "10px", marginBottom: "5px" }} />Statistics</NavLink>
                    <NavLink to="/findhelp" className="menuItem"><FiSearch style={{ marginRight: "10px", marginBottom: "5px" }} />Find Help</NavLink>
                    <NavLink to="/profile" className="menuItem"><FiUser style={{ marginRight: "10px", marginBottom: "5px" }} />User Profile</NavLink>
                    <NavLink to="/login" onClick={logout} className="menuItem"><FiCornerDownLeft style={{ marginRight: "10px", marginBottom: "5px" }} />Logout</NavLink>
                </Menu>
            </IconContext.Provider >
        );
    }
}



// /coping
// /Stats
// /findhelp
// /profile