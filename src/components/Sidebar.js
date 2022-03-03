import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'

const Sidebar = () => {


    const [isOpen, setIsOpen] = useState(false);
    const onToggle = () => setIsOpen(!isOpen)



    return (
        <div>Sidebar



            <Button
                color="primary"
                onClick={onToggle}
            >
                Open
            </Button>
            <Offcanvas isOpen={isOpen} toggle={onToggle}>
                <OffcanvasHeader toggle={onToggle}>
                    Offcanvas
                </OffcanvasHeader>
                <OffcanvasBody onClick={onToggle} >
                    <strong>
                        <Link to="continents" >
                            Continents
                        </Link>
                    </strong>
                </OffcanvasBody>
                <OffcanvasBody onClick={onToggle} >
                    <strong>
                        <Link to="continents" >
                            Continents
                        </Link>
                    </strong>
                </OffcanvasBody>
                <OffcanvasBody onClick={onToggle} >
                    <strong>
                        <Link to="continents" >
                            Continents
                        </Link>
                    </strong>
                </OffcanvasBody>
                <OffcanvasBody onClick={onToggle} >
                    <strong>
                        <Link to="lastfixtures" >
                            lastfixtures
                        </Link>
                    </strong>
                </OffcanvasBody>
                <OffcanvasBody onClick={onToggle} >
                    <strong>
                        <Link to="datafixtures" >
                            datafixtures
                        </Link>
                    </strong>
                </OffcanvasBody>
                <OffcanvasBody onClick={onToggle} >
                    <strong>
                        <Link to="teamsearch" >
                        teamsearch
                        </Link>
                    </strong>
                </OffcanvasBody>
            </Offcanvas>






        </div>
    )
}

export default Sidebar