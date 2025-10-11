# VITE REACT SETUP

## Description

CLI to set up a Vite created React project with common packages and configuration

## What it does

### Packages added

- i18next with empty translation file for en
- Luxon for date times
- TailwindCss and clsx for CSS styling
- Vitest and testing library
- Prettier

### Configuration

- Adds esling rule that allows unused vars and params if their name starts with an underscore
- Vitest global imports
- Default palette for TailwindCss

### Components

- PaletteDisplay to display TailwindCss color palette

## How to use locally

- Clone this repo
- In the terminal run npm link
- Switch to the parent directory of your new app
- Create React app using `npm create vite@latest [your_app_name] -- --template react-ts`
- Change dir to the new app root directory
- In the app root directory run `npm i`
- In the app root directory run vite-react-setup
