# frontend-lms
# vite setup
npm create vite@latest
--> give project name
--> select React
--> select javascript
then run cmd below one by one
cd lms-frontend
  npm install
  npm run dev
 

 # Tailwind setup
 1.npm install -D tailwindcss  // install tailwindCss

2. npx tailwindcss init  // create tailwind confiq file 

 3./** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
 4.@tailwind base;
@tailwind components;
@tailwind utilities;

5. npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

6.# frontend-lms
# vite setup
npm create vite@latest
--> give project name
--> select React
--> select javascript
then run cmd below one by one
cd lms-frontend
  npm install
  npm run dev
 