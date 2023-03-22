import Image from "next/image";
import React, { useRef } from "react";
import {
	motion,
	useMotionValue,
	useScroll,
	useTransform,
	useVelocity,
	useSpring,
	useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});

	const x = useTransform(baseX, (v) => `${wrap(-0, -45, v)}%`);

	useAnimationFrame((t, delta) => {
		let moveBy = -baseVelocity * (delta / 1000);
		moveBy += moveBy * velocityFactor.get();
		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className=" relative m-0 my-12 flex flex-nowrap overflow-hidden whitespace-nowrap ">
			<div className=" absolute z-20 h-[50px] w-[20%]  bg-gradient-to-r from-white to-transparent" />
			<div className=" absolute right-0 z-20 h-[50px] w-[20%]  bg-gradient-to-r from-transparent  to-white" />
			<motion.div className="scroller" style={{ x }}>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
			</motion.div>
		</div>
	);
}

function ImageCarousel(props) {
	const { images = [], title = "" } = props;

	const imgs = images.map((image, i) => (
		<span className="relative mx-2">
			<Image
				key={image + i}
				layout="fixed"
				blurDataURL={image}
				src={image}
				alt=""
				objectFit="scale-down"
				height={50}
				width={110}
			/>
		</span>
	));

	return (
		<div className="flex flex-col justify-center ">
			{title && <h3 className=" body-large my-8 text-center">{title}</h3>}
			<ParallaxText baseVelocity={-1}>{imgs}</ParallaxText>
		</div>
	);
}

export default ImageCarousel;
