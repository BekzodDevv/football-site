import React, { useState } from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown
} from "reactstrap";
import { Link } from "react-router-dom";





const Navbars = () => {

    const [isOpen, setIsOpen] = useState(false);
    const onToggle = () => setIsOpen(!isOpen)


    return (
        <navbar>
            <Navbar
                // color="dark"
                expand="md"
                light
            >
                <NavbarBrand>
                    <Link to="/" >
                        {/* <img
                                className="img-fluid w-50 h-100"
                                src={Logo}
                                alt="logo"
                                loading='lazy'
                            /> */}
                        rcew
                    </Link>
                </NavbarBrand>
                {/* <NavbarToggler
                    className="me-2"
                    onClick={onToggle}
                >

                </NavbarToggler> */}
                <Collapse isOpen={isOpen} navbar>
                    <Nav onClick={onToggle} className="ms-auto ms-5" navbar>
                        <NavItem>
                            <NavLink >
                                <Link to="continents" >
                                    Continents
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="countries" >
                                    Countries
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink>
                                <Link to="lastfixtures" >
                                    Lastfixtures
                                </Link>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink >
                                <Link to="datafixtures" >
                                    Datafixtures
                                </Link>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Link to="teamsearch" >
                                    Teamsearch
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="season" >
                                    Season
                                </Link>
                            </NavLink>
                        </NavItem>


                    </Nav>
                </Collapse>
            </Navbar>
        </navbar>
    )
}

export default Navbars
