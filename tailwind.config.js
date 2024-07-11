/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      ["2xl"]: "1530px",
    },
    fontFamily: {
      "play": ["Play", "sans-serif"],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'newfont': ['Arial'],
      'jakarta': ['Plus Jakarta Sans'],
      'dmsans': ['DM Sans'],
      'manrope': ['Manrope'],
      'montserrat': ['Montserrat'],
      'roboto': ['Roboto'],
      'popins': ['Poppins']
    },
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 5s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'back-texture': "url('https://www.mordeo.org/files/uploads/2020/05/BMW-M8-4K-Ultra-HD-Mobile-Wallpaper-283x503.jpg')",
        "hero-image": "url('/booknear.png')"
      },
    },
  },
  plugins: [],
};
