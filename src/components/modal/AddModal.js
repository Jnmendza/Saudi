import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { connect } from 'react-redux';
import { getItems } from '../../actions/index'


function AddModal({ getItems }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState({ name: '', price: '', city: '', country: '', description: '', user_id: localStorage.getItem('user_id')})

    const changeHandler = e => {
        let value = e.target.value;
        setProduct({
            ...product,
            [e.target.name]: value
        })
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit", product)
    axiosWithAuth()
      .post(`/items`, product)
      .then(res => {
        console.log("EditModal Response", res)
        handleClose()
        getItems();
        setProduct({ name: '' });
      })
      .catch(err => console.log(err.response));
  };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add Item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}> 
                <label>
                    Name:
                    <input type='text' name='name' value={product.name} onChange={changeHandler} />
                </label>
                <label>    
                    City:
                    <input type='text' name='city' value={product.city} onChange={changeHandler} />
                </label>
                <label>
                    Country:
                    <input type='text' name='country' value={product.country} onChange={changeHandler} />
                </label>
                <label> 
                    Price:   
                    <input type='text' name='price' value={product.price} onChange={changeHandler} />
                </label>
              <label>
                Description:
                    <input type='text' name='description' value={product.description} onChange={changeHandler} />
              </label>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={ (e) => handleSubmit(e)}>
              Add Item
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default withRouter(connect(
    null,
    { getItems }
)(AddModal));