import React from "react";

const Menu = () => {
	return (
		<div className="Menu">
			<h3 className="sub-title">La Carte</h3>
			<div className="menu menu-starters">
				<h4>Antipasti</h4>
				<table>
					<tbody>
						<tr>
							<th className="dish-name">Bruschetta</th>
							<td className="dish-description">
								Jambon de Parma, Tomates confites, Huile d'olive, Aïl
							</td>
							<td className="dish-price">8 €</td>
						</tr>
						<tr>
							<th className="dish-name">Salade Caprese</th>
							<td className="dish-description">
								Tomates biologiques, Mozzarella di Buffala, Feuilles de basilic
								fraîches
							</td>
							<td className="dish-price">12 €</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="menu menu-mains">
				<h4>Plats</h4>
				<table>
					<tbody>
						<tr>
							<th className="dish-name">La Pepperoni</th>
							<td className="dish-description">
								Pizza à base de sauce tomate, Mozzarella di Buffala, Basilic,
								Saucisse Pepperoni épicée, Tomates séchées
							</td>
							<td className="dish-price">17 €</td>
						</tr>
						<tr>
							<th className="dish-name">Pizza Margharita</th>
							<td className="dish-description">
								Pizza à base de sauce tomate, Mozzarella, Feuilles de Basilic
								fraîches
							</td>
							<td className="dish-price">14 €</td>
						</tr>
						<tr>
							<th className="dish-name">Escalope Milanaise</th>
							<td className="dish-description">
								Escalope de Veau, Sauce tomate, accompagnée de Pâtes
							</td>
							<td className="dish-price">19 €</td>
						</tr>
						<tr>
							<th className="dish-name">Spaghettis à la bolognaise</th>
							<td className="dish-description">
								Spaghettis fraîches, Sauce bolognaise au boeuf hâché
							</td>
							<td className="dish-price">16 €</td>
						</tr>
						<tr>
							<th className="dish-name">Lasagnes</th>
							<td className="dish-description">
								Lasagnes fraîches, Boeuf hâché, Lardons, Parmesan, Sauce
								Béchamel
							</td>
							<td className="dish-price">18 €</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="menu menu-deserts">
				<h4>Desserts</h4>

				<table>
					<tbody>
						<tr>
							<th className="dish-name">
								Tiramisu au café fort <span className="dish-price"> - 8 €</span>
							</th>
						</tr>

						<tr>
							<th className="dish-name">
								Napolitain <span className="dish-price"> - 10 €</span>
							</th>
						</tr>
						<tr>
							<th className="dish-name">
								Torta Caprese <span className="dish-price"> - 7 €</span>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Menu;
