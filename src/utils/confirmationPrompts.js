export const confirmDelete = (elementName, callback) => {
	console.log("Trying to delete =>", elementName);
	let checkDelete = prompt(
		`Etes-vous sûr(e) de vouloir supprimer ${elementName} ? \nSi oui, entrez "o".`,
		"non"
	);
	checkDelete !== null && checkDelete.toLowerCase() === "o"
		? callback() // function handling delete after confirmation
		: console.log("Abort delete");
};

export const confirmCancel = (callback) => {
	let checkCancel = prompt(
		'Etes-vous sûr(e) de vouloir annuler ? \nSi oui, entrez "o".',
		"non"
	);
	checkCancel !== null && checkCancel.toLowerCase() === "o"
		? callback() // function handling delete after confirmation
		: console.log("Abort delete");
};
