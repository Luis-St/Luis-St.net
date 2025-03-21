import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				custom: {
					primary: "var(--custom-primary)",
					secondary: "var(--custom-secondary)",
					accent: {
						blue: "var(--custom-accent-blue)",
						green: "var(--custom-accent-green)",
						yellow: "var(--custom-accent-yellow)",
						orange: "var(--custom-accent-orange)",
						red: "var(--custom-accent-red)",
					},
					light: {
						blue: "var(--custom-light-blue)",
						gray: "var(--custom-light-gray)",
					},
					dark: {
						blue: "var(--custom-dark-blue)",
						green: "var(--custom-dark-green)",
						red: "var(--custom-dark-red)",
						gray: "var(--custom-dark-gray)",
					},
					blue: "var(--custom-blue)",
					green: "var(--custom-green)",
					yellow: "var(--custom-yellow)",
					orange: "var(--custom-orange)",
					red: "var(--custom-red)",
					gray: "var(--custom-gray)",
					anthracite: "var(--custom-anthracite)",
					white: {
						DEFAULT: "var(--custom-white)",
						primary: "var(--custom-white-primary)",
						secondary: "var(--custom-white-secondary)",
						tertiary: "var(--custom-white-tertiary)",
					},
					black: {
						DEFAULT: "var(--custom-black)",
						primary: "var(--custom-black-primary)",
						secondary: "var(--custom-black-secondary)",
						tertiary: "var(--custom-black-tertiary)",
					},
				},
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				chart: {
					"1": "var(--chart-1)",
					"2": "var(--chart-2)",
					"3": "var(--chart-3)",
					"4": "var(--chart-4)",
					"5": "var(--chart-5)",
				},
				sidebar: {
					DEFAULT: "var(--sidebar-background)",
					foreground: "var(--sidebar-foreground)",
					primary: "var(--sidebar-primary)",
					"primary-foreground": "var(--sidebar-primary-foreground)",
					accent: "var(--sidebar-accent)",
					"accent-foreground": "var(--sidebar-accent-foreground)",
					border: "var(--sidebar-border)",
					ring: "var(--sidebar-ring)",
				},
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				"collapsible-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-collapsible-content-height)",
					},
				},
				"collapsible-up": {
					from: {
						height: "var(--radix-collapsible-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"collapsible-down": "collapsible-down 0.4s ease",
				"collapsible-up": "collapsible-up 0.4s ease",
			},
			transitionDuration: {
				"400": "400ms",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
