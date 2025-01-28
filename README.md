# Kid Playground

Kid Playground React Application.\
This project was bootstrapped with [Create Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite).

## Development Environment Setup

1. `npm install` to initialize the project.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

This script starts the Vite development server. Vite provides a faster and leaner development experience for modern web projects.\
It serves your project locally for development purposes.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

This script first runs the TypeScript compiler (`tsc`) to check for any type errors in your code.\
If the TypeScript code compiles successfully (i.e., there are no type errors), it then runs `vite build` to build your project for production.

### `npm run lint`

This script runs ESLint, a tool for identifying and reporting on patterns in JavaScript/TypeScript.\
It checks all files in the current directory (and subdirectories) with the extensions `.ts` and `.tsx`.\
The `--report-unused-disable-directives` option reports errors when `eslint-disable` comments (used to ignore certain linting errors) are unnecessary.\
The `--max-warnings 0` option causes the script to fail if any warnings are generated (normally, ESLint only fails on errors).

### `npm run preview`

This script runs the `vite preview` command, which serves the built version of your project (i.e., the output of `vite build`) locally. This can be useful for previewing your production build locally.
