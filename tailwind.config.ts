import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        hn: 'Helvetica Neue',
        montserrat: 'var(--montserrat)',
        hlc: ['fontHlc', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        ssm: { min: '900px', max: '1169px' },
        mo: { max: '900px' },
        md: [{ min: '900px', max: '1280px' }],
        mmd: [{ min: '900px', max: '1480px' }],
        sm: { min: '900px' },
      },
      width: {
        container: '1280px',
      },
      textColor: {
        primary: '#FC7823',
      },
      borderColor: {
        primary: '#FC7823',
      },
      backgroundColor: {
        primary: '#FC7823',
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xl': {
            maxWidth: '1200px',
          },
        },
      })
    },
  ],
}
export default config
