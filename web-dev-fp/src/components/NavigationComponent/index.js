import React from "react";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink} from "reactstrap";
import styles from "./nav-bar.module.css";

const links = [
    {href: '/home', text: 'Home'},
    {href: '/search', text: 'Search'},
    {href: '/profile', text: 'Profile'},
];


export default class NavigationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            activeLink: props.activeLink
        };

        this.toggle = this.toggle.bind(this);
    }

    createNavItem = ({href, text, className}) => (
        <NavItem>
            <NavLink className={href === this.state.activeLink ? 'active' : ''} href={href}>{text}</NavLink>
        </NavItem>
    );

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className={styles.wdnav} dark expand="md" fixed="top">
                    <NavbarBrand href="/">BookWrm <i className={"fas fa-book"}/> </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {links.map(this.createNavItem)}
                            <NavItem>
                                <NavLink href='/login' className={"d-md-none"}>Login</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="position-absolute end-0 d-none d-md-block" navbar>
                            <NavItem>
                                <NavLink href='/login'
                                         className={'/login' === this.state.activeLink ? 'active' : ''}>
                                    Login
                                </NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

