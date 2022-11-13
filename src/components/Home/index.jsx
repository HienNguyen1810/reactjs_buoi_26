import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product";
import Shop from "../Shop";
import SideBar from "../Sidebar";

function Home() {
	const [link, setLink] = useState("#home");

	const render = (link) => {
		switch (link) {
			case "#home":
				return <Product />;
			case "#shop":
				return <Shop />;
			default:
				return <Product />;
		}
	};

	return (
		<Container fluid>
			<Row>
				<Col xs={2}>
					<SideBar setLink={setLink} />
				</Col>
				<Col
					xs={10}
					style={{
						border: "2px solid blue",
					}}
				>
					{render(link)}
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
