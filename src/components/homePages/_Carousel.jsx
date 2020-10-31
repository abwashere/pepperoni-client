import React from "react";

import Carousel from "react-bootstrap/Carousel";

import pic1 from "./../../assets/img/restaurant/restau-1.jpg";
import pic2 from "./../../assets/img/restaurant/restau-2.jpg";
import pic3 from "./../../assets/img/restaurant/restau-3.jpg";
import pic4 from "./../../assets/img/restaurant/restau-4.jpg";
import pic5 from "./../../assets/img/restaurant/restau-5.jpg";
import pic6 from "./../../assets/img/restaurant/restau-6.jpg";

const carouselImages = [
	{ url: pic1, alt: "Le Bar" },
	{ url: pic2, alt: "La Cuisine" },
	{ url: pic3, alt: "La Salle" },
	{ url: pic4, alt: "La Salle" },
	{ url: pic5, alt: "La Salle" },
	{ url: pic6, alt: "La Terrasse" },
];

const _Carousel = () => {
	const [index, setIndex] = React.useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="Carousel">
			{carouselImages.map((img, index) => (
				<Carousel.Item interval={5000} key={index}>
					<img
						className="d-block w-9 carousel-pic"
						src={img.url}
						alt={img.alt}
					/>
					<Carousel.Caption>
						<p>{img.alt}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default _Carousel;
