const mockSections = [
	{
		acf_fc_layout: "section",
		components: [
			{
				acf_fc_layout: "text_card",
				acfe_flexible_toggle: "",
				text_card: {
					subheading: "",
					heading: "One platform powering \n better information.",
					content: "<p>Hawk empowers Public Safety agencies to make mission-critical decisions in real-time.\n",
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
									type: "default",
									background_color: "white",
								},
							},
						},
					],
					options: {
						section_max_width: "",
						section_alignment: "center",
						text_alignment: "center",
						// TODO FIX MOBILE ALIGNMENT
						has_mobile_text_alignment: false,
						mobile_text_alignment: "left",
						subheading_tag: "h6",
						subheading_font_size: "default",
						subheading_classes: "",
						heading_tag: "h1",
						heading_font_size: "default",

						heading_classes: "max-w-2xl",
						content_max_width: "max-w-lg",
						content_classes: "",
					},
				},
			},
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
			{
				acf_fc_layout: "image_carousel",
				acfe_flexible_toggle: "",
				figure_card: {
					title: "Trusted by global organizations",
					images: [
						"/images/partners/00.png",
						"/images/partners/01.png",
						"/images/partners/02.png",
						"/images/partners/00.png",
						"/images/partners/01.png",
						"/images/partners/02.png",
						"/images/partners/00.png",
						"/images/partners/01.png",
						"/images/partners/02.png",
					],
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
