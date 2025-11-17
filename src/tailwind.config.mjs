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
                heading: "space grotesk",
                paragraph: "azeret-mono"
            },
            colors: {
                // Vibrant primary colors
                'electric-purple': '#8B5CF6',
                'hot-pink': '#EC4899',
                'cyber-orange': '#F97316',
                'neon-green': '#10B981',
                'electric-blue': '#3B82F6',
                'sunset-yellow': '#F59E0B',
                'coral-red': '#EF4444',
                'mint-teal': '#14B8A6',
                
                // Theme colors with vibrant updates
                background: '#0F0F23', // Deep purple-blue background
                foreground: '#FFFFFF',
                primary: '#8B5CF6', // Electric purple
                'primary-foreground': '#FFFFFF',
                secondary: '#EC4899', // Hot pink
                'secondary-foreground': '#FFFFFF',
                destructive: '#EF4444',
                'destructive-foreground': '#FFFFFF',
                
                // Legacy colors for compatibility
                'neon-teal': '#14B8A6',
                'deep-space-blue': '#0F0F23'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
