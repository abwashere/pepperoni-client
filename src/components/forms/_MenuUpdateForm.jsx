import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
	getMenu,
	updateMeal,
	deleteMeal,
} from "../../store/actions/foodActions";
import { confirmDelete } from "../../utils/confirmationPrompts";

//FIXME: envoi du message de confirmation qu'importe la réponse du serveur => gestion des erreurs à corriger
//FIXME: price becomes a string on change

const _MenuUpdateForm = (props) => {
	document.title = "Admin | modifier menu";

	const dispatch = useDispatch();

	//load the menu at first render and dispatch calls
	useEffect(() => {
		dispatch(getMenu());
	}, [dispatch]);

	const menu = useSelector((state) => state.foodStore.menu);

	//initial state with the properties of a meal
	const [currentMeal, setCurrentMeal] = useState({});
	const [confirmation, setConfirmation] = useState(false);

	//empty fields check
	let validationErr = null;
	for (let key in currentMeal) {
		if (
			(key === "foodName" || key === "category" || key === "price") &&
			!currentMeal[key] //one of these fields is empty
		) {
			validationErr = "Veuillez renseigner tous les champs.";
			console.log("error in field", key, validationErr);
			break;
		} else {
			validationErr = null;
		}
	}

	//events/functions
	const handleChange = (e) => {
		if (e.target.name === "pickedMeal") {
			let pickedMealId = e.target.value;
			let pickedMeal = menu.filter((meal) => meal._id === pickedMealId)[0];
			setCurrentMeal({
				...pickedMeal,
				description: pickedMeal.description || "", //because desert don't have description => prevents the other meals description to stay in the state
			});
		} else if (e.target.name === "price") {
			setCurrentMeal({
				...currentMeal,
				[e.target.name]: Number(e.target.value),
			});
		} else {
			setCurrentMeal({ ...currentMeal, [e.target.name]: e.target.value });
		}
	};

	const handleReset = (e) => {
		const initialData = menu.filter((meal) => meal._id === currentMeal._id)[0];
		setCurrentMeal(initialData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(updateMeal(currentMeal._id, currentMeal));
		setConfirmation(true);
		setTimeout(() => {
			setConfirmation(false);
		}, 6000);
	};

	const handleDelete = (e) => {
		let callbackDelete = () => {
			dispatch(deleteMeal(currentMeal._id));
			//then, clear all fields :
			setCurrentMeal({});
			document.getElementById("pickedMeal").value = "";
		};
		confirmDelete(currentMeal.foodName, callbackDelete);
	};

	console.log("modified meal =>", currentMeal);

	/* --------- RENDER --------- */
	/* -------------------------- */
	return (
		<div className="EditMenuForm form-container">
			<form className="mui-form" onSubmit={handleSubmit}>
				{/* -- SELECTION => get the ID of selected meal */}
				<div className="mui-select">
					<select
						name="pickedMeal"
						id="pickedMeal"
						required
						onChange={handleChange}
					>
						<option hidden={true}>Plats de la carte</option>
						<option disabled="disabled" default={true}>
							Plats de la carte
						</option>
						{menu.map((meal) => (
							<option key={meal._id} value={meal._id}>
								{meal.foodName}
							</option>
						))}
					</select>
					<label>Plat à modifier</label>
				</div>

				{currentMeal._id && (
					<>
						{/* -- EDIT NAME  */}
						<div className="mui-textfield">
							<input
								type="text"
								name="foodName"
								value={currentMeal.foodName}
								required
								onChange={handleChange}
							/>
							<label>Modifier le nom</label>
						</div>
						{/* -- EDIT CATEGORY  */}
						<div className="mui-select">
							<select
								name="category"
								value={currentMeal.category}
								required
								onChange={handleChange}
							>
								<option hidden={true}>
									{currentMeal.category &&
										`Catégorie initiale : ${currentMeal.category}`}
								</option>
								<option disabled="disabled" default={true}>
									Catégorie initiale : {currentMeal.category}
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
								value={currentMeal.price}
								name="price"
								min="1"
								required
								onChange={handleChange}
							/>
							<label>Modifier le prix</label>
						</div>
						{/* -- EDIT DESCRIPTION  */}
						<div className="mui-textfield">
							<textarea
								value={currentMeal.description}
								name="description"
								onChange={handleChange}
							></textarea>
							<label>Modifier la description</label>
						</div>
						{/* UPDATE CONFIRMATION MESSAGE */}
						{confirmation && (
							<div className="info-box">
								Vos modifications ont bien été prises en compte.
							</div>
						)}
						{validationErr && (
							<div style={{ color: "red" }}>{validationErr}</div>
						)}
						{/* -- BUTTONS  */}
						<button
							type="submit"
							disabled={Boolean(validationErr)} //prevent form submit if a required field is empty
							className="mui-btn edit"
						>
							<i className="fas fa-pen-fancy"></i> Modifier
						</button>
						<button
							type="button" //prevent form submit = no page refresh
							onClick={handleDelete}
							className="mui-btn mui-btn--flat mui"
						>
							<i className="fas fa-trash-alt"></i> Supprimer
						</button>
						<button
							type="button" //prevent form submit = no page refresh
							onClick={handleReset}
							className="mui-btn edit"
						>
							<i className="fas fa-times"></i> Effacer les modifications
						</button>
					</>
				)}
			</form>{" "}
		</div>
	);
};

export default withRouter(_MenuUpdateForm);
