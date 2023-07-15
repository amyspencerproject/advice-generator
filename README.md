# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

Desktop button hover state and generated advice after button submit

![](./screenshots/Screenshot%20desktop%20button.png)
![](./screenshots/Screenshot%20desktop%20advice.png)

Mobile view of advice

![](./screenshots/Screenshot%20mobile%20advice.png)

### Links

- Github Repo URL: [Advice Generator Repo](https://github.com/amyspencerproject/advice-generator)
- Live Site URL: [Advice Generator Page](https://amyspencerproject.github.io//advice-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Variables
- CSS Grid & Flex
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

- Had some issues with the cache of the data sent by the API in Mozilla Firefox. Chrome did not have issues with this at all. The API would send the first random advice text and the Firefox browsert would keep this and not update with subsequent button clicks.
- In the API documentation it states that the " Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice." so I thought this was an issue with the API at first.
- I found a solution using `cache: "no-cache"` in the fetch request.

### Continued development

### Useful resources

- [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache) - MDN reference for handling browser cache in the request/fetch code.

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
