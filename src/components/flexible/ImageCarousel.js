import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

function ImageCarousel(props) {
	const { images = [], title = "" } = props;
	const scrollRef = useRef(null);

	// TODO ADD MOTION

	const imgs = images.map((image, i) => (
		<motion.span
			className="mx-4"
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ root: scrollRef }}
			transition={{
				duration: 0.5 * i,
				delay: 0.25 * i - 0.25,
				ease: "easeInOut",
			}}
		>
			<Image
				key={image + i}
				layout="intrinsic"
				blurDataURL={image}
				src={image}
				alt=""
				height={50}
				width={110}
				objectFit="contain"
			/>
		</motion.span>
	));

	return (
		<div ref={scrollRef} className="flex flex-col items-center overflow-hidden">
			{title && <p className="body-large my-8 overflow-x-auto">{title}</p>}
			<div className="relative mt-12 flex">{imgs}</div>
		</div>
	);
}

export default ImageCarousel;
