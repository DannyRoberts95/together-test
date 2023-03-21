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
		extend: {
			fontFamily: {
				archia: ["archia"],
				f37bolton: ["f37bolton"],
				sans: ["archia", "sans-serif"],
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
