---
title: Getting Up and Going with React and Bulma (and Sass)
date: 2021-08-15
extract: "I've been a fan of Syntactically Awesome Stylesheets, SASS, for some time now and have found it a useful tool in my projects. Going forward with React I wanted to continue using SASS and adopt a library suitable to jump start my styling."
description: "A guide to adding Sass and Bulma to a create-react-app project"
social_preview: "/images/og/React-Sass-Bulma.png" 
tags: ['javascript', 'react', 'sass', 'bulma', 'styles']
---

<img src="/images/og/React-Sass-Bulma.png" alt="React, Sass, and Bulma logos"/>

## Intro

I've been a fan of Syntactically Awesome Stylesheets, SASS, for some time now and have found it a useful tool in my projects. Going forward with React I wanted to continue using SASS and adopt a library suitable to jump start my styling.

I ultimately picked Bulma as it looks nice, has a nice grid system based off flex-box, and it is very modular. A huge bonus is also that Bulma is CSS-only so does not come rolled with any JavaScript. With Bootstrap, Foundation, etc., I feel forced to shoehorn its functionality into the code that I write. I can write my own selectors and event listeners, TYVM.

This post is intended as a guide to adding SASS and Bulma to a React project. This approach does not isolate styles to specific components, but rather is intended as a styles foundation on which to build. I will still use CSS modules in my project but they tend to cover specific needs of a component.

## Installation

I found it pretty easy to incorporate Bulma. First off, I am starting with create-react-app. You could set up a React project in another way but you may have to end up translating some of the steps to match with your specific project. You can create a new project from a terminal window with the following command:

```bash
npx create-react-app bulma-project
```

*Note: You can install the project in the current working directory rather than having create-react app create a new directory with the project name. Just replace the project name with a "."*

After the project is installed, navigate into the directory then install Sass and Bulma

```bash
npm install sass bulma
```

The bundler that create-react-app uses will pick up on Sass without any configuration which is a really nice touch!

## Configuration

After installing Sass and Bulma, some changes need to be made to project files to bring Bulma in. I used App.css as an entry point but it could be any stylesheet imported into the top-level component used in your project.

1. Change the file type to `.scss`. I prefer bracket syntax since it is compatible with plain CSS. If you prefer indented syntax, go with `.sass`. Read more about [Sass syntax options here](https://sass-lang.com/documentation/syntax). Update the component where the stylesheet is imported.
2. In the stylesheet, add in the Sass variables needed for your custom themes. A full list of variables for Bulma can be found here: [list of Bulma variables](https://bulma.io/documentation/customize/variables/).
3. Add @import all styles into the stylesheet or each module as needed. Do so at the bottom of your stylesheet. At current writing, there are 39 modules that can be included. They can be added en masse `@import '../node_modules/bulma/bulma.sass'`, grouped together by categories, or added in as individual files. As individual components, you should also include the `../node_modules/bulma/sass/utilities/_all.sass` and `../node_modules/bulma/sass/base/_all.sass` as these contain the underpinnings of Bulma. You can explore the directory in `/node_modules/bulma`. It's pretty straightforward to read so I have also included a printout of the the file directory as a handy reference(current as of Aug 13th, 2021).
4. You can now use Bulma's classes in the component where it was imported and any sub-components without further action other than adding the class inside of an element.

## Reference to Bulma files in NPM package

```bash
├── CHANGELOG.md
├── LICENSE
├── README.md
├── bulma.sass
├── css
│   ├── bulma-rtl.css
│   ├── bulma-rtl.css.map
│   ├── bulma-rtl.min.css
│   ├── bulma.css
│   ├── bulma.css.map
│   └── bulma.min.css
├── package.json
└── sass
    ├── base
    │   ├── _all.sass
    │   ├── animations.sass
    │   ├── generic.sass
    │   ├── helpers.sass
    │   └── minireset.sass
    ├── components
    │   ├── _all.sass
    │   ├── breadcrumb.sass
    │   ├── card.sass
    │   ├── dropdown.sass
    │   ├── level.sass
    │   ├── media.sass
    │   ├── menu.sass
    │   ├── message.sass
    │   ├── modal.sass
    │   ├── navbar.sass
    │   ├── pagination.sass
    │   ├── panel.sass
    │   └── tabs.sass
    ├── elements
    │   ├── _all.sass
    │   ├── box.sass
    │   ├── button.sass
    │   ├── container.sass
    │   ├── content.sass
    │   ├── form.sass
    │   ├── icon.sass
    │   ├── image.sass
    │   ├── notification.sass
    │   ├── other.sass
    │   ├── progress.sass
    │   ├── table.sass
    │   ├── tag.sass
    │   └── title.sass
    ├── form
    │   ├── _all.sass
    │   ├── checkbox-radio.sass
    │   ├── file.sass
    │   ├── input-textarea.sass
    │   ├── select.sass
    │   ├── shared.sass
    │   └── tools.sass
    ├── grid
    │   ├── _all.sass
    │   ├── columns.sass
    │   └── tiles.sass
    ├── helpers
    │   ├── _all.sass
    │   ├── color.sass
    │   ├── flexbox.sass
    │   ├── float.sass
    │   ├── other.sass
    │   ├── overflow.sass
    │   ├── position.sass
    │   ├── spacing.sass
    │   ├── typography.sass
    │   └── visibility.sass
    ├── layout
    │   ├── _all.sass
    │   ├── footer.sass
    │   ├── hero.sass
    │   └── section.sass
    └── utilities
        ├── _all.sass
        ├── animations.sass
        ├── controls.sass
        ├── derived-variables.sass
        ├── extends.sass
        ├── functions.sass
        ├── initial-variables.sass
        └── mixins.sass
```
