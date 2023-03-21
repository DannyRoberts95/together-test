import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

function ImageCarousel(props) {
	const { images = [], title = "" } = props;
	const scrollRef = useRef(null);

	// TODO ADD MOTION

	const imgs = images.map((image, i) => (
		<motion.span
			className="mx-4 text-4xl"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ root: scrollRef }}
			transition={{ ease: "easeIn", duration: 0.5 * i, delay: 0.5 * i - 0.5 }}
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
		<div className="flex flex-col items-center overflow-hidden">
			{title && <p className="text-h4 my-8">{title}</p>}
			<div
				ref={scrollRef}
				className="relative mt-12 flex w-full justify-between"
			>
				{imgs}
			</div>
		</div>
	);
}

export default ImageCarousel;
