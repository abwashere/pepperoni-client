import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createMeal } from "../../store/actions/foodActions";
import { confirmCreate } from "../../utils/confirmationPrompts";

//TODO: api errors handling

const _MenuCreateForm = (props) => {
	//
	document.title = "Admin | ajouter un plat";

	//
	const dispatch = useDispatch();
	const [mealData, setMealData] = useState();
	const [confirmation, setConfirmation] = useState(false);
	const [validationErr, setValidationErr] = useState(false);

	//empty fields check
	useEffect(() => {
		if (!mealData) {
			//this condition prevents error message to appear at first render
			setValidationErr(false);
		} else if (mealData.category === "dessert") {
			mealData.foodName && mealData.price
				? setValidationErr(false)
				: setValidationErr(true);
		} else {
			mealData.foodName && mealData.price && mealData.description
				? setValidationErr(false)
				: setValidationErr(true);
		}
	}, [mealData]);

	//form events/functions
	const handleChange = (e) =>
		setMealData({ ...mealData, [e.target.name]: e.target.value });

	const handleReset = () => props.history.go(0);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let callbackCreate = () => {
			dispatch(createMeal(mealData));
			setConfirmation(true);
			setTimeout(() => {
				setConfirmation(false);
				handleReset();
			}, 6000);
		};

		confirmCreate(mealData.foodName, callbackCreate); //func that calls the callbackCreate func after confirmation
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
				{validationErr && (
					<div className="form-error-msg">
						<i className="fas fa-exclamation-triangle"></i> Veuillez renseigner
						tous les champs. <br />
					</div>
				)}
				<div className="information-text">
					La description n'est pas requise pour les desserts.
				</div>
				{/* -- BUTTONS  */}
				<div className="btn-group flex-row sp-btw">
					<button
						type="submit"
						disabled={validationErr}
						className="mui-btn edit"
					>
						<i className="fas fa-save"></i> Enregistrer
					</button>
					<button
						type="button"
						onClick={handleReset}
						className="mui-btn mui-btn--flat mui"
					>
						<i className="fas fa-times"></i> Effacer le formulaire
					</button>
				</div>
			</form>
		</div>
	);
};

export default withRouter(_MenuCreateForm);
