import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
	getMenu,
	updateMeal,
	deleteMeal,
} from "../../store/actions/foodActions";
import { confirmDelete } from "../../utils/confirmationPrompts";

//create your forceUpdate hook
function useForceUpdate() {
	const [value, setValue] = useState(0); // integer state
	return () => setValue((value) => ++value); // update the state to force render
}

const _MenuUpdateForm = (props) => {
	//load the menu when component first renders
	const dispatch = useDispatch();
	const forceUpdate = useForceUpdate();

	useEffect(() => {
		dispatch(getMenu());
		//useDispatch cannot be called within a callback
		document.title = "Pepperoni | modifier menu";
	}, [dispatch]);

	const menu = useSelector((state) => state.foodStore.menu);

	//define the initial state with the properties of meals
	const initialState = {
		id: "",
		foodName: "",
		category: "",
		description: "",
		price: null,
	};
	const [modifiedMeal, setModifiedMeal] = useState(initialState);

	//form events/functions
	const eraseEntry = () => {
		let unchangedMeal = menu.filter((meal) => meal._id === modifiedMeal._id)[0];
		setModifiedMeal(unchangedMeal);
	};
	const handleChange = (e) => {
		if (e.target.name === "pickedMeal") {
			let pickedMealId = e.target.value;
			setModifiedMeal(menu.filter((meal) => meal._id === pickedMealId)[0]);
		} else {
			setModifiedMeal({ ...modifiedMeal, [e.target.name]: e.target.value });
		}
	};
	console.log("modifiedMeal  =>", modifiedMeal);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(updateMeal(modifiedMeal._id, modifiedMeal));
		props.history.push("/menu");
	};
	const handleDelete = () => {
		confirmDelete(modifiedMeal.foodName, deleteMeal(modifiedMeal._id));
		setModifiedMeal(initialState);

		forceUpdate();
	};

	// ------ RENDER ------
	return (
		<div className="EditMenuForm form-container">
			<form
				className="mui-form"
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				{/* -- SELECTION => get the ID of selected meal */}
				<div className="mui-select">
					<select
						name="pickedMeal"
						id="pickedMeal"
						defaultValue={modifiedMeal.foodName || `Toute la carte`}
						required
					>
						<option disabled>Toute la carte</option>
						{menu.map((meal) => (
							<option key={meal._id} value={meal._id}>
								{meal.foodName}
							</option>
						))}
					</select>
					<label>Plat à modifier</label>
				</div>

				{/* -- EDIT NAME  */}
				<div className="mui-textfield">
					<input
						type="text"
						name="foodName"
						defaultValue={modifiedMeal.foodName}
						required
					/>
					<label>Modifier le nom</label>
				</div>
				{/* -- EDIT CATEGORY  */}
				<div className="mui-select">
					<select name="category" defaultValue={modifiedMeal.category} required>
						<option disabled>
							{modifiedMeal.category &&
								`Catégorie initiale : ${modifiedMeal.category}`}
						</option>
						<option value="antipasti">antipasti</option>
						<option value="principal">principal</option>
						<option value="dessert">dessert</option>
					</select>
					<label>Modifier la catégorie</label>
				</div>
				{/* -- EDIT PRICE  */}
				<div className="mui-textfield">
					<input
						type="number"
						defaultValue={modifiedMeal.price}
						name="price"
						min="1"
						required
					/>
					<label>Modifier le prix</label>
				</div>
				{/* -- EDIT DESC  */}
				<div className="mui-textfield">
					<textarea
						defaultValue={modifiedMeal.description}
						name="description"
					></textarea>
					<label>Modifier la description</label>
				</div>

				{/* -- BUTTONS  */}
				<button type="submit" className="mui-btn edit">
					<i className="fas fa-pen-fancy"></i> Modifier
				</button>
			</form>
			<button onClick={handleDelete} className="mui-btn mui-btn--flat mui">
				<i className="fas fa-trash-alt"></i> Supprimer
			</button>
			<button onClick={eraseEntry} className="mui-btn edit">
				<i className="fas fa-times"></i> Effacer les modifications en cours
			</button>
		</div>
	);
};

export default withRouter(_MenuUpdateForm);
