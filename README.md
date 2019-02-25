## Introduction

It's a net blog based on [VuePress](https://vuepress.vuejs.org/), which is composed of two parts: a minimalistic static site generator with a Vue-powered theming system, and a default theme optimized for writing technical documentation. It was created to support the documentation needs of Vue's own sub projects.

## Features

- Built-in markdown extensions optimized for technical documentation
- Ability to leverage Vue inside markdown files
- Vue-powered custom theme system
- Automatic Service Worker generation
- Google Analytics Integration
- "Last Updated" based on Git
- Multi-language support
- A default theme with:
  - Responsive layout
  - Optional Homepage
  - Simple out-of-the-box header-based search
  - Algolia Search
  - Customizable navbar and sidebar
  - Auto-generated GitHub link and page edit links

## Todo

- Home page 
- Customized themes
- Music
- Contact

## How it work?
You can now start writing with:
```sh
yarn docs:dev # OR npm run docs:dev
```
To generate static assets, run:
```sh
yarn docs:build # Or npm run docs:build
```