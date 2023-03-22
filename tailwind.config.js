module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: (theme) => ({
			maxWidth: "100%",
			center: true,
			padding: {
				DEFAULT: theme("spacing.6"),
				lg: theme("spacing.12"),
			},
		}),
		colors: (theme) => ({
			...theme.colors,
			primary: "#F1F152",
		}),
		extend: {
			fontFamily: {
				archia: ["archia", "Courier New", "Courier", "monospace"],
				f37bolton: ["f37bolton"],
				sans: [
					"f37bolton",
					"Courier New",
					"Courier",
					"monospace",
					"sans-serif",
				],
			},
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
	],
};
