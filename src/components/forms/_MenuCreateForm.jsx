import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
	getMenu,
	getMeal,
	createMeal,
	updateMeal,
	deleteMeal,
} from "../../store/actions/foodActions";

// const handleSubmit = () => {};

const _MenuForm = (props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMenu());
	}, [dispatch]);

	const menu = useSelector((state) => state.foodStore.menu);
	const pickedMeal = useSelector((state) => state.foodStore.pickedMeal._id);

	const [mealData, setMealData] = useState({
		foodName: "",
		category: "",
		description: "",
		price: null,
	});

	const handleChange = (e) => {
		let key = e.target.name;
		let value = e.target.value;
		setMealData({ [key]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(createMeal(mealData));
	};

	const handleDelete = () => deleteMeal(pickedMeal);

	return (
		<div className="EditMenuForm form-container">
			<form className="mui-form">
				{/* -- SELECTION  */}
				<div className="mui-select">
					<select name="category" onChange={() => getMeal(pickedMeal)} required>
						<option value="">Sélectionner un plat</option>
						{menu.map((meal) => (
							<option key={meal._id} value={meal._id}>
								{meal.foodName}
							</option>
						))}
					</select>
					<label>Plat à modifier</label>
				</div>
				{/* -- EDIT NAME  */}
				<div className="mui-textfield mui-textfield--float-label">
					<input type="text" name="dishName" required />
					<label>Modifier le nom</label>
				</div>
				{/* -- EDIT CATEGORY  */}
				<div className="mui-textfield mui-textfield--float-label">
					<input type="select" name="category" required />
					<option value=""></option>
					<label>Modifier la catégorie</label>
				</div>
				{/* -- EDIT PRICE  */}
				<div className="mui-textfield mui-textfield--float-label">
					<input type="number" name="price" min="1" required />
					<label>Modifier le prix</label>
				</div>
				{/* -- EDIT DESC  */}
				<div className="mui-textfield mui-textfield--float-label">
					<textarea name="description"></textarea>
					<label>Modifier la description</label>
				</div>

				{/* -- BUTTONS  */}
				{props.match.params.mode === "edit" && (
					<React.Fragment>
						<button
							type="submit"
							onClick={handleSubmit}
							className="mui-btn edit"
						>
							Modifier <i className="fas fa-pen-fancy"></i>
						</button>
						<button
							type="submit"
							onClick={handleDelete}
							className="mui-btn mui-btn--flat mui"
						>
							Supprimer <i className="fas fa-trash-alt"></i>
						</button>
					</React.Fragment>
				)}
				{props.match.params.mode === "create" && (
					<React.Fragment>
						<button
							type="submit"
							onClick={handleSubmit}
							className="mui-btn edit"
						>
							Créer <i className="fas fa-plus"></i>
						</button>
					</React.Fragment>
				)}
			</form>
		</div>
	);
};

export default withRouter(_MenuForm);
