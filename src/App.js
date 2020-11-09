import "./styles/App.sass";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/navMain/Navbar";
import Home from "./components/homePages/Home";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Footer from "./components/footer/Footer";
import SignIn from "./components/auth/SignIn";
import ReservationList from "./components/adminPages/ReservationList";
import EditMenu from "./components/adminPages/EditMenu";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				{/*
				{userInSession && <Navbar style={{background:"none"}} />} 
				 */}
				<Switch>
					{/* PUBLIC ROUTES */}
					<Route exact path="/" component={Home} />
					<Route exact path="/menu" component={Menu} />
					<Route exact path="/reservation" component={Reservation} />
					{/* ADMIN ROUTES TODO: PROTECT */}
					<Route path="/admin/signin" component={SignIn} />
					<Route path="/admin/reservations" component={ReservationList} />
					<Route path="/admin/menu/:mode(create|update)" component={EditMenu} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
