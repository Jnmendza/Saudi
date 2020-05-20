import { LOGIN, GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE,
    GET_ITEMS_USERID, GET_ITEMS_USERID_SUCCESS, GET_ITEMS_USERID_FAILURE,
    GET_ITEM_ID, GET_ITEM_ID_SUCCESS, GET_ITEM_ID_FAILURE,

//     ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE,
    DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE, REGISTER

 } from '../actions';

const initialState = {
    items: [],
    item: {},
    fetchingItems: false,
    fetchedItems: false,
    loggedIn: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: 
            return {
                ...state,
                credentials: action.payload
            }
        case REGISTER:
            return{
                ...state,
                credentials: action.payload
            }
        //get items
        case GET_ITEMS:
            return {
                ...state,
                fetchingItems: true,
                fetchedItems: false
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                fetchingItems: false,
                fetchedItems: true,
                items: action.payload
            }
        case GET_ITEMS_FAILURE:
            return {
                ...state,
                fetchingItems: false,
                fetchedItems: false,
                error: action.payload
            }
        //get items by user id
        case GET_ITEMS_USERID:
            return {
                ...state,
                fetchingItems: true
            }
        case GET_ITEMS_USERID_SUCCESS:
            return {
                ...state,
                fetchingItems: false,
                items: action.payload
            }
        case GET_ITEMS_USERID_FAILURE:
            return {
                ...state,
                fetchingItems: false,
                error: action.payload
            }
        //get item by id
        case GET_ITEM_ID:
            return {
                ...state,
                fetchingItems: true,
            }
        case GET_ITEM_ID_SUCCESS:
            return {
                ...state,
                fetchingItems: false,
                item: action.payload
            }
        case GET_ITEM_ID_FAILURE:
            return {
                ...state,
                fetchingItems: false,
                error: action.payload
            }
        //add item
        // case ADD_ITEM:
        //     return {
        //         ...state
        //     }
        // case ADD_ITEM_SUCCESS:
        //     return {
        //         ...state,
        //         item: action.payload
        //     }
        // case ADD_ITEM_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload
        //     }
        //delete item by id
        case DELETE_ITEM:
            return {
                ...state
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                item: action.payload
            }
        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}