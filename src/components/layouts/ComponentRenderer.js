import React from "react";
import { LayoutGroup } from "framer-motion";
import { TextCard } from "~/components/elements/text/TextCard";
import FigureCard from "../flexible/FigureCard";
import ImageCarousel from "../flexible/ImageCarousel";
import SectionAccordian from "../flexible/SectionAccordian";

export function ComponentRenderer({ components = [], pageId = null }) {
	return (
		<LayoutGroup>
			{/* <pre>{JSON.stringify(components, null, 4)}</pre> */}
			{components.map((layout, i) => {
				const layoutName = layout.acf_fc_layout;
				return (
					<React.Fragment key={pageId + layoutName + i}>
						{layoutName === "text_card" && <TextCard {...layout.text_card} />}
						{layoutName === "figure_card" && <FigureCard {...layout.figure_card} />}
						{layoutName === "image_carousel" && <ImageCarousel {...layout.image_carousel} />}
						{layoutName === "section_accordian" && <SectionAccordian {...layout.section_carousel} />}
					</React.Fragment>
				);
			})}
		</LayoutGroup>
	);
}

export default ComponentRenderer;
