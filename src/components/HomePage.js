import React from 'react';
import InventoryList from './InventoryList';
import Login from './Login';
import styled from 'styled-components'

const HomePageContainer= styled.div`
width:100%;
height:100%;
`
const HomePage = () => {
    return(
        <HomePageContainer>
            <Login />
            <InventoryList />
        </HomePageContainer>
    )
}

export default HomePage;