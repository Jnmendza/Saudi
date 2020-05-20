import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logoimg from '../images/Logo_white.png'

const Container = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
`;

const NavLink= styled(Link)`
font-family: 'Open Sans', sans-serif;
color: white;
font-size:30px;
margin: 3%;
&:hover{
    text-decoration:none;
    color: mediumvioletred;
}
`

const NavContainer = styled.div`
    width: 90%;
    height: 45%;
    display: flex;
    justify-content: flex-end;
`;

function signOut(){
    localStorage.clear()
    window.location.href='/'
}
const NavBar= () =>{
    let navLinks;
    if (localStorage.getItem('token')){
        navLinks=(
            <>
                <NavLink to='/seller-page'>
                    My Store
                </NavLink>
                <NavLink onClick={()=> signOut()}>
                    Sign Out
                </NavLink>
                
            </>
        )
    }else{
        navLinks=(
            <>
                <NavLink to='/sign-up'>
                    Sign Up
                </NavLink>

                <NavLink to='/login'>
                    Log In
                </NavLink>
            </>
        )
    }
        return(
            <Container>
            <a href="/"> <img src={Logoimg} alt="logo" height="200px" width="200px" /></a>
                <NavContainer>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/inventory-list'>Shop</NavLink>
                    {navLinks}
                </NavContainer>
            </Container>
        )
}

export default NavBar;