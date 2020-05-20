import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN = 'LOGIN';

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN });

    return axiosWithAuth()
        .post(`/auth/login`, credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data.user.id);
            // redirect to seller home page
            this.props.history.push("/seller-page");
        })
        .catch(err => console.log(err));
};

export const REGISTER = 'REGISTER';

export const register = (credentials) => dispatch => {
    dispatch({ type: REGISTER });

    return axiosWithAuth()
        .post(`https://african-marketplace-bw.herokuapp.com/api/auth/register`, credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data.new_user.id);
            // redirect to seller home page
            this.props.history.push("/seller-page");
        })
        .catch(err => console.log(err));
};

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

export const getItems = () => dispatch => {
    dispatch({ type: GET_ITEMS });

    axiosWithAuth()
        .get('/items')
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_ITEMS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: GET_ITEMS_FAILURE, payload: err });
        })
}

export const GET_ITEMS_USERID = 'GET_ITEMS_USERID';
export const GET_ITEMS_USERID_SUCCESS = 'GET_ITEMS_USERID_SUCCESS';
export const GET_ITEMS_USERID_FAILURE = 'GET_ITEMS_USERID_FAILURE';

export const getItemsUserId = () => dispatch => {
    dispatch({ type: GET_ITEMS_USERID });
    const id = localStorage.getItem("user_id");

    axiosWithAuth()
        .get(`/users/${id}`)
        .then(res => {
            console.log("GET_ITEMS_USERID_SUCCESS",res.data.user.items);
            dispatch({ type: GET_ITEMS_USERID_SUCCESS, payload: res.data.user.items });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: GET_ITEMS_USERID_FAILURE, payload: err });
        })
}

export const GET_ITEM_ID = 'GET_ITEM_ID';
export const GET_ITEM_ID_SUCCESS = 'GET_ITEM_ID_SUCCESS';
export const GET_ITEM_ID_FAILURE = 'GET_ITEM_ID_FAILURE';

export const getItemById = (id) => dispatch => {
    dispatch({ type: GET_ITEM_ID });

    axiosWithAuth()
        .get(`/items/${id}`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_ITEM_ID_SUCCESS, payload: res.data.item });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: GET_ITEM_ID_FAILURE, payload: err });
        })
}

// export const ADD_ITEM = 'ADD_ITEM';
// export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
// export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

// export const addItem = item => dispatch => {
//     dispatch({ type: ADD_ITEM });

//     axiosWithAuth()
//         .post(`/items`, item)
//         .then(res => {
//             dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data });
//         })
//         .catch(err => {
//             console.error(err);
//             dispatch({ type: ADD_ITEM_FAILURE, payload: err });
//         })
// }

export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const deleteItem = (id) => dispatch => {
    console.log(`item id: ${id}`);
    dispatch({ type: DELETE_ITEM });
    //const id = match.params.id

    axiosWithAuth()
        .delete(`/items/${id}`)
        .then((res) => {
            dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data });
            //history.push('/seller-page');
        })
        .catch(err => {
            console.error('error', err)
            dispatch({ type: DELETE_ITEM_FAILURE, payload: err });
        })
}

// export const ModalActionTypes = keyMirror({
//     HIDE_MODAL: null,
//     SHOW_MODAL: null,
// })
