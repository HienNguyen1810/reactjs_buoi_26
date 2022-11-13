import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductDetails from '../ProductDetails';

function Modals({show, handleShow, item}) {
  return (
    <>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{item?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductDetails {...item}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals