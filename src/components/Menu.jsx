import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMenu } from "./../store/actions/foodActions";

const Menu = (props) => {
	const menu = useSelector((state) => state.foodStore.menu);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMenu());
	}, [dispatch]);

	return (
		<div className="Menu">
			<h3 className="sub-title">La Carte</h3>
			<div className="menu menu-starters">
				<h4>Antipasti</h4>
				<table>
					<tbody>
						{menu.map(
							(meal) =>
								meal.category === "antipasti" && (
									<tr key={meal._id}>
										<th className="dish-name">{meal.foodName}</th>
										<td className="dish-description">{meal.description}</td>
										<td className="dish-price">{meal.price} €</td>
									</tr>
								)
						)}
					</tbody>
				</table>
			</div>
			<div className="menu menu-mains">
				<h4>Plats</h4>
				<table>
					<tbody>
						{menu.map(
							(meal) =>
								meal.category === "principal" && (
									<tr key={meal._id}>
										<th className="dish-name">{meal.foodName}</th>
										<td className="dish-description">{meal.description}</td>
										<td className="dish-price">{meal.price} €</td>
									</tr>
								)
						)}
					</tbody>
				</table>
			</div>
			<div className="menu menu-deserts">
				<h4>Desserts</h4>
				<table>
					<tbody>
						{menu.map(
							(meal) =>
								meal.category === "dessert" && (
									<tr key={meal._id}>
										<th className="dish-name">
											{meal.foodName}{" "}
											<span className="dish-price"> - {meal.price} €</span>
										</th>
									</tr>
								)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Menu;
