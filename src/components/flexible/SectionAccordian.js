import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TextCard from "../elements/text/TextCard";

function Accordion(props) {
	const { i, expanded, section = {} } = props;
	const open = i === expanded;

	return (
		<>
			<h3 className="text-h4 my-2">{section.subheading}</h3>
			<motion.div
				initial="collapsed"
				exit="collapsed"
				animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className="pl-4"
			>
				<TextCard
					{...section}
					subheading=""
					options={{
						section_max_width: "",
						subheading_tag: "h6",
						subheading_font_size: "default",
						subheading_classes: "mb-4",
						heading_tag: "h3",
						content_classes: "opacity-50",
						vertical_padding: "py-12",
					}}
				/>
			</motion.div>
		</>
	);
}

function AccordianImage(props) {
	const { src, handleEnterView, ...others } = props;
	const ref = useRef(null);
	const isVisible = useInView(ref);

	useEffect(() => {
		if (isVisible) {
			handleEnterView();
		}
	}, [isVisible, handleEnterView]);

	return (
		<motion.div
			initial={{ opacity: 0, left: "100%", transform: `scale(0.5)` }}
			whileInView={{ opacity: 1, transform: `scale(1)` }}
			transition={{ duration: 1, ease: "easeInOut" }}
			{...others}
			ref={ref}
		>
			<Image
				src={src}
				alt="A description of the image."
				width="800"
				height="1200"
				loading="lazy"
				blurDataURL={src}
				placeholder="blur"
				objectFit="cover"
			/>
		</motion.div>
	);
}

function SectionAccordian(props) {
	const { sections = [] } = props;
	const [expanded, setExpanded] = useState(0);
	const parentRef = useRef(null);

	return (
		<div className="center flex flex-col items-center">
			<div
				ref={parentRef}
				className="relative mb-12 grid min-h-[100vh] grid-cols-2 gap-24 p-8"
			>
				{/* column */}
				<motion.div
					className=" sticky top-[25%] h-fit "
					// className=" sticky top-[50%] h-fit translate-y-[-50%]"
					animate={{ opacity: expanded == null ? 0 : 1 }}
					transition={{ duration: 1, ease: "easeInOut" }}
				>
					{/* accordian */}
					{sections.map((section, i) => (
						<Accordion
							i={i}
							section={section}
							expanded={expanded}
							setExpanded={setExpanded}
						/>
					))}
				</motion.div>

				<div className="flex flex-col gap-y-8">
					{sections.map((section, i) => (
						<AccordianImage
							i={i}
							src={section.image}
							key={`${section.subheading}accordianImage`}
							handleEnterView={() => setExpanded(i)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default SectionAccordian;
