import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
// eslint-disable-next-line import/no-extraneous-dependencies
import { wrap } from "@motionone/utils";

function ParallaxChildren({ children, baseVelocity = 100 }) {
	return (
		<div className="relative flex overflow-x-hidden">
			<div className="animate-marquee flex whitespace-nowrap py-12">
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
			</div>

			<div className="animate-marquee2 flex whitespace-nowrap py-12">
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
			</div>
		</div>
	);
}

function ImageCarousel(props) {
	const { images = [], title = "" } = props;

	// TODO ADD MOTION

	const imgs = images.map((image, i) => (
		<span className="mx-4 text-4xl">
			<Image key={(image, i)} layout="intrinsic" loading="lazy" blurDataURL={image} src={image} alt="" height={50} width={110} objectFit="contain" />
		</span>
	));

	return (
		<div className="flex flex-col items-center  overflow-hidden">
			{title && <p className="text-h4 my-8">{title}</p>}
			<div className="relative mt-12 flex w-full">{imgs}</div>
		</div>
	);
}

export default ImageCarousel;
