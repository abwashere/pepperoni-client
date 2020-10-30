import React from "react";

const _About = () => {
	return (
		<div className="About flex-row sp-around">
			<div className="chef-image"></div>
			<div className="chef-presentation">
				<h2 className="sub-title">Le mot du Chef</h2>
				<p className="citation">
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime
					quidem voluptate nihil nisi. Perspiciatis voluptatum delectus omnis,
					et veritatis distinctio quis non cupiditate nesciunt, molestiae rerum
					maxime voluptas. <br /> Grazie."
				</p>
				<p className="chef-signature">Toni 'Peppe' Mattarella</p>
			</div>
		</div>
	);
};

export default _About;
