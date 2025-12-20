/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.05em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '0.05em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.75', letterSpacing: '0.05em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '2', letterSpacing: '0.05em', fontWeight: '500' }],
                '3xl': ['1.875rem', { lineHeight: '2.25', letterSpacing: '0.05em', fontWeight: '600' }],
                '4xl': ['2.25rem', { lineHeight: '2.5', letterSpacing: '0.05em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '700' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '700' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "'Bookman Old Style', serif",
                paragraph: "'Bookman Old Style', serif"
            },
            colors: {
                // Black and white theme
                'electric-purple': '#000000',
                'hot-pink': '#000000',
                'cyber-orange': '#000000',
                'neon-green': '#000000',
                'electric-blue': '#000000',
                'sunset-yellow': '#000000',
                'coral-red': '#000000',
                'mint-teal': '#000000',
                
                // Theme colors - black and white only
                background: '#FFFFFF', // White background
                foreground: '#000000', // Black foreground
                primary: '#000000', // Black primary
                'primary-foreground': '#FFFFFF', // White text on black
                secondary: '#FFFFFF', // White secondary
                'secondary-foreground': '#000000', // Black text on white
                destructive: '#000000', // Black
                'destructive-foreground': '#FFFFFF', // White text
                
                // Legacy colors for compatibility
                'neon-teal': '#000000',
                'deep-space-blue': '#FFFFFF'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
