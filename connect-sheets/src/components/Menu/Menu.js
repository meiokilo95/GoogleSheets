import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/images/navbar_logo.png';

export function Menu({ props }) {

    return (
        <Navbar bg="dark">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="Yo desarrollo"
                    style={{ maxHeight: 40 }}
                />
            </Navbar.Brand>
        </Navbar>
    )
}