import Image from "next/image";
import React, { useEffect, useRef } from "react";
import LinkGroup from "~/components/elements/links/LinkGroup";
import { motion, useInView, useAnimation } from "framer-motion";

function AnimatedText({ text, Tag = "p", ...others }) {
	const textRef = useRef(null);
	const inView = useInView(textRef, {
		threshold: 0.1,
		triggerOnce: true,
	});

	const ctrls = useAnimation();

	useEffect(() => {
		if (inView) {
			ctrls.start("visible");
		}
		if (!inView) {
			ctrls.start("hidden");
		}
	}, [ctrls, inView]);

	const words = text.split(" ");

	const animatedWords = words.map((word, i) => (
		<motion.span
			key={i + word}
			aria-hidden="true"
			initial="hidden"
			animate={ctrls}
			variants={{
				hidden: {
					opacity: 0.25,
				},
				visible: {
					opacity: 1,
					transition: {
						delay: i * 0.2,
						duration: 0.5,
						ease: "easeInOut",
					},
				},
			}}
		>{`${word} `}</motion.span>
	));

	return (
		<Tag ref={textRef} {...others}>
			{animatedWords}
		</Tag>
	);
}

export function TextCard(props) {
	const {
		subheading = "",
		heading = "",
		content = "",
		links = [],
		animateHeading = false,
		background_image = null,
		options: {
			fill_viewport = false,
			max_width = "max-w-2xl",
			vertical_padding = "py-32",
			text_alignment = "center",
			has_mobile_text_alignment = true,
			mobile_text_alignment = "center",
			section_alignment = "left",
			subheading_tag = "h6",
			subheading_font_size = "default",
			subheading_classes = "",
			heading_tag = "",
			heading_font_size = "default",
			heading_classes = "",
			heading_max_width = "",
			content_max_width = "",
			content_classes = "",
			custom_y_spacing = "",
			mobile_section_alignment = "",
			text_color = "black",
		} = {},
	} = props;

	const HeadingTag = heading_tag || "h2";
	const headingFontSize =
		heading_font_size === "default" ? HeadingTag : heading_font_size;

	const SubheadingTag = subheading_tag || "h6";
	const subheadingFontSize =
		subheading_font_size === "default" ? SubheadingTag : subheading_font_size;

	const ySpacings = {
		h1: "space-y-6",
		h2: "space-y-5",
		h3: "space-y-3",
	};

	const ySpacing =
		custom_y_spacing || ySpacings[headingFontSize] || "space-y-2";

	const flexItemAlignment =
		text_alignment === "center" ? "items-start md:items-center" : "items-start";

	const current_alignment = `text-${
		has_mobile_text_alignment ? mobile_text_alignment : text_alignment
	} text-left md:text-${text_alignment} ${max_width} `;

	let sectionAlignmentClasses = "items-start";
	if (section_alignment === "center") {
		sectionAlignmentClasses = "md:items-center";
	} else if (section_alignment === "right") {
		sectionAlignmentClasses = "items-end";
	}

	return (
		<div
			className={`relative flex  w-full flex-col ${mobile_section_alignment} ${sectionAlignmentClasses} ${
				fill_viewport ? "min-h-screen items-center justify-center" : ""
			} `}
		>
			{/* background image */}
			{background_image && (
				<div className="absolute top-[50%] left-[50%] h-full w-screen -translate-y-1/2 -translate-x-1/2 ">
					<Image
						layout="fill"
						priority
						objectFit="cover"
						objectPosition="center"
						src={background_image.src}
					/>
				</div>
			)}

			<div
				className={`text-${text_color} text-card z-20 flex flex-col ${
					fill_viewport ? " " : vertical_padding
				} ${flexItemAlignment} items-center ${ySpacing}
			${current_alignment} ${max_width}`}
			>
				{subheading && (
					<SubheadingTag
						className={`text-${subheadingFontSize} w-full ${
							subheading_classes || ""
						}`}
						dangerouslySetInnerHTML={{ __html: subheading }}
					/>
				)}
				{heading && !animateHeading && (
					<HeadingTag
						className={`w-full text-${headingFontSize}  ${
							heading_classes || ""
						} md:${heading_max_width}`}
						dangerouslySetInnerHTML={{
							__html: heading,
						}}
					/>
				)}

				{heading && animateHeading && (
					<AnimatedText
						text={heading}
						className={`w-full  text-${headingFontSize} ${
							heading_classes || ""
						} md:${heading_max_width}`}
					/>
				)}
				{content && (
					<div
						className={`md:body-large prose w-full ${
							content_classes || ""
						} md:${content_max_width || ""}`}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				)}
				{links?.length > 0 && links[0]?.link?.link?.url?.length > 0 && (
					<LinkGroup
						links={links}
						className={headingFontSize === "h1" ? "md:pt-4" : "pt-2"}
					/>
				)}
			</div>
		</div>
	);
}

export default TextCard;
