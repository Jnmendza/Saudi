import React from "react";
import SellerItemList from "./SellerItemList";
import { connect } from 'react-redux';
import { getItemsUserId } from '../../actions';
import styled from 'styled-components';
import SellerPageHeader from '../../images/BioPage.jpg'
import NavBar from '../Navbar'


const Header = styled.div`
    background-image: url(${SellerPageHeader});
    background-size: cover;
    background-repeat: no-repeat;
    height: 30rem;
    display:flex;
    flex-direction: column;
`;

const Title = styled.h1`
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
    margin: auto;
`;

const Container = styled.div`
    display: flex;
    width: 80%;
    margin: 10px auto;
    background: #FFFFF1;

`;

//componentDidMount set user_id in local storage for the user_id endpoint
class SellerPage extends React.Component {

    componentDidMount = () => {
        const id = localStorage.getItem("user_id");
        this.props.getItemsUserId(id);
    }
    render() {
        return (
            <div className="seller-page">
                <Header>
                    <NavBar />
                    <Title>My Store</Title>
                </Header>
                <Container>
                    <SellerItemList />
                </Container>
            </div>
        )
    }
}

export default connect(
    null,
    { getItemsUserId }
)(SellerPage);