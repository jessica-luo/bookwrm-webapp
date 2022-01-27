import React from "react";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink} from "reactstrap";
import styles from "./nav-bar.module.css";
import { withCookies, Cookies } from "react-cookie";
import {instanceOf} from "prop-types";

const links = [
    {href: '/home', text: 'Home'},
    {href: '/search', text: 'Search'},
];

 class NavigationComponent extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            isOpen: false,
            activeLink: props.activeLink,
            loggedIn: cookies.get('loggedIn') || false,
            user: cookies.get('user') || ''
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
            <>
                <Navbar className={styles.wdnav} dark expand="md">
                    <NavbarBrand href="/">BookWrm <i className={"fas fa-book"}/> </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {links.map(this.createNavItem)}
                            <NavItem>
                                <NavLink href={!this.state.loggedIn? "/login": ("/profile/private/" + this.state.user)}
                                         className={"d-md-none"}>{!this.state.loggedIn? "Login": "Your Profile"}
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="position-absolute end-0 d-none d-md-block" navbar>
                            <NavItem>
                                <NavLink href={!this.state.loggedIn? "/login": ("/profile/private/" + this.state.user)}
                                         className={'/login' === this.state.activeLink ? 'active' : ''}>
                                    {!this.state.loggedIn? "Login":
                                        <div><i className={"fa fa-user"}/> {this.state.user}</div>}
                                </NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Navbar>
            </>
        );
    }
}

export default withCookies(NavigationComponent)
