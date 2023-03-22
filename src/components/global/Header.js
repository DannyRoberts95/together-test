import Link from "~/components/elements/links/Link";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Menu } from "~/components/icons";
import Button from "../elements/buttons/Button";
import LinkDropMenu from "../elements/links/LinkDropMenu";
import Logo from "../elements/Logo";

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

	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleToggleDrawer = () => setDrawerOpen(!drawerOpen);

	function update() {
		if (scrollY?.current < scrollY?.prev) {
			setHidden(false);
		} else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
			setHidden(true);
		}
	}

	useEffect(() => scrollY.onChange(() => update()));

	const drawer = (
		<>
			<div className="container flex items-center  justify-between sm:hidden ">
				<Link href="/" className="opacity-100">
					<Logo />
				</Link>

				<motion.span
					animate={{ transform: `rotate(${drawerOpen ? 90 : 0}deg)` }}
				>
					<Menu onClick={handleToggleDrawer} />
				</motion.span>
			</div>

			<motion.div
				id="navDrawer"
				className={`fixed left-0 h-screen w-screen bg-white ${
					drawerOpen ? "block" : "hidden"
				}`}
				initial={{ opacity: drawerOpen ? 1 : 0 }}
				animate={{
					opacity: drawerOpen ? 1 : 0,
					left: drawerOpen ? 0 : 0,
				}}
			>
				<div className="container overflow-y-scroll p-4">
					<LinkDropMenu expanded links={linkMenu} title="Solutions" />
					<LinkDropMenu expanded links={linkMenu} title="Platform" />
					<LinkDropMenu expanded links={linkMenu} title="Resources" />
					<LinkDropMenu expanded links={linkMenu} title="Company" />
					<hr className="my-4" />

					<div className="flex">
						<Button
							type="button"
							className="mr-2"
							size="small"
							button={{ type: "text", color: "black", disableAnimation: true }}
						>
							Log in
						</Button>

						<Button
							button={{
								type: "contained",
								color: "black",
								disableAnimation: true,
							}}
						>
							Request a Demo
						</Button>
					</div>
				</div>
			</motion.div>
		</>
	);

	const tabs = (
		<div className="container hidden items-center  justify-between sm:flex ">
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
	);

	return (
		<motion.nav
			id="header"
			className="fixed top-0 z-30 min-h-fit w-screen max-w-full bg-white py-7"
			variants={variants}
			animate={hidden ? "hidden" : "visible"}
			transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
		>
			{tabs}
			{drawer}
		</motion.nav>
	);
}
