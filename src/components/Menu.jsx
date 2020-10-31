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
						</tr>
						<tr>
							<th className="dish-name">Salade Caprese</th>
							<td className="dish-description">
								Tomates biologiques, Mozzarella di Buffala, Feuilles de basilic
								fraîches
							</td>
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
						</tr>
						<tr>
							<th className="dish-name">Pizza Margharita</th>
							<td className="dish-description">
								Pizza à base de sauce tomate, Mozzarella, Feuilles de Basilic
								fraîches
							</td>
						</tr>
						<tr>
							<th className="dish-name">Escalope Milanaise</th>
							<td className="dish-description">
								Escalope de Veau, Sauce tomate, accompagnée de Pâtes
							</td>
						</tr>
						<tr>
							<th className="dish-name">Spaghettis à la bolognaise</th>
							<td className="dish-description">
								Spaghettis fraîches, Sauce bolognaise au boeuf hâché
							</td>
						</tr>
						<tr>
							<th className="dish-name">Lasagnes</th>
							<td className="dish-description">
								Lasagnes fraîches, Boeuf hâché, Lardons, Parmesan, Sauce
								Béchamel
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="menu menu-deserts">
				<h4>Desserts</h4>
				<table>
					<tbody>
						<tr>
							<th className="dish-name">Tiramisu au café fort</th>
						</tr>
						<tr>
							<th className="dish-name">Napolitain</th>
						</tr>
						<tr>
							<th className="dish-name">Torta Caprese</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Menu;
