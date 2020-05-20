import React from 'react';
import InventoryList from './InventoryList';
import NavBar from './Navbar';
import styled, { keyframes } from 'styled-components'
import SellerPageHeader from '../images/BioPage.jpg'


const HomePageContainer= styled.div`
width:100%;
height:100%;
`
const Header = styled.div`
    background-image: url(${SellerPageHeader});
    background-size: cover;
    background-repeat: no-repeat;
    height: 30rem;
    display:flex;
    flex-direction: column;

`

const keyFrames = keyframes`
    0%
    {
        content: "It's working"
    }
    75%
    {
        content: "Empowering East African women
        to trade legally and safe."
    }
    100%
    {
        content: "This might work, did it?"
    }
`;

const Anime = styled.span`
    &:before {
        content: "";
        animation: ${keyFrames} 20s infinite;
    }
`

const Text = styled.p`
    font-size: 32px;
    color: white;
    margin: auto;
    width: 25%;
    text-align: center;
`

const HomePage = () => {
    return(
        <HomePageContainer>
            <Header>
                <NavBar />
                <Text><Anime></Anime></Text>
            </Header>
            <InventoryList />
        </HomePageContainer>
    )
}

export default HomePage;