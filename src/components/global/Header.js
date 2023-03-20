import Link, { LinkTypeRenderer } from "~/components/elements/links/Link";
import React, { useContext } from "react";
import { GlobalContext } from "~/utils/context";
import Button from "../elements/buttons/Button";
import LinkDropMenu from "../elements/links/LinkDropMenu";
import Logo from "../elements/Logo";

// TODO Add scroll hiding

export default function Header() {
	// eslint-disable-next-line no-unused-vars
	const [context] = useContext(GlobalContext);

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

	return (
		<div id="header" className="min-h-fit max-w-full py-7">
			<div className="container flex items-center justify-between">
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
					<Button type="button" className="mr-2" size="small" button={{ type: "text", color: "black" }}>
						Log in
					</Button>

					<Button size="small" button={{ type: "outline", color: "black" }}>
						Request a Demo
					</Button>
				</div>
			</div>
		</div>
	);
}
