import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TextCard from "../elements/text/TextCard";

function Accordion(props) {
	const { open, section = {} } = props;
	return (
		<div div className="w-full border-t-[1px] py-2">
			<p className="body-large my-2">{section.subheading}</p>
			<motion.div
				initial="collapsed"
				exit="collapsed"
				animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
				transition={{ duration: 1, ease: "anticipate" }}
			>
				<TextCard
					{...section}
					subheading=""
					options={{
						section_max_width: "",
						subheading_tag: "h6",
						subheading_font_size: "default",
						subheading_classes: "mb-2",
						heading_tag: "h3",
						content_classes: "opacity-50",
						vertical_padding: "py-12",

						text_alignment: "left",
						has_mobile_text_alignment: false,
					}}
				/>
			</motion.div>
		</div>
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

	const mobile = (
		<div className="relative mb-12 p-8 md:hidden">
			<div className="flex flex-col gap-y-8">
				{sections.map((section, i) => (
					<>
						<AccordianImage
							i={i}
							src={section.image}
							key={`${section.subheading}accordianImage`}
							handleEnterView={() => setExpanded(i)}
						/>
						<Accordion section={section} open setExpanded={setExpanded} />
					</>
				))}
			</div>
		</div>
	);

	const desktop = (
		<div className=" relative mb-12 hidden min-h-[75vh] grid-cols-2 gap-24 p-16 md:grid">
			{/* images */}
			<div className="flex flex-col gap-y-8 ">
				{sections.map((section, i) => (
					<AccordianImage
						open={i === expanded}
						src={section.image}
						key={`${section.subheading}accordianImage`}
						handleEnterView={() => setExpanded(i)}
					/>
				))}
			</div>

			{/* accordian */}
			<motion.div
				className="sticky top-[25%] h-fit "
				animate={{ opacity: expanded == null ? 0 : 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			>
				{sections.map((section, i) => (
					<Accordion
						section={section}
						open={expanded === i}
						setExpanded={setExpanded}
					/>
				))}
			</motion.div>
		</div>
	);

	return (
		<div className="flex flex-col items-center ">
			{mobile}
			{desktop}
		</div>
	);
}

export default SectionAccordian;
