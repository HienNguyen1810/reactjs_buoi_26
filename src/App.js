import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route index path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
