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
        'highlight-toxic-green': '#9CDB4366',
        'toxic-purple': '#793A80',
        'toxic-pink': '#E86AA3',
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
        'brand-glow': '0 2px 4px 0 rgba(85, 188, 71, 0.25), 0 -2px 4px 0 rgba(85, 188, 71, 0.25)',
      }
    },
  },
  plugins: [],
}
