import Link from "~/components/elements/links/Link";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import Button from "../elements/buttons/Button";
import LinkDropMenu from "../elements/links/LinkDropMenu";
import Logo from "../elements/Logo";

// TODO Add scroll hiding

const linkMenu = [
	{
		link: {
			link: {
				title: "About",
				url: "/about",
				target: "",
			},
		},
	},
	{
		link: {
			link: {
				title: "Contact",
				url: "#",
				target: "",
			},
		},
	},
	{
		link: {
			link: {
				title: "Jobs",
				url: "#",
				target: "",
			},
		},
	},
];

export default function Header() {
	const { scrollY } = useScroll();
	const variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: -25 },
	};

	const [hidden, setHidden] = useState(false);

	function update() {
		if (scrollY?.current < scrollY?.prev) {
			setHidden(false);
		} else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
			setHidden(true);
		}
	}

	useEffect(() => scrollY.onChange(() => update()));

	return (
		<motion.nav
			id="header"
			className="fixed z-30 min-h-fit w-screen max-w-full bg-white py-7"
			variants={variants}
			animate={hidden ? "hidden" : "visible"}
			transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
		>
			<div className="container flex items-center justify-between ">
				<Link href="/" className="opacity-100">
					<Logo />
				</Link>

				<div className="flex">
					<LinkDropMenu links={linkMenu} title="Solutions" />
					<LinkDropMenu links={linkMenu} title="Platform" />
					<LinkDropMenu links={linkMenu} title="Resources" />
					<LinkDropMenu links={linkMenu} title="Company" />
				</div>

				<div className="flex">
					<Button
						type="button"
						className="mr-2"
						size="small"
						button={{ type: "text", color: "black" }}
					>
						Log in
					</Button>

					<Button size="small" button={{ type: "outline", color: "black" }}>
						Request a Demo
					</Button>
				</div>
			</div>
		</motion.nav>
	);
}
