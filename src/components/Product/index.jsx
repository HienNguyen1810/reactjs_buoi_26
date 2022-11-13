import React, { useState } from "react";
import Modals from "../Modals";
import ProductList from "../ProductList";

function Product() {
	const [show, setShow] = useState(false);
	const [item, setItem] = useState();
	const handleShow = () => setShow(!show);
	const setProductItem = (item) => setItem(item);

	return (
		<>
			<h1 className="text-center">Shoe Shop</h1>
			<ProductList handleShow={handleShow} setProductItem={setProductItem} />
			<Modals show={show} handleShow={handleShow} item={item} />
		</>
	);
}

export default Product;
