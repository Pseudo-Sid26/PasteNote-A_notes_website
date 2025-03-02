# PasteApp: A notes website


## 🌎 Deployemt : [Visit PasteApp]([https://pastenote.vercel.app/])

(View function is not working as database is stored on local storage ,once other db(MongoDB) is setup changes will be updated.

## 🚀 Features
- ⚡ **Vite**: Ultra-fast development and build tooling.
- ⚛️ **React**: Latest version for building modern UI components.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for building custom designs without leaving your HTML.
- 🧹 **ESLint**: A pluggable linter tool for ensuring code quality.
- 🗄️ **Redux Toolkit**: State management with slices and reducers.
- 🔔 **React Hot Toast**: For elegant notifications in your application.
- 🌎 **React Router DOM**: Declarative routing for React.

---

## 🛠️ Installation

### Step 1: Create a Vite project
Install Vite globally (if not already installed):

```sh
npm create vite@latest
```

When prompted, choose the following:
- **Project name**: paste
- **Framework**: React
- **Variant**: JavaScript or TypeScript as per your preference.

Navigate into the project directory:

```sh
cd paste
```

### Step 2: Install Tailwind CSS
To add Tailwind CSS to your Vite + React project, follow these steps:

Install Tailwind CSS and its dependencies:

```sh
npm install -D tailwindcss postcss autoprefixer
```

Initialize Tailwind configuration:

```sh
npx tailwindcss init
```

This will create a `tailwind.config.js` file in your project.

Update the `tailwind.config.js` file with the following content to specify which files Tailwind should scan:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the following lines to your `src/index.css` (or `src/main.css` if you’re using that):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 3: Install Required Packages
Install the project dependencies:

```sh
npm install
```

### Step 4: Run the Project
Start the development server with the following command:

```sh
npm run dev
```

This command will launch the development server, and your project will be available at `http://localhost:5173`.

---

## 📜 Scripts
- `npm run dev`: Starts the Vite development server with HMR.
- `npm run build`: Builds the project for production.
- `npm run preview`: Serves the production build for preview.
- `npm run lint`: Lints your code using ESLint.

---

## 📦 Packages Used

### Dependencies
- `@reduxjs/toolkit`: A powerful library for managing application state with Redux.
- `lucide-react`: Icon set for React that provides various UI icons.
- `react`: The core React library for building user interfaces.
- `react-dom`: DOM bindings for React.
- `react-hot-toast`: Notifications system for React.
- `react-redux`: Official React bindings for Redux.
- `react-router-dom`: Provides routing functionalities in React apps.

### Dev Dependencies
- `@eslint/js`: ESLint configurations for JavaScript.
- `@vitejs/plugin-react`: Official Vite plugin for React, enabling Fast Refresh using Babel.
- `autoprefixer`: PostCSS plugin that adds vendor prefixes automatically.
- `eslint`: A tool for identifying and fixing problems in JavaScript code.
- `globals`: Global variables configuration for ESLint.
- `postcss`: A tool for transforming CSS with JavaScript plugins.
- `tailwindcss`: Utility-first CSS framework.
- `vite`: Build tool for fast and optimized web development.

---

## 🗂️ Project Structure

Here is the basic structure of the project:

```
paste/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .eslintrc.js
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Tailwind CSS Configuration
The `tailwind.config.js` file is configured to scan all the files in the `src` directory for Tailwind CSS classes and allows you to customize the theme and plugins.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 🎯 Conclusion
This template sets up a React project with Vite, ESLint, Tailwind CSS, and Redux Toolkit for state management. With this setup, you can quickly start building modern, scalable web applications. Feel free to customize it further according to your project requirements!

Happy Coding! 🚀

