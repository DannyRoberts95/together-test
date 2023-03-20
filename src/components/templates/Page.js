import React from "react";
import { Layout } from "~/components/templates/Layout";
import { LayoutRenderer } from "~/components/layouts/LayoutRenderer";
import mockData from "mockData";

export default function Page(data) {
	const { page } = data;

	return (
		// WP CMS data replaced with mock data
		<Layout data={mockData}>
			<LayoutRenderer {...mockData} />
		</Layout>
	);
}
