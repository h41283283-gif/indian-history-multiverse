/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4EBD9',
        parchment: '#E8DFC5',
        'deep-red': '#A93226',
        ochre: '#D97B2F',
        teal: '#2F6F7F',
        indigo: '#3B4D6B',
        'forest-green': '#2F4F2F',
        gold: '#C5A059',
        ink: '#1C1C1C',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAADICAYAAAC0K/30AAAABmJLR0QA/wD/AP+gvaeTAAADKklEQVR4nO3ZwWvaQBDG8Xd32H7S4N/hTyj0WNCDtx48eAMveOu1HjxUkIMXLx6FXDyUHKRQKBQtJhHbNo2T3e/d+X0QiJTtbrM7u7Mzs7v1er1eURQKgiCUz+cjnU5HP5+P8vk8vu//3VhJksjTdZ1cV1fyPE9c1/1vGbIsRwqFglwuF/n+/3P/QlEUEWMMASAhIZFIRCqdTicJh8P/NlYqlWg+n5Pv+1KpVCQSiUg2m5Xt7W0pFoviOI6UyyVxXVfK5TIlEglJ02T5lMvlpFqtyunpKVmWJds+v0tl4d1OvweiwvXiSfV6XWIUTWU+n5PH41F+9rIshcPhiOu65PF4UIFAQI6Pj2VmZkY8zyNDQxDEggwQRZHGxsbkiy3/G/o+Sc/nM0pzXZc2NzcvOKssy1RVFRocHJRUKnVRFo3UQZFM20ZhpVIhnucRy7JIV1cX6ezsJJ7nUa/XI+rz+YzKzs7OpFAoUBqJxUIRQiIp6vV62uVms1nVnvfvfZlP+R2p0fhqjMzMTJHu7m6hc3p6muqqvPdVJfFMO0rjb0WyLIsZ4tFoVIPzfZ+ZfKL0+Wyu69JVeW1tTXm6U3O0EpyamlL2wF8AAMDnv7fK9AAACQA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAKQDpAApAMkAOkACUA6QAL4CxqUcRQN0c6wAAAAAElFTkSuQmCC')",
      },
    },
  },
  plugins: [],
}
