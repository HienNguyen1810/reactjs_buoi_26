import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./index.css";

function SideBar({ setLink }) {
	const [activeKey, setActiveKey] = useState(0);
	const data = [
		{
			to: "#home",
			name: "Home",
			active: true,
		},
		{
			to: "#shop",
			name: "Shop",
			active: false,
		},
	];

	const render = (data) => {
		return data.map((d, idx) => (
			<Nav
				key={d.name}
				className="flex-column pt-2"
				activeKey={activeKey}
				onSelect={(key) => setActiveKey(key)}
			>
				<Nav.Item>
					<Nav.Link
						href={d.to}
						key={idx}
						eventKey={idx}
						onClick={(event) => {
							event.preventDefault();
							setLink(d.to);
						}}
					>
						{d.name}
					</Nav.Link>
				</Nav.Item>
			</Nav>
		));
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				height: "100%",
			}}
		>
			{render(data)}
		</div>
	);
}

export default SideBar;
