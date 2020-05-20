import React from 'react';
import Logo from '../images/Logo_white.png'
import styled from 'styled-components';

const FooterLogo = styled.img`
    width: 15%;
    height: 15%;
    margin-right: 60%;
    margin-top: 25px;
`;

const FooterContainer = styled.div`
    background: #1D2C3C;
    color: white;
    display: flex;
    justify-content: flex-end;
    
`;

const Info = styled.p`
    margin: 25px 80px 25px 0;
    
`;


const Footer = () => {
    return (
        
        <FooterContainer>
        <FooterLogo src={Logo} />
        
            <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Info>
        
        </FooterContainer>
        
    )
}
export default Footer;

