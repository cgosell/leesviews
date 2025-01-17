import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LeesViews from "./Components/LeesViews/LeesViews";
import Upload from "./Components/Upload/Upload";
import NavBar from "./Components/NavBar/NavBar";
import Gallery from "./Components/Gallery/Gallery";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<LeesViews />} />
				<Route path="/hidden-upload-link" element={<Upload />} />
				<Route path="/gallery" element={<Gallery />} />
			</Routes>
		</Router>
	);
}

export default App;
