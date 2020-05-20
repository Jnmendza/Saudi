import React from 'react';
import { connect } from "react-redux";
import { getItemById } from "../actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import EditModal from '../components/modal/EditModal';
import styled from 'styled-components'

const ItemListCard= styled.div`
display:flex;
flex-direction:column;
margin: 5px;
align-items:center;
justify-content:center;
width:50%;
border: 1px solid lightgrey;
border-radius:5px;
`
const ItemImage= styled.img`
width: 100%;
length: 60%;
`

const DescripContainer= styled.div`
display:flex;
flex-direction:column;
padding:10px;
border-radius:5px;
`

const Info= styled.p`
margin:10px;
`

const ButtonContainer= styled.div`
margin:5px;
`

class ItemCard extends React.Component {
    
    componentDidMount() {
        this.props.getItemById(this.props.match.params.id);
    }

    deleteItem = (id) => {
        axiosWithAuth()
            .delete(`/items/${id}`)
            .then(res => {
                console.log("EditModal Response", res)
                getItemById(id)
                this.props.history.push('/seller-page');
            })
            .catch(err => console.log(err.response));
    };

    render() {
        console.log('id', this.props.match.params.id);
        console.log('props', this.props.item);
        const item = this.props.item;
        return (
            <ItemListCard>
                <ItemImage src={item.photo_url} alt="item" />
                <h1>{item.name}</h1>
                <DescripContainer>
                    <Info>Price: {item.price}</Info>
                    <Info>City: {item.city}</Info>
                    <Info>Country: {item.country}</Info>
                    <Info>Description: {item.description}</Info>
                </DescripContainer>
                <ButtonContainer>
                    <EditModal item={item}/>
                </ButtonContainer>
                <ButtonContainer>
                    <button onClick={() => this.deleteItem(this.props.match.params.id)} className="delete-btn">Delete</button>
                </ButtonContainer>
            </ItemListCard>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(
    mapStateToProps,
    { getItemById }
)(ItemCard);