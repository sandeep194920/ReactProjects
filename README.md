# React Projects organized per topics

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## useState

### 1. Birthday Reminder App

Update useState array by removing single or all items.

https://react-birthday-reminder-app.netlify.app/

### 2. Simple Reviews Widget

Though we use only useState hook, a lot of styling involved where we get to learn how to add react-icons, how to use ::before pseudo class to style the image.

https://react-simple-reviews-app.netlify.app/

### 3. Accordion

This can be used for FAQs section where one question dropdown closes when the next question is clicked. Implemented SAAS for better organization of styling.

https://react-accordion-widget.netlify.app/

## useEffect

### 4. Tours

Similar to Birthday reminder app but we are using a simple API so that we can introduce side-effects that can be handled by useEffect hook.
Also, implemented simple Loading and Error display if the component doesn't re-render.

https://react-tourism-app.netlify.app/

### 5. Slider

This has to do little with CSS transforms. A good overall practice app which allows us to think about not only react way but also some CSS way.

https://react-review-slider-app.netlify.app/

### 6. Menu

Restaurant menu displays different food items based on the selected categories. Demonstrated how we can set the CSS active class for selected category. Used CSS grid for the layout.

https://react-restaurant-menu-app.netlify.app/

## Forms

### 7. Text Generator

Introducing forms in react. I've used simple input to demonstrate the basics of the form. I've also used useRef hook to highlight the input (focus) when app loads. You can generate as many paragraphs as you want and then copy with a button click. To make the copy possible, I've used a react library react-copy-to-clipboard.

https://react-text-generator-app.netlify.app/

### 8. Hex Color Generator

Using a thrid party API (mentioned in the project's readme), we are getting a different tints (light colors) and shades (dark colors) of a given color. We can search by hex values and strings. Copy-To-Clipboard is used in an efficient way compared to Text Generator project. In the project 7. we used a library to copy the text to clipboard where as we are doing it with a single line of code here which is much more easier.

https://react-hex-color-generator.netlify.app/

### 9. Grocery List

A crud application that covers most of the functionalities an extensive app should have. Local storage has been implemented where data is not lost on page refresh. A model with different message is shown everytime depending on the operation. Can learn a lot from this partuclar app.

https://react-grocery-list-app.netlify.app/

## useRef

### 10. Navbar

What's so special about a simple Navbar? Well, it looks simple but the whole take away from this project is the smooth tranition that happens toggling the navbar. On a simple useState call alone this is not possible. We need a useRef hook (2 useRef hooks) to make it happen.

https://react-simple-responsive-navbar.netlify.app/
