# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - IP address tracker solution](#frontend-mentor---ip-address-tracker-solution)
  - [Table of contents](#table-of-contents)
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
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./src/images/Screen%20Shot%202024-02-25%20at%2016.24.17-fullpage.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/Desmends27/ip-address-tracker-master)
- Live Site URL: [Add live site URL here](https://Desmends27.github.io/ip-address-tracker-master)

## My process
    Built various components, then added api requests and other neccessary scripts
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

It was my first time using react and asynchronous  programming for a project, learnt a lot on how api request work, how to use the UseEffect hook and how to load specific data.

```js
   const inputRef = useRef("");
   //Get ip of user;
   const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIp(res.data.ip);
  }
   useEffect(() => {
    getData();
   }, []);

```


### Continued development
The ui is not good enough could use a bit more work, more improvement will be worked on

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Leaflet resource](https://stackoverflow.com/questions/64665827/react-leaflet-center-attribute-does-not-change-when-the-center-state-changes) - I had trouble with re rendering the app, after user input, this resource help me fix it.


## Author
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Desmends27)


## Acknowledgments
Thanks to https://stackoverflow.com/users/535480/james for helping with the leaflet Rerendering problem.