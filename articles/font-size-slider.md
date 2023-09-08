---
title: "Font-size slider"
date: 2023-08-22
id: 11
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - tutorial
  - HTML
  - CSS
  - JavaScript
---

## Introduction

Here what I when i said font size font size slider? Well It basically means that we create a input with type of range and give it some magic of javascript to make that slider adjust the `font-size` property in CSS

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/svp8h4dat2owq00t71zp.png)

[Live example](https://codepen.io/preetsuthar17/pen/BavyObj)

When we change value of slider it also changes value of font-size in css for the specified div.

## Let's get started

First of in your `index.html` file we write the structure code for slider and the the text of which we want the size to change when slider takes input.

`index.html`

```html
<div class="slider-container">
  <label for="font-size-slider">Adjust font Size</label>
  <input type="range" id="font-size-slider" min="20" max="40" value="20" />
</div>
<div class="display-text" id="display-text">
  Here what I when i said font size font size slider? Well It basically means
  that we create a input with type of range and give it some magic of javascript
  to make that slider adjust the `font-size` property in CSS
</div>
```

This is most basic code for Structure of slider and para. Here in the `<input>` we gave the type of input `range` so we get the slider and in attr we have min and max values and also we gave default value of slider which is 20, So whenever the page is opened that stays as default font size

Now let's give it bit of css to make everything in center,

`style.css`

```css
.slider-container {
  display: flex;
  padding-top: 3rem;
  justify-content: center;
  align-items: center;
}

.display-text {
  text-align: center;
  padding-top: 2rem;
}
```

Now it's time for magic of javaScript,

## Logic...

Here is basic logic what we want is to get the value of slider and we want to give the slider value to font size value in CSS which means, `slider value == fontSize` correct? yeah. Now to do this let's fetch the value of slider first,

This is out `javascript` code

```javaScript
const fontSizeSlider = document.getElementById("font-size-slider");
const displayText = document.getElementById("display-text");
```

We target the slider by its ID we gave in HTML and we also target the text of which size we want to be changed

```html
<label for="font-size-slider">Adjust font Size</label>
<div class="display-text" id="display-text">
  Here what I when i said font size font size slider? Well It basically means
  that we create a input with type of range and give it some magic of javascript
  to make that slider adjust the `font-size` property in CSS
</div>
```

We got the element it self. Now to get the value of range slider we need to use `eventListener` in JavaScript

```javascript
fontSizeSlider.addEventListener("input", () => {});
```

Here in this code we use an eventListener to check when the input slider has any change and if yes then we fetch the value of change in input slider,

```javascript
const fontSize = fontSizeSlider.value;
```

Now we got the value of range input. The last step is to set the value of slider as value of `FontSize` in CSS,

```javascript
displayText.style.fontSize = `${fontSize}px`;
```

And yeah here we are done! Your JavaScript code should look something like this,

```javascript
const fontSizeSlider = document.getElementById("font-size-slider");
const displayText = document.getElementById("display-text");

fontSizeSlider.addEventListener("input", () => {
  const fontSize = fontSizeSlider.value;
  displayText.style.fontSize = `${fontSize}px`;
});
```

So that's how we easily created Font Size Adjusting slider using HTML and JavaScript. We can also achieve this functionality in `React` but code will be different because we'll need to make use of `useSate` to set the font size and all. Let me know in the comments if you want the article for same functionality but using `reactjs`. That's for this article!

Thanks for reading!
