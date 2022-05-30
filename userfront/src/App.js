import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/PageInitial";
import Signup from "./components/Singup";
import Login from "./components/Login";
//import InitialPage from "./components/InitialPage";
//import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from "./components/WaitingRoom";
//import Navbarcomp from "./components/Navbar/NavbarComp";

function App() {
	const user = localStorage.getItem("token");

	return (
		
		<Routes>
			 <Route path="/" exact element={<Main />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/wroom" exact element={<WaitingRoom/>} />
			
		</Routes>
	);
}

export default App;
