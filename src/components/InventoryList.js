import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions";
import styled from 'styled-components'

const SearchContainer = styled.div`
    background: #1D2C3C;
    height: 100px;
`;

const Search = styled.input`
    width: 20%;
    height: 50%;
    margin: 25px 9%;
    color: #83E38D;
    padding: 20px;
`;

const InventoryListContainer= styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 90%;
    padding: 50px;
    
`
const ItemPhoto= styled.img`
    max-width: 250px;
`

const CardContainer = styled.div`
    border: 2px solid #83E38D;
    padding: 10px;
    width: 275px;
    margin: 40px;
`;

class InventoryList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            selectCountry: ''
        };
    }

    componentDidMount(){
        this.props.getItems();
    }
    
    updateSearch(event) {
        this.setState({search: event.target.value})
    }

    updateFilter(event){
        this.setState({selectCountry: event.target.value})
    }

    render() {
        let filteredItems = this.props.items.filter(
            (item) => {
                return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return(
            <div>
            <SearchContainer>
                 
                <Search 
                    type="text" 
                    value={this.state.search} 
                    onChange={(e) => this.updateSearch(e)} 
                    placeholder="Search"  
                />
            </SearchContainer>
            
            <InventoryListContainer>
                {filteredItems.map(item => {
                    return(
                        <CardContainer>
                            <ItemPhoto src={item.photo_url} alt="item" />
                            <h3>{item.name}<span>${item.price}</span></h3>
                            <p>{item.description}</p>
                        </CardContainer>
                    )
                })}
            </InventoryListContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

export default connect(
    mapStateToProps,
    { getItems }
)(InventoryList);