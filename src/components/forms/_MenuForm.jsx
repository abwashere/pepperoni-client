import React from "react";
import { withRouter } from "react-router-dom";

const handleChange = () => {};
const handleSubmit = () => {};

const _MenuForm = (props) => {
	return (
		<div className="EditMenuForm form-container">
			<form
				className="mui-form"
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				{/* -- SELECTION  */}
				<div className="mui-select">
					<select name="category" required>
						<option value="">Sélectionner un plat</option>
						{/* TODO: map ici */}
						<option>Option 1</option>
						<option>Option 2</option>
					</select>
					<label>Sélectionner un plat</label>
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
						<button type="submit" className="mui-btn edit">
							Modifier <i className="fas fa-pen-fancy"></i>
						</button>
						<button type="submit" className="mui-btn mui-btn--flat mui">
							Supprimer <i className="fas fa-trash-alt"></i>
						</button>
					</React.Fragment>
				)}
				{props.match.params.mode === "create" && (
					<React.Fragment>
						<button type="submit" className="mui-btn edit">
							Créer <i className="fas fa-plus"></i>
						</button>
					</React.Fragment>
				)}
			</form>
		</div>
	);
};

export default withRouter(_MenuForm);
