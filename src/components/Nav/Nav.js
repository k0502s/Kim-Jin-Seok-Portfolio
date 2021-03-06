import React, { useState } from 'react';
import * as S from './Nav.style';
import { Collapse, NavbarToggler, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const AppNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <S.NavBar dark expand="lg" className="sticky-top">
                <NavbarToggler onClick={toggle} style={{ border: 'none' }} />
                <NavbarBrand href="/">
                    <b>Kim, Jin Seok</b> Portofolio
                </NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <S.nav navbar>
                        <NavItem>
                            <NavLink className="text-white" onClick={toggle}>
                                <a href="#home">Home</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" onClick={toggle}>
                                <a href="#about">About</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" onClick={toggle}>
                                <a href="#skils">Skils</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" onClick={toggle}>
                                <a href="#projects">Projects</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" onClick={toggle}>
                                <a href="#contact">Contact</a>
                            </NavLink>
                        </NavItem>
                    </S.nav>
                </Collapse>
            </S.NavBar>
        </>
    );
};

export default AppNav;
