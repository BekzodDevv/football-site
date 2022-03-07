import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import alanBtn from '@alan-ai/alan-sdk-web';




const Sidebar = () => {




    const [isOpen, setIsOpen] = useState(false);
    const onToggle = () => setIsOpen(!isOpen)

    useEffect(() => {
        alanBtn({
            key: '033e1202b142aa9a7f998e75ce7770fc2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'go:back') {
                    // Call the client code that will react to the received command
                } else if (commandData.command === "openSidebar") {
                    setIsOpen(commandData.data)

                } else if (commandData.command === "closeSidebar") {
                    setIsOpen(commandData.data)
                }
                else if (commandData.command === "datafixtures") {
                    setIsOpen(commandData.data)
                }
            }
        });

    }, []);


    return (
        <div className="sidebarr mt-3 ms-3">
            <Button
                color="primary"
                onClick={onToggle}
            >
                Open
            </Button>
            <Offcanvas isOpen={isOpen} toggle={onToggle}>
                <OffcanvasHeader toggle={onToggle}>
                    <Link to="/" >
                        {/* <img
                                className="img-fluid w-50 h-100"
                                src={Logo}
                                alt="logo"
                                loading='lazy'
                            /> */}
                        rcew
                    </Link>
                </OffcanvasHeader>
                <OffcanvasBody onClick={onToggle} className="sidebarr__content" >
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink to="continents" activeClassName="active" >
                                Continents
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="lastfixtures" activeClassName="active" >
                                Lastfixtures
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="datafixtures" activeClassName="active" >
                                Datafixtures
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="countries" activeClassName="active">
                                Countries
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="teamsearch" activeClassName="active" >
                                Teamsearch
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="season" activeClassName="active" >
                                Season
                            </NavLink>
                        </li>
                    </ul>
                </OffcanvasBody>
            </Offcanvas>






        </div>
    )
}

export default Sidebar