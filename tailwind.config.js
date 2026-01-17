/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-800
        primary: {
          DEFAULT: 'var(--color-primary)', // blue-900
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // blue-700
          foreground: 'var(--color-secondary-foreground)', // white
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // amber-600
          foreground: 'var(--color-accent-foreground)', // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-600
          foreground: 'var(--color-destructive-foreground)', // white
        },
        success: {
          DEFAULT: 'var(--color-success)', // emerald-600
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-600
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)', // gray-500
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)', // gray-800
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // gray-800
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)', // 6px
        md: 'var(--radius-md)', // 12px
        lg: 'var(--radius-lg)', // 18px
        xl: 'var(--radius-xl)', // 24px
      },
      fontFamily: {
        heading: ['Crimson Text', 'Georgia', 'serif'],
        body: ['Source Sans 3', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        caption: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '1.2' }],
        'h2': ['1.875rem', { lineHeight: '1.25' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'h5': ['1.125rem', { lineHeight: '1.5' }],
        'caption': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
      },
      boxShadow: {
        'sm': '0 1px 3px var(--shadow-color)',
        'DEFAULT': '0 2px 6px var(--shadow-color-md)',
        'md': '0 4px 12px var(--shadow-color-md)',
        'lg': '0 8px 24px var(--shadow-color-lg)',
        'xl': '0 20px 40px -8px var(--shadow-color-lg)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      zIndex: {
        '900': '900',
        '1000': '1000',
        '1100': '1100',
        '2000': '2000',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}