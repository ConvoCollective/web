# Development

## Overview
This is an Eleventy project that creates a static site.

The site contains a mix of:
* HTML/Eleventy Templates
* Markdown content
* JavaScript code

## Getting Started

```sh-session
$ yarn install
$ yarn run
```

To use `Netlify CMS` locally, open a separate terminal and run:

```sh-session
$ yarn run cms
```

## JavaScript Conventions
Custom code written in JavaScript is stored under `src/js`.

The code is linted and compiled using JSDoc, TypeScript, and ESLint. Method signatures are specified using JSDoc, and checked via TypeScript and ESLint. [Read more about this approach here](https://github.com/typesafejs/template#what-is-this).

Unit-testing is performed with Ava. Ava is preferred versus Mocha because it provides process isolation for executing individual test suites. It is preferred versus Jest because it has fewer "opinions" and gotchas.

JavaScript is run in the browser via Browserify. Packages are managed with yarn.


