import styled from 'styled-components';
import { Navbar, Nav, CardFooter, Card } from 'reactstrap';

// AppNav CSS

const NavBar = styled(Navbar)`
    position: fixed;
    width: 100%;
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px);
    border-bottom: 1px solid rgb(238, 238, 238);
    padding: 10px 20px;

    & b {
        border-bottom: 1px solid #fff;
        font-family: 'sans-serif';
        letter-spacing: 2px;
        color: #f9e81c;
    }
    & ul {
        margin-left: 400px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        padding: 10px 15px;
        & ul {
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 767px) {
        padding: 10px 15px;
        & ul {
            margin-left: 0;
        }
        & .navbar-brand {
            display: block;
            margin: 0 auto;
            padding: 0;
            margin-right: 19px;
        }
    }
`;
const SubNavBar = styled.div`
    width: 100%;
    height: 30px;
    z-index: 1;
    background-color: #07344e;
    @media only screen and (max-width: 767px) {
        position: fixed;
    }
`;
const nav = styled(Nav)`
    margin-right: auto;
    margin-left: 100px;
    & li {
        margin-left: 60px;
    }
    @media only screen and (max-width: 767px) {
        margin-left: 0;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        margin-left: -50px;
    }
`;
const NavWrap = styled.div`
    display: none;
    @media only screen and (max-width: 767px) {
        display: block;
    }
`;

export { NavBar, nav, SubNavBar, NavWrap };
