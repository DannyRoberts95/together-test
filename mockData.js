const mockSections = [
	{
		acf_fc_layout: "section",
		components: [
			// ******************
			// MASTHEAD
			// ******************

			{
				acf_fc_layout: "text_card",
				acfe_flexible_toggle: "",
				text_card: {
					background_image: {
						src: "/images/backgrounds/background_01.jpg",
						alt: false,
					},
					subheading: "",

					heading: "One platform powering \n better information.",
					content:
						"<p>Hawk empowers Public Safety agencies to make mission-critical decisions in real-time.\n",
					links: [
						{
							link: {
								link: {
									title: "Get Started",
									url: "/resources/",
									target: "",
								},
								type: "button",
								button: {
									"": null,
									type: "contained",
									background_color: "primary",
								},
							},
						},
					],
					options: {
						max_width: "max-w-4xl",
						section_max_width: "",
						section_alignment: "center",
						text_alignment: "center",
						mobile_text_alignment: "center",
						has_mobile_text_alignment: false,
						subheading_tag: "h6",
						subheading_font_size: "default",
						subheading_classes: "",
						heading_classes: "text-4xl text-red-500",
						heading_tag: "h1",
						heading_font_size: "default",
						content_classes: "max-w-xl",
					},
				},
			},

			// ******************
			// IMAGE
			// ******************

			{
				acf_fc_layout: "figure_card",
				acfe_flexible_toggle: "",
				figure_card: {
					figure_src: "/images/illustrations/image_00.png",
					hotspots: [
						{ x: "50%", y: "45%" },
						{ x: "20%", y: "80%" },
						{ x: "70%", y: "25%" },
					],
				},
			},
			// ******************
			// PARTNERS
			// ******************
			{
				acf_fc_layout: "image_carousel",
				acfe_flexible_toggle: "",
				image_carousel: {
					title: "Trusted by global organizations",
					images: [
						"/images/partners/00.png",
						"/images/partners/01.png",
						"/images/partners/02.png",
					],
				},
			},

			// ******************
			// ACCORDIANS
			// ******************

			{
				acf_fc_layout: "section_accordian",
				acfe_flexible_toggle: "",
				section_carousel: {
					title: "Trusted by global organizations",
					sections: [
						{
							subheading: "Visualise",
							heading: "Never Miss a Thing.",
							content:
								"<p>Hawk empowers Public Safety agencies to make mission-critical decisions in real-time.\n",
							image: "/images/illustrations/image_05.png",
							links: [
								{
									link: {
										link: {
											title: "Get Started",
											url: "/resources/",
											target: "",
										},
										type: "text",
										button: {
											"": null,
											type: "default",
											background_color: "white",
										},
									},
								},
							],
						},
						{
							image: "/images/illustrations/image_03.png",
							subheading: "Collaborate",
							heading: "Access real-time information.",
							content:
								"<p>Ensure first responders are on the same page with real-time alerts and instant access to information. Eliminate silos and work effectively as a team.\n",
						},
						{
							image: "/images/illustrations/image_04.png",
							subheading: "Respond",
							heading: "Respond faster & more efficiently",
							content:
								"<p>Develop smarter strategies and make better decisions. Save lives and protect communities.\n",
						},
					],
				},
			},
			// ******************
			// ANIMATED TEXT
			// ******************
			{
				acf_fc_layout: "text_card",
				acfe_flexible_toggle: "",
				text_card: {
					subheading: "Our Mission",
					heading:
						"We’re empowering the world’s most important organizations to transform Public Safety, protect civil liberties & ensure personal freedom.",
					animateHeading: true,
					background_image: {
						src: "/images/backgrounds/background_01.jpg",
						alt: false,
					},
					links: [
						{
							link: {
								link: {
									title: "Learn More",
									url: "https://www.danhowarddesign.com",
									target: "_blank",
								},
								type: "text",
							},
						},
					],

					options: {
						section_alignment: "center",
						text_alignment: "left",
						has_mobile_text_alignment: false,
						mobile_text_alignment: "left",
						subheading_tag: "h4",
						subheading_font_size: "default",
						subheading_classes: "",
						heading_tag: "h2",
						heading_font_size: "default",

						vertical_padding: "my-24",
						section_max_width: "",
						max_width: "max-w-2xl",
						heading_classes: "",
						content_max_width: "",
						content_classes: "",
					},
				},
			},
			// ******************
			// CTA
			// ******************
			{
				acf_fc_layout: "text_card",
				acfe_flexible_toggle: "",
				text_card: {
					background_image: {
						src: "/images/backgrounds/background_00.jpg",
						alt: false,
					},
					subheading: "",
					heading: "Achieve breakthrough moments.",
					content: "",
					links: [
						{
							link: {
								link: {
									title: "Get Started",
									url: "#",
									target: "",
								},
								type: "button",
								button: {
									type: "contained",
								},
							},
						},
					],
					options: {
						max_width: "max-w-4xl",
						fill_viewport: true,
						section_alignment: "center",
						text_alignment: "center",
						has_mobile_text_alignment: false,

						mobile_text_alignment: "left",

						text_color: "white",
						subheading_tag: "h6",
						heading_tag: "h1",
					},
				},
			},
		],

		id: "",
		classnames: "",
		padding_top: "medium",
		padding_bottom: "medium",
		inner_spacing: "medium",
		has_container: true,
		overflow: false,

		background: {
			background_color: "white",
			background_asset: {
				type: "image",
				image: false,
				lottie: {
					animation: false,
					custom: false,
					loop: false,
				},
				multiple: false,
			},
		},

		is_rounded: false,
		rounded_options: {
			inner_background_color: false,
			inner_padding_top: "small",
			inner_padding_bottom: "small",
			has_inner_container: true,
		},
	},
];

export default {
	ID: 5,
	post_author: "2",
	post_date: "2022-12-08 19:02:27",
	post_date_gmt: "2022-12-08 19:02:27",
	post_content: "",
	post_title: "Home",
	post_excerpt: "",
	post_status: "publish",
	comment_status: "closed",
	ping_status: "closed",
	post_password: "",
	post_name: "home",
	to_ping: "",
	pinged: "",
	post_modified: "2022-12-08 19:13:30",
	post_modified_gmt: "2022-12-08 19:13:30",
	post_content_filtered: "",
	post_parent: 0,
	guid: "https://nextwptemplate.wpengine.com/?page_id=5",
	menu_order: 0,
	post_type: "page",
	post_mime_type: "",
	comment_count: "0",
	filter: "raw",
	url: "https://localhost:3000/",
	sections: mockSections,
	seo: {
		title: "Home",
		description: "",
		image: "",
		indexable: "0",
	},
	featured_image: {
		src: "",
		width: 760,
		height: 460,
		alt: false,
	},
};
