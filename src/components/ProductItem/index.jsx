import React from 'react';
import { Button } from 'react-bootstrap';
import ProductDetails from '../ProductDetails';

function ProductItem({handleShow, setProductItem, ...data}) {
    const onClickEvent = () => {
        setProductItem(data);
        handleShow();
    }
    
    return (
        <div className="col">
            <div className='card mb-4'>
                <ProductDetails {...data} onClickEvent={onClickEvent} />
                <card-body style={{margin: "10px"}}>
                    <Button variant="dark" onClick={onClickEvent}>
                        add to carts <i className="fa-solid fa-cart-shopping"></i>
                    </Button>
                </card-body>
            </div>
        </div>
    )
}

export default ProductItem