import React from 'react'
import LIST from '../data.json'
import ProductItem from '../ProductItem'

function ProductList({handleShow, setProductItem}) {
  const renderData = (data) =>  data.map((d, id) => <ProductItem key={id} {...d} handleShow={handleShow} setProductItem={setProductItem} />)
    
  return (
    <div className='row mb-3 row-cols-3 row-cols-lg-3 g-3'>
      {renderData(LIST)}
    </div>
  )
}

export default ProductList