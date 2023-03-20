import Image from "next/image";
import React from "react";

function FigureCard(props) {
	console.log("FIGURE", props);
	const { figure_src, hotspots = [] } = props;
	return (
		<div className="aspect-video w-full border-2 border-red-500">
			<Image src={figure_src} height={900} width={1600} />
		</div>
	);
}

export default FigureCard;
