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

    // const onToggle = () => {
    //     if (!toggled && !isOpen) {
    //         toggled = !toggled;
    //         gsap.to(barOne, .5, { strokeDashoffset: -1076 });
    //         gsap.to(barTwo, .5, { strokeDashoffset: -1250 });
    //         gsap.to(barThree, .5, { opacity: 0, x: -1000 });
    //         setIsOpen(true);


    //     } else {
    //         toggled = !toggled;
    //         gsap.to(barOne, .5, { strokeDashoffset: 0 });
    //         gsap.to(barTwo, .5, { strokeDashoffset: 0 });
    //         gsap.to(barThree, .5, { opacity: 1, x: 0 });
    //         setIsOpen(false)

    //     }
    // }



    return (
        <navbar>
            <Navbar
                color="dark"
                dark
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
                <NavbarToggler
                    className="me-2"
                    onClick={onToggle}
                >

                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav onClick={onToggle} className="me-auto ms-5" navbar>
                        <NavItem>
                            <NavLink >
                                <Link to="continents" >
                                    Continents
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink>
                                <Link to="countries" >
                                    Countries
                                </Link>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink >
                                <Link to="live" >
                                    Live
                                </Link>
                            </NavLink>
                        </NavItem>




                        {/* <NavItem>
                                <NavLink>
                                    <Link to="her">
                                        Her
                                    </Link>
                                </NavLink>
                            </NavItem> */}

                        {/* <NavItem>
                                <NavLink>
                                    <Link to="matches">
                                        Matches
                                    </Link>
                                </NavLink>
                            </NavItem> */}
                        <NavItem>
                            <NavLink>
                                <Link to="promatches">
                                    ProMatches
                                </Link>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Link to="records">
                                    Records
                                </Link>
                            </NavLink>
                        </NavItem>



                        {/* <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                >
                                    Records
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>
                                        <Link to="live">
                                            Live
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="records/kills">
                                            Kills
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="records/recordsdeaths">
                                            Deaths
                                        </Link>
                                    </DropdownItem>



                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                    </Nav>
                    <NavbarText className="ms-auto">
                        {/* Simple Text */}
                    </NavbarText>
                </Collapse>
            </Navbar>
        </navbar>
    )
}

export default Navbars
