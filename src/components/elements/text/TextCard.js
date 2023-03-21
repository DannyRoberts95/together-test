import Image from "next/image";
import React from "react";
import LinkGroup from "~/components/elements/links/LinkGroup";

export function TextCard(props) {
	const {
		subheading = "",
		heading = "",
		content = "",
		links = [],
		background_image = null,
		options: {
			max_width = "",
			vertical_padding = "py-24",
			text_alignment = "",
			has_mobile_text_alignment = false,
			mobile_text_alignment = "",
			section_alignment = "",
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
		} = {},
	} = props;

	console.log("background_image", background_image);

	const HeadingTag = heading_tag || "h2";
	const headingFontSize = heading_font_size === "default" ? HeadingTag : heading_font_size;

	const SubheadingTag = subheading_tag || "h6";
	const subheadingFontSize = subheading_font_size === "default" ? SubheadingTag : subheading_font_size;

	const ySpacings = {
		h1: "space-y-6",
		h2: "space-y-5",
		h3: "space-y-3",
	};

	const ySpacing = custom_y_spacing || ySpacings[headingFontSize] || "space-y-2";

	const flexItemAlignment = text_alignment === "center" ? "items-center" : "items-start";

	let sectionAlignmentClasses = "items-start";
	if (section_alignment === "center") {
		sectionAlignmentClasses = "md:items-center";
	} else if (section_alignment === "right") {
		sectionAlignmentClasses = "items-end";
	}

	return (
		<div className={`relative flex w-full flex-col ${mobile_section_alignment} ${sectionAlignmentClasses} `}>
			{/* background image */}
			{background_image && (
				<div className="absolute top-0 left-0 h-full w-full ">
					<Image layout="fill" priority objectFit="cover" objectPosition="top center" src={background_image.src} />
				</div>
			)}

			<div
				className={`text-card z-20 flex flex-col ${vertical_padding} ${flexItemAlignment} ${ySpacing} text-${
					has_mobile_text_alignment ? mobile_text_alignment : text_alignment
				} md:text-${text_alignment} md:${max_width}`}
			>
				{subheading && (
					<SubheadingTag className={`text-${subheadingFontSize} w-full ${subheading_classes || ""}`} dangerouslySetInnerHTML={{ __html: subheading }} />
				)}
				{heading && (
					<HeadingTag
						className={`w-full text-${headingFontSize} ${heading_classes || ""} md:${heading_max_width}`}
						dangerouslySetInnerHTML={{
							__html: heading,
						}}
					/>
				)}
				{content && <div className={`prose w-full ${content_classes || ""} md:${content_max_width || ""}`} dangerouslySetInnerHTML={{ __html: content }} />}
				{links?.length > 0 && links[0]?.link?.link?.url?.length > 0 && <LinkGroup links={links} className={headingFontSize === "h1" ? "md:pt-4" : "pt-2"} />}
			</div>
		</div>
	);
}

export default TextCard;
