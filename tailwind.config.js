import preset from './src/tailwind/preset'

export default {
  presets: [ require('frappe-ui/src/utils/tailwind.config') ],
  content: [
    './index.html',
    './App.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './frappe/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
