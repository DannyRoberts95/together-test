import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
/**
 * Button
 */
export function Button({
	link,
	button,
	size,
	className = "",
	children,
	...other
}) {
	const [hovered, setHovered] = useState(null);

	const handleHover = () => {
		!button.disableAnimation && setHovered(true);
	};
	const handleLeave = () => {
		!button.disableAnimation && setHovered(false);
	};

	let typeClasses = `${className} whitespace-nowrap	 text-white trans border border-inherit select-none appearance-none`;

	if (size === "small") {
		typeClasses += " inline-block rounded text-13px px-5 py-2 font-medium";
	} else if (size === "wide") {
		typeClasses +=
			" block rounded-[100px] text-16px px-7 py-5 leading-[1.3] text-center font-bold";
	} else if (size === "huge") {
		typeClasses +=
			" w-full rounded-[100px] text-16px  py-5 px-5 font-bold cursor-pointer text-center";
	} else {
		typeClasses +=
			" inline-block rounded text-16px px-7 py-3 leading-[1.3] font-medium";
	}

	if (button?.type === "text") {
		typeClasses += " bg-transparent border-none";
		if (button?.color === "white") {
			typeClasses +=
				" text-white hover:border-2 hover:border-red-500 hover:text-black";
		}
		if (button?.color === "black") {
			typeClasses += " text-black hover:border-grey-500";
		}
	} else if (button?.type === "outline") {
		typeClasses += " bg-transparent border";
		if (button?.color === "white") {
			typeClasses += " border-white hover:bg-white hover:text-black";
		}

		if (button?.color === "black") {
			typeClasses += " border-black text-black hover:bg-black hover:text-white";
		}
	} else if (button?.type === "contained") {
		typeClasses +=
			" bg-primary border-primary text-black border-2 hover:bg-white";
	}

	return link?.title ? (
		<motion.div
			animate={{ scale: hovered ? 1.05 : 1 }}
			transition={{ ease: "easeInOut" }}
			onMouseEnter={handleHover}
			onMouseLeave={handleLeave}
			className={typeClasses}
			{...other}
			dangerouslySetInnerHTML={{ __html: link?.title }}
		/>
	) : (
		<motion.div
			animate={{ scale: hovered ? 1.05 : 1 }}
			onMouseEnter={handleHover}
			onMouseLeave={handleLeave}
			className={typeClasses}
			{...other}
		>
			{children}
		</motion.div>
	);
}

export default Button;

/**
 * Text Link
 */
const TextLinkStyled = styled.div``;
export function TextLink({
	className = "",
	link,
	children,
	underlineColour = "black",
}) {
	return (
		<TextLinkStyled
			className={`text-16px group inline-flex cursor-pointer select-none items-center leading-tight ${className}`}
		>
			{(link?.title || children) && (
				<div className="group-hover:text-orange inline-block text-inherit">
					{link?.title && (
						<span dangerouslySetInnerHTML={{ __html: link?.title }} />
					)}
					{!link?.title && children && children}
				</div>
			)}
		</TextLinkStyled>
	);
}
