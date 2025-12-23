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
                // Accent colors from new theme
                'electric-purple': '#83e4e6', // Cyan accent
                'hot-pink': '#5cbfa0', // Teal accent
                'cyber-orange': '#83e4e6', // Cyan accent
                'neon-green': '#5cbfa0', // Teal accent
                'electric-blue': '#83e4e6', // Cyan accent
                'sunset-yellow': '#5cbfa0', // Teal accent
                'coral-red': '#83e4e6', // Cyan accent
                'mint-teal': '#5cbfa0', // Teal accent
                
                // Theme colors - black and white with accent colors
                background: '#fafcfc', // Off-white background
                foreground: '#091411', // Dark charcoal foreground
                primary: '#0a0a0a', // Deep black primary
                'primary-foreground': '#fafcfc', // Off-white text on black
                secondary: '#83e4e6', // Cyan secondary
                'secondary-foreground': '#091411', // Dark text on cyan
                destructive: '#091411', // Dark destructive
                'destructive-foreground': '#fafcfc', // Off-white text
                
                // Legacy colors for compatibility
                'neon-teal': '#83e4e6',
                'deep-space-blue': '#091411'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
