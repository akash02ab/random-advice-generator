# Random Advice Generator

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Random Advice Generator](#random-advice-generator)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
      - [Desktop](#desktop)
      - [Mobile](#mobile)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Edge Case](#edge-case)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

It's a  dynamic web page using HTML, CSS, and JavaScript. The user interface features a dice button, and upon clicking it, the application fetches random advice from the Adviceslip API. The retrieved advice is then dynamically displayed on a card, providing users with instant, helpful insights.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

#### Desktop
![](/screenshot/advice-generator-desktop.png)

#### Mobile
![](/screenshot/advice-generator-mobile.png)

### Links

- Solution URL: [FrontEnd Mentor](https://your-solution-url.com)
- Live Site URL: [Live Site URL](https://random-advise-generator.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Fetch API

### What I learned

If you want to change the color of svg which is used in your html via `<img href="link to your svg file" />`,
adding style `fill: red;` doesn't work as the svg is not directly placed as a html element.

In order to change the svg color you need to find equivalent `filter` property of that color;

```html
 <img src="./images/pattern-divider-desktop.svg" alt="divider" id="divider-lg">
```
Suppose you want to give light-cyan: #cee3e9 to pattern-divider-desktop.svg

```css
 /* The below filter is equivalent of light-cyan #cee3e9 */
 #divider-lg {
   filter: invert(99%) sepia(76%) saturate(682%) hue-rotate(167deg) brightness(96%) contrast(91%);
 }
```

### Edge Case

Handling edge cases when fetching data from the API, resulting in disabling the dice button. This functionality is visually indicated on the user interface by dimming the color of the dice.

### Continued development

I aim to emphasize responsive design using Grid and plan to further explore animation techniques. For instance, I've recently incorporated a text drop animation in this challenge and would like to continue experimenting with amazing effects.

### Useful resources

- [Codepen to find equivalent `filter` from `hexcode`](https://codepen.io/sosuke/pen/Pjoqqp)

## Author

- Website - [https://akashbanchhor.netlify.app](https://akashbanchhor.netlify.app)
- Frontend Mentor - [@akash02ab](https://www.frontendmentor.io/profile/akash02ab)