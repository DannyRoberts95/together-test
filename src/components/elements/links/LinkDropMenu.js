import React, { useCallback, useState } from "react";
import { ArrowDown } from "~/components/icons";
import { motion } from "framer-motion";
import Link from "~/components/elements/links/Link";

const animationStep = 0.25;

function LinkDropMenu({ title, links, expanded = false }) {
	const [open, setOpen] = useState(false);

	const handleOpen = useCallback(() => {
		setOpen(true);
	});

	const handleClose = useCallback(() => {
		setOpen(false);
	});

	const menuList = (
		<motion.div
			animate={{ maxHeight: open ? 500 : 0 }}
			transition={{ ease: "easeInOut", duration: animationStep }}
			className="absolute top-[calc(100%)] flex max-h-0 w-full min-w-[150px] flex-col overflow-hidden bg-white"
		>
			<div className="rounded  border-[1px] p-4">
				{links?.map(({ link }, i) => (
					<motion.div
						key={`linkdropdownitem${i + link}`}
						className="py-1"
						animate={{ opacity: open ? 1 : 0, left: open ? -150 : 0 }}
						transition={{
							ease: "easeInOut",
							duration: i * animationStep,
							delay: animationStep * 0.5,
						}}
					>
						<Link {...link} />
					</motion.div>
				))}
			</div>
		</motion.div>
	);

	const expandedMenuList = (
		<div className=" pl-4">
			{links?.map(({ link }, i) => (
				<Link
					key={link.toString() + i}
					className="my-1"
					onClick={handleClose}
					{...link}
				/>
			))}
		</div>
	);

	return (
		<div
			className="relative mr-4"
			onMouseEnter={handleOpen}
			onMouseLeave={handleClose}
		>
			<div className=" flex items-center p-1">
				<p className="text-h4">{title}</p>
				{!expanded && (
					<motion.div
						animate={{ transform: `rotate(${open ? 180 : 0}deg)` }}
						transition={{ ease: "easeInOut", duration: 0.25 }}
					>
						<ArrowDown />
					</motion.div>
				)}
			</div>
			{expanded ? expandedMenuList : menuList}
		</div>
	);
}

export default LinkDropMenu;
