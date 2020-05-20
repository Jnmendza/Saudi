import React from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom"
import { getItemsUserId } from "../../actions";
import AddModal from '../modal/AddModal';
import styled from 'styled-components';


const ItemListContainer= styled.div`
display:flex;
flex-direction:column;
padding:5px;
`

const ItemCard= styled.div`
display:flex;
flex-direction:column;
margin: 5px;
justify-content:left;
border: 1px solid lightgrey;
border-radius:5px;
mad-width: 250px;
border: 2px solid #83E380;
`

class SellerItemList extends React.Component {

    componentDidMount() {
        this.props.getItemsUserId();
    }

    render() {
        const item = this.props.item;
        console.log("s_ItemList", this.props.items)
        return (

            <ItemListContainer>
                <div>
                    <AddModal item={item} />
                </div>
                {this.props.items.map((item, key) => {
                    return (
                        <>
                            <ItemCard key={key}>
                                <Link to={`/item/${item.id}`}>
                                        <img className="item-photo" src={item.photo_url} alt="item" />
                                        <h3>{item.name}</h3>
                                </Link>
                                    <span>{item.price}</span>
                                    <p>{item.description}</p>
                            </ItemCard>
                        </>
                    )
                })}
            </ItemListContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

export default withRouter(connect(
    mapStateToProps,
    { getItemsUserId }
)(SellerItemList));