/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'toxic-green': '#59C135',
        'soft-toxic-green': '#D6F264',
        'highlight-toxic-green': '#9CDB4366',
        'light-toxic-green': '#59C13566',
        'dark-toxic-green': '#24523B66',

        'toxic-purple': '#793A80',
        'soft-toxic-purple': '#F597B9',
        'toxic-pink': '#E86AA3',

        'team-purple-bg': '#40335366', 
        'team-purple-border': '#BC4A9B', 
        'team-purple-text': '#BC4A9B',
        'team-purple-glow': '#9747FF80',
      },
      fontFamily: {
        'nemesys': ['Nemesys', 'monospace'],
        'hitobito': ['Hitobito', 'sans-serif'],
        'cabin': ['Cabin', 'sans-serif'],
      },
      fontSize: {
        "9": "9px",
        "10": "10px",
        "11": "11px",
        "12": "12px",
        "13": "13px",
        "14": "14px",
        "15": "15px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "22": "22px",
        "24": "24px",
        "28": "28px",
        "29": "29px",
        "32": "32px",
        "40": "40px",
        "42": "42px",
        "48": "48px",
      },
      boxShadow: {
        'soft-glow-purple': '0 2px 4px 0 rgba(151, 71, 255, 0.5), 0 -2px 4px 0 rgba(151, 71, 255, 0.5)',
        'glow-purple': '4px 4px 4.22px 0 rgba(151, 71, 255, 0.5), -4px -4px 4.22px 0 rgba(151, 71, 255, 0.5)',
        
        'team-purple': '4px 4px 4px 0px rgba(151, 71, 255, 0.5), -2px -2px 4px 0px rgba(151, 71, 255, 0.5)',
        
        'soft-glow-green-tight': '0 2px 4px 0 rgba(85, 188, 71, 0.25), 0 -2px 4px 0 rgba(85, 188, 71, 0.25)',
        'glow-green-tight': '3.58px 3.58px 4.17px 0 rgba(85, 188, 71, 0.25), -3.58px -3.58px 4.17px 0 rgba(85, 188, 71, 0.25)',
  
        'glow-lime-offset': '4px 4px 4px 0 rgba(145, 255, 34, 0.25), -2px -2px 4px 0 rgba(145, 255, 34, 0.25)',
        
        'glow-green-mid': '2px 2px 4px 0 rgba(99, 199, 77, 1), -2px -2px 4px 0 rgba(99, 199, 77, 1)',
        
        'soft-black': '0 4.46px 4.46px 0 rgba(0, 0, 0, 0.25)',
        
        'aura-green': '0 0 7.72px 0 rgba(136, 255, 72, 0.75)',
        
        'brand-glow': '0 2px 4px 0 rgba(85, 188, 71, 0.25), 0 -2px 4px 0 rgba(85, 188, 71, 0.25)',
        'map-icon-glow': '4px 4px 4px 0 rgba(145, 255, 34, 0.25), -2px -2px 4px 0 rgba(145, 255, 34, 0.25)',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in-scroll': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '0.1%': { opacity: '1' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'box-bounce': {
            '0%': { transform: 'scale(0.9)'},
            '35%': { transform: 'scale(1.08)'},
            '70%': { transform: 'scale(1)'},
            '100%': { transform: 'scale(1.05)'},
          },
        'inner-box-bounce': {
            '0%': { transform: 'scale(1)'},
            '35%': { transform: 'scale(1.08)'},
            '70%': { transform: 'scale(1.05)'},
            '100%': { transform: 'scale(1.05)'},
        },
        'icon-bounce': {
          '0%': { transform: 'translate(-50%, -50%) scale(0.8)', },
          '35%': { 
            transform: 'translate(-50%, -50%) scale(0.3)', 
            top: '25%', 
            left: '50%',
          },
          '70%': { 
            transform: 'translate(-50%, -50%) scale(0.6)', 
            top: '30%', 
            left: '50%',
          },
          '100%': { 
            transform: 'translate(-50%, -50%) scale(0.5)', 
            top: '25%',
            left: '50%',
          },
        },
        'text-pop': {
          '0%': { transform: 'scale(0.5)'},
          '35%': { transform: 'scale(1.1)'},
          '70%': { transform: 'scale(0.9)'},
          '100%': { transform: 'scale(1)'},
        },
        'box-unhover': {
            '0%': { transform: 'scale(0.5)'},
            '35%': { transform: 'scale(1)'},
            '70%': { transform: 'scale(0.8)' }, 
            '100%': { transform: 'scale(1)'}, 
        },
        'inner-box-unhover': {
            '0%': { transform: 'scale(1)'},
            '35%': { transform: 'scale(0.8)'},
            '100%': { transform: 'scale(1)'},
        },
        'icon-unhover': {
          '0%': { 
            transform: 'translate(-50%, -50%) scale(0.4)', 
            top: '35%', 
            left: '50%',
          },
          '35%': { 
            transform: 'translate(-50%, -50%) scale(1.3)', 
            top: '60%', 
            left: '50%',
          },
          '70%': { 
            transform: 'translate(-50%, -50%) scale(0.9)', 
            top: '50%',
            left: '50%',
          },
          '100%': { 
            transform: 'translate(-50%, -50%) scale(1)', 
            top: '50%',
            left: '50%',
          },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 20s linear infinite',
        'scroll-left-delayed': 'fade-in-scroll 20s linear infinite 8s backwards',
        
        'box-bounce': 'box-bounce 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'inner-box-bounce': 'inner-box-bounce 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'icon-bounce': 'icon-bounce 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'text-pop': 'text-pop 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        
        'box-unhover': 'box-unhover 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'inner-box-unhover': 'inner-box-unhover 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'icon-unhover': 'icon-unhover 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      }
    },
  },
  plugins: [],
}
