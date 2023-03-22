import Image from "next/image";
import React from "react";

// TODO Add hotspots

function FigureCard(props) {
	const { figure_src, hotspots = [] } = props;
	return (
		<div className="aspect-video asp relative w-full">
			<Image
				loading="lazy"
				placeholder="blur"
				blurDataURL={figure_src}
				src={figure_src}
				height={900}
				width={1600}
			/>
		</div>
	);
}

export default FigureCard;
