# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Find the solution here](https://github.com/Akinwahab/Frontend_Mentor_Challenges/tree/main/testimonials-section)
- Live Site URL: [Visit the live site URL here](https://akinwahab.github.io/Frontend_Mentor_Challenges/testimonials-section/)

## My process

### Built with

-Semantic HTML5 markup
-CSS Grid and Flexbox for layout
-Custom properties (CSS variables) for colors & fonts
-Responsive design with mobile-first workflow


### What I learned

In this project, I practiced using **CSS Grid** with named areas to place testimonial cards in the exact layout from the challenge.

Here’s a small CSS snippet I’m proud of:

```css
@media (min-width: 720px) {
  .main__container {
    display: grid;
    gap: 2.4rem 2.9rem;
    padding: 5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "purple purple"
      "grey short-white"
      "dark-blue dark-blue"
      "long-white long-white";
  }
  .purple {
    background-image: url("./images/bg-pattern-quotation.svg");
    background-repeat: no-repeat;
    background-size: 7.8rem;
    background-position: 50rem 0;
  }
}
```
### Continued development


### Useful resources

* [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) – Super useful guide while structuring the layout.
* [MDN Web Docs](https://developer.mozilla.org/).

---

## Author

- GitHub - [akinwahab](https://github.com/akinwahab)
- Website - [Akinwahab Codes](https://akinwahab.netlify.app)
- Frontend Mentor - [@akinwahab](https://www.frontendmentor.io/profile/akinwahab)
- YouTube - [Akinwahab Codes](https://www.youtube.com/@Akinwahab099)

---
