import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownItem } from 'reactstrap';
import { withRouter } from 'react-router';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">testing</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <DropdownItem divider />
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/regulate">Regulate</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/copingmechanisms/">Coping Mechanisms</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/stats/">Statistics</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/findhelp/">Find Help</NavLink>
                            </NavItem>
                            <DropdownItem divider />
                            <NavItem>
                                <NavLink href="/login/">Logout</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}