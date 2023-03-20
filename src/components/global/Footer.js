import Link from "~/components/elements/links/Link";
import React from "react";
import Logo from "../elements/Logo";
import LinkColumn from "../elements/links/LinkColumn";
import { Instagram, LinkedIn, Twitter } from "../icons";

export default function Footer() {
	const links = [
		{
			link: {
				link: {
					title: "Dan Howard",
					url: "https://www.danhowarddesign.com/",
					target: "_blank",
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
	const socialLinks = [
		{
			link: {
				link: {
					title: "LinkedIn",
					url: "#",
					target: "",
					startIcon: <LinkedIn />,
				},
			},
		},
		{
			link: {
				link: {
					title: "Instagram",
					url: "#",
					target: "",
					startIcon: <Instagram />,
				},
			},
		},
		{
			link: {
				link: {
					title: "Twitter",
					url: "#",
					target: "",
					startIcon: <Twitter />,
				},
			},
		},
	];

	return (
		<div id="footer" className="min-h-fit max-w-full py-7">
			<div className="container flex flex-col ">
				{/* logo row */}
				<div className="my-12">
					<Link href="/" className="opacity-100">
						<Logo />
					</Link>
				</div>

				{/* row one */}
				<div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
					<LinkColumn links={links} title="Solutions" />
					<LinkColumn links={socialLinks} title="Socials" />
					<LinkColumn links={links} title="Resources" />
					<LinkColumn links={links} title="Company" />
				</div>

				{/* row two */}
				<div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
					<LinkColumn links={links} />
					<LinkColumn links={links} />
					<LinkColumn links={links} />
					<LinkColumn links={links} />
				</div>

				<div className="my-12">
					<p className="text-grey-500 text-xs">© 2022 Hawk. All rights reserved</p>
				</div>
			</div>
		</div>
	);
}
