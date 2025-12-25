/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "400" }],
                sm: ["0.875rem", { lineHeight: "1.3", letterSpacing: "0.02em", fontWeight: "400" }],
                base: ["1rem", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "400" }],
                lg: ["1.125rem", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" }],
                xl: ["1.25rem", { lineHeight: "1.4", letterSpacing: "0em", fontWeight: "600" }],
                "2xl": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
                "3xl": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
                "4xl": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
                "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
                "6xl": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.05em", fontWeight: "800" }],
                "7xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.06em", fontWeight: "900" }],
                "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.07em", fontWeight: "900" }],
                "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.08em", fontWeight: "900" }],
            },
            fontFamily: {
                heading: ["work-sans-v2"],
                paragraph: ["work-sans-v2"]
            },
            colors: {
                "electric-purple": "#5A00FF",
                "hot-pink": "#5A00FF",
                "cyber-orange": "#6A8EFF",
                "neon-green": "#CFFF00",
                "electric-blue": "#6A8EFF",
                "sunset-yellow": "#5A00FF",
                "coral-red": "#6A8EFF",
                "mint-teal": "#6A8EFF",
                background: "#000000",
                foreground: "#FFFFFF",
                primary: "#000000",
                "primary-foreground": "#FFFFFF",
                secondary: "#5A00FF",
                "secondary-foreground": "#FFFFFF",
                destructive: "#DF3131",
                "destructive-foreground": "#ffffff",
                "neon-teal": "#6A8EFF",
                "deep-space-blue": "#000000",
                pastelpink: "#DDA0DD",
                softgray: "#D3D3D3"
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
