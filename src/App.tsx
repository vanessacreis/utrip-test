import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/series/:id" element={<Details />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
