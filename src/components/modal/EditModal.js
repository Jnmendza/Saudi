import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import { connect } from 'react-redux';
import { getItemById } from '../../actions/index'


function EditModal({item,getItemById}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    console.log("Modal - item", item)

    const [product, setProduct] = useState({})

    console.log('Product', product)

    useEffect(() => {
        setProduct({ 
            name: item.name,
            description: item.description,
            price: item.price,
            photo_url: item.photo_url,
            city: item.city,
            country: item.country
        
        })
      }, [item])

    const changeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

  
    const handleSubmit = (e, id) => {
        e.preventDefault()
        console.log("handleSubmit", product)
        axiosWithAuth()
          .put(`/items/${id}`, product)
          .then(res => {
              console.log("EditModal Response",res)
              getItemById(id)
              setProduct({name:''});
              handleClose()
          })
          .catch(err => console.log(err.response));
      };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit Item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => handleSubmit(e, item.id)}> 
                <label>
                    Item Name:
                    <input
                    name='name'
                    value={product.name}
                    type='text'
                    placeholder={`${item.name}`}
                    onChange={changeHandler}
                    />
                </label>    

                <label>
                    Description
                    <textarea
                    name='description'
                    value={product.description}
                    type='text'
                    placeholder={`${item.description}`}
                    onChange={changeHandler}

                    />
                </label>

                <label>
                    Item Price:
                    <input
                    name='price'
                    value={product.price}
                    type="number"
                    placeholder={`${item.price}`}
                    onChange={changeHandler}
                    />
                </label>

                <label>
                    Photo:
                    <input
                    name='photo_url'
                    value={product.photo_url}
                    type='text'
                    placeholder={`${item.photo_url}`}
                    onChange={changeHandler}
                    />
                </label>


                <label>
                    City
                    <input
                    name='city'
                    value={product.city}
                    type='text'
                    placeholder={`${item.city}`}
                    onChange={changeHandler}
                    />
                </label>

                <label>
                    Country
                    <input
                    name='country'
                    value={product.country}
                    type='text'
                    placeholder={`${item.country}`}
                    onChange={changeHandler}
                    />
                </label>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={ (e) => handleSubmit(e, item.id)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  


export default (connect(
    null,
    { getItemById }
)(EditModal));