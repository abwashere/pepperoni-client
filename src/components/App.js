import "./../styles/App.sass";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./navMain/Navbar";
import Home from "./homePages/Home";
import Menu from "./Menu";
import Reservation from "./Reservation";
import Footer from "./footer/Footer";
import SignIn from "./auth/SignIn";
import ReservationList from "./adminPages/ReservationList";
import EditMenu from "./adminPages/EditMenu";
import EditGallery from "./adminPages/EditGallery";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					{/* PUBLIC ROUTES */}
					<Route exact path="/" component={Home} />
					<Route exact path="/menu" component={Menu} />
					<Route exact path="/reservation" component={Reservation} />
					{/* ADMIN ROUTES */}
					<Route path="/admin/signin" component={SignIn} />
					<Route path="/admin/reservations" component={ReservationList} />
					<Route path="/admin/menu" component={EditMenu} />
					<Route path="/admin/gallery" component={EditGallery} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
