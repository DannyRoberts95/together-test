import Link from "~/components/elements/links/Link";
import React from "react";

export default function LinkColumn({ links, title = "" }) {
	return (
		<div>
			<p className="mb-4">{title}</p>

			{links?.map(({ link }, i) => {
				let classes = `my-2 ${links.length > 1 ? "w-full md:w-auto" : "opacity-50"}`;
				if (i !== 0) {
					classes += " opacity-50";
				}
				return (
					<div key={`linkgroupitem${i}`}>
						<Link {...link} className={classes} />
					</div>
				);
			})}
		</div>
	);
}
