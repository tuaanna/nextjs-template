import tailwindScrollbar from 'tailwind-scrollbar'
import { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

import { customConfig } from './.tailwind/theme'

const configs: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ...customConfig,
    },
  },
  plugins: [animate, tailwindScrollbar],
}

export default configs
