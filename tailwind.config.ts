import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "748px",
      lg: "1100px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        // Base colors
        void: {
          50: '#f8f9fa',
          100: '#e8eaed',
          200: '#dadce0',
          300: '#bdc1c6',
          400: '#9aa0a6',
          500: '#5f6368',
          600: '#3c4043',
          700: '#202124',
          800: '#1a1a2e',
          900: '#16213e',
          950: '#0a0a0f',
        },

        // Electric blue accent
        electric: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#4facfe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },

        // Purple gradient colors
        cosmic: {
          50: '#faf7ff',
          100: '#f4edff',
          200: '#ebe0ff',
          300: '#d9c7ff',
          400: '#c29fff',
          500: '#a855f7',
          600: '#764ba2',
          700: '#667eea',
          800: '#533a7d',
          900: '#4c1d95',
          950: '#2e1065',
        },

        // Glassmorphism and card backgrounds
        glass: {
          primary: 'rgba(46, 46, 68, 0.25)',
          secondary: 'rgba(30, 30, 46, 0.8)',
          border: 'rgba(79, 172, 254, 0.1)',
          hover: 'rgba(79, 172, 254, 0.15)',
        },

        // Text colors
        text: {
          primary: '#e8eaed',
          secondary: '#9aa0a6',
          muted: '#5f6368',
          accent: '#4facfe',
        },
      },
      backgroundImage: {
        // Main background gradient
        'nebula': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533a7d 100%)',

        // Card backgrounds
        'card-primary': 'linear-gradient(145deg, #1e1e2e 0%, #2d2d44 100%)',
        'card-hover': 'linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.15) 100%)',

        // Accent gradients
        'cosmic-primary': 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
        'cosmic-secondary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'electric-gradient': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',

        // Button gradients
        'btn-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'btn-secondary': 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(79, 172, 254, 0.1) 100%)',
      },

      boxShadow: {
        'electric': '0 0 20px rgba(79, 172, 254, 0.4)',
        'electric-sm': '0 0 10px rgba(79, 172, 254, 0.2)',
        'electric-lg': '0 0 40px rgba(79, 172, 254, 0.3)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'cosmic': '0 8px 32px rgba(102, 126, 234, 0.2)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        space: ['var(--font-space)'],
        barlow: ['var(--font-barlow)'],
        manrope: ['var(--font-manrope)'],
        urbanist: ['var(--font-urbanist)'],
        calistoga: ['var(--font-calistoga)'],
        righteous: ['var(--font-righteous)'],
        outfit: ['var(--font-outfit)'],
        epilogue: ['var(--font-epilogue)'],
        redHat: ['var(--font-red-hat)'],
        fredoka: ['var(--font-fredoka)'],
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.3s forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0'
          }
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          },
        },
        'move-right': {
          '0%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },

  },
  plugins: [],
};
export default config;
