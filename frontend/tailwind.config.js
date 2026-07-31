/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0E14',
          soft: '#0F1320',
        },
        panel: {
          DEFAULT: '#131722',
          light: '#1A2030',
          border: '#232A3B',
        },
        violet: {
          DEFAULT: '#7C5CFF',
          soft: '#9B82FF',
          dim: '#5A3FD9',
        },
        teal: {
          DEFAULT: '#2DD4BF',
          soft: '#5EEAD4',
        },
        amber: {
          DEFAULT: '#FFB454',
          soft: '#FFD08A',
        },
        coral: {
          DEFAULT: '#FF6B6B',
        },
        ink2: '#E6E8F0',
        muted: '#8B93A7',
        muted2: '#5C6479',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124, 92, 255, 0.45)',
        'glow-teal': '0 0 40px -10px rgba(45, 212, 191, 0.4)',
        card: '0 8px 30px -10px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        blink: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        floaty: '6s ease-in-out infinite floaty',
        pulseSoft: 'pulseSoft 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
