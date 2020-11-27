import "./styles/App.sass";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/navMain/Navbar";
import Home from "./components/homePages/Home";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Footer from "./components/footer/Footer";
import LogIn from "./components/auth/LogIn";
import ReservationList from "./components/adminPages/ReservationList";
import EditMenu from "./components/adminPages/EditMenu";
import EmployeesList from "./components/adminPages/EmployeesList";

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
					{/* ADMIN ROUTES TODO: PROTECT */}
					<Route path="/admin/login" component={LogIn} />
					<Route path="/admin/staff" component={EmployeesList} />
					<Route path="/admin/reservations" component={ReservationList} />
					<Route path="/admin/menu/:mode(create|update)" component={EditMenu} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
