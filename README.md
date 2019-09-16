# Lettes Art Gallery


![The index page of Lettes Art](https://res.cloudinary.com/dqvlfpaev/image/upload/v1568668728/lettesart-small_mca0xz.gif "The landing page of this repo")

Build with React, using Gatsby to compile the static assets, Contentful for CMS, and Netlify for hosting - this Gallery is built to be as beautiful/fast as it is maintainable.

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install) (if you haven't already).

### Get the source code and install dependencies.

```
$ git clone git@github.com/guyathomas/lettes-art.git
$ yarn install
```

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `yarn run dev`

Run in the project locally.

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `yarn run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.

## Road map
### P1
- [x] Show Name & Description, Frame, height, width
- [x] Style width, height and frame details, and Name and description
- [ ] Hover state for SVG down chevron
- [ ] Multiple photos
- [ ] Use lower quality images on page load / paginate

### P2
- [ ] Add 'Commissions Welcome' banner down the bottom
- [ ] Buy Now Button ( Allow Prints on demand )

### Refactors
- [ ] Typescript
- [ ] Emotion
- [ ] CSS Grid?