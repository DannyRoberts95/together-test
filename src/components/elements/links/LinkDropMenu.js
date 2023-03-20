import React, { useCallback, useState } from "react";
import { ArrowDown } from "~/components/icons";
import { motion } from "framer-motion";
import Link from "~/components/elements/links/Link";

const animationStep = 0.25;

function LinkDropMenu({ title, links }) {
	const [open, setOpen] = useState(false);

	const handleOpen = useCallback(() => {
		setOpen(true);
	});

	const handleClose = useCallback(() => {
		setOpen(false);
	});

	return (
		<div className="relative mr-4" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
			<div className="flex p-2">
				<p>{title}</p>
				<motion.div animate={{ transform: `rotate(${open ? 180 : 0}deg)` }} transition={{ ease: "easeInOut", duration: 0.25 }}>
					<ArrowDown />
				</motion.div>
			</div>
			<motion.div
				animate={{ maxHeight: open ? 500 : 0 }}
				transition={{ ease: "easeIn", duration: animationStep }}
				className="absolute top-[calc(100%)] flex max-h-0 w-full min-w-[150px] flex-col overflow-hidden bg-white"
			>
				<div className="border-[1px]p-4">
					{links?.map(({ link }, i) => (
						<motion.div
							key={`linkdropdownitem${i}`}
							className="py-2"
							animate={{ opacity: open ? 1 : 0, left: open ? -150 : 0 }}
							transition={{ ease: "easeIn", duration: i * animationStep, delay: animationStep * 0.5 }}
						>
							<Link {...link} />
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
}

export default LinkDropMenu;
