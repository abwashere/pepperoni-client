import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createMeal } from "../../store/actions/foodActions";
import { confirmCreate } from "../../utils/confirmationPrompts";

//FIXME: envoi du message de confirmation qu'importe la réponse du serveur => gestion des erreurs à corriger

const _MenuForm = (props) => {
	document.title = "Admin | ajouter un plat";

	const dispatch = useDispatch();

	const initialState = {
		id: "",
		foodName: "",
		category: "",
		description: "",
		price: "",
	};
	const [mealData, setMealData] = useState(initialState);

	const [confirmation, setConfirmation] = useState(false);

	//form events/functions

	const handleChange = (e) =>
		setMealData({ ...mealData, [e.target.name]: e.target.value });

	const handleReset = () => setMealData(initialState);

	console.log(typeof mealData.price);
	//FIXME: PRICE IS A STRING !

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(createMeal(mealData));
		setConfirmation(true);
		setTimeout(() => {
			setConfirmation(false);
			handleReset();
		}, 6000);
	};

	return (
		<div className="EditMenuForm form-container">
			<form
				className="mui-form"
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				{/* --  NAME  */}
				<div className="mui-textfield mui-textfield--float-label">
					<input type="text" name="foodName" required />
					<label>Nom</label>
				</div>
				{/* --  CATEGORY  */}
				<div className="mui-select mui-select--float-label">
					<select name="category" required>
						<option hidden={true}></option>
						<option disabled="disabled" default={true}>
							Choisir une catégorie de plat
						</option>

						<option value="antipasti">antipasti</option>
						<option value="principal">principal</option>
						<option value="dessert">dessert</option>
					</select>
					<label>Catégorie</label>
				</div>
				{/* --  PRICE  */}
				<div className="mui-textfield mui-textfield--float-label">
					<input type="number" name="price" min="1" required />
					<label>Prix</label>
				</div>
				{/* --  DESC  */}
				<div className="mui-textfield mui-textfield--float-label">
					<textarea name="description"></textarea>
					<label>Description</label>
				</div>
				{/* CREATE CONFIRMATION MESSAGE */}
				{confirmation && (
					<div className="info-box">
						{mealData.foodName} a bien été ajouté à la carte.
					</div>
				)}
				{/* -- BUTTONS  */}
				<button type="submit" className="mui-btn edit">
					<i className="fas fa-save"></i> Enregistrer
				</button>
			</form>
			<button onClick={handleReset} className="mui-btn edit">
				<i className="fas fa-times"></i> Effacer le formulaire
			</button>
		</div>
	);
};

export default withRouter(_MenuForm);
