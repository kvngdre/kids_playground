# Kids Playground

A React-based creative platform for children to explore art through AI-powered tools. Kids can create artwork using AI prompts, sketches, or photos, organize their creations in galleries and boards, follow other young artists, and earn rewards for their creative achievements.

## Features

- **AI Art Creation**: Generate art using text prompts, sketches, or photo uploads
- **Personal Galleries**: Organize and showcase artwork in custom galleries and boards
- **Social Community**: Follow other artists and discover inspiring creations
- **Parental Controls**: Secure passcode-protected settings for parent oversight
- **Rewards System**: Earn coins and rewards for creative activities
- **Profile Management**: Customizable user profiles with privacy controls

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS Modules
- **State Management**: Zustand
- **Routing**: React Router v6
- **UI Components**: Custom component library with Modal system

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
