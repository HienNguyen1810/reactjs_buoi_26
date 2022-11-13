import React from 'react';

function ProductDetails({onClickEvent, ...data}) {
  return (
    <>
      <img className='card-img-top' src={data.image} alt={data.alias}/>
      <div className='card-body'>
        <p className='card-title' style={{"minHeight":"48px"}}>{data.name}</p>
        <p className='card-text'>{data.price} $</p>
      </div>
    </>
  )
}

export default ProductDetails