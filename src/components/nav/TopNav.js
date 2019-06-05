import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav as blah, NavItem as blah2, NavLink as blah3, DropdownItem } from 'reactstrap';
import { withRouter, Route, NavLink, Router, } from 'react-router';
import logo from '../../logo.svg'
import secondaryLogo from '../../secondaryLogo-07.svg'
import index from "../../index.css"
import { stack as Menu } from 'react-burger-menu'

import { IconContext } from "react-icons";
import { FiUser, FiSearch, FiBarChart2, FiSun, FiShield } from "react-icons/fi";


let topNavStyles = {
    backgroundColor: '#A9D3CB',
};

var sideNavStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '30px',
        height: '20px',
        right: '36px',
        top: '15px',
        color: '#2a4d59'
    },
    bmBurgerBars: {
        background: '#2a4d59'
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
        height: '100%'
    },
    bmMenu: {
        background: '#2a4d59',
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
        boxShadow: "inset 0 -1px rgba(0, 0, 0, 0.1)",
        padding: "1em",
        color: "#8FC6BB"
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    },

}


export default class Example extends React.Component {

    showSettings(event) {
        event.preventDefault();
    }

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
                    <a id="home" className="menuItem" href="/"><FiSun style={{ marginRight: "10px", marginBottom: "5px" }} />Regulate</a>

                    <a id="home" className="menuItem" href="/coping"><FiShield style={{ marginRight: "10px", marginBottom: "5px" }} />Coping Mechanisms</a>

                    <a id="about" className="menuItem" href="/stats"><FiBarChart2 style={{ marginRight: "10px", marginBottom: "5px" }} />Statistics</a>

                    <a id="contact" className="menuItem" href="/help"><FiSearch style={{ marginRight: "10px", marginBottom: "5px" }} />Find Help</a>

                    <a onClick={this.showSettings} className="menu-item--small" href="/profile"><FiUser style={{ marginRight: "10px", marginBottom: "5px" }} />User Profile</a>
                </Menu>
            </IconContext.Provider>
        );
    }
}