---
title: "Create a full-screen navbar in your website [Responsive]"
date: 2023-08-16
id: 8
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Tutorial
  - CSS
  - HTML
---

## Introduction

Creating a default navbar in a website using HTML and CSS is pretty basic. We can improve the UI by creating something called full screen navbar, where when the user clicks on the navbar dropdown button it opens the full page navbar which looks so awesome!

![preview](https://github-production-user-asset-6210df.s3.amazonaws.com/75468116/261015530-be54d108-5591-4bdf-9474-2ce44b0298e0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230816%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230816T133205Z&X-Amz-Expires=300&X-Amz-Signature=3d6c0ba49d0e9fb1685062257e613371b571fda427ef0aa7a428020b4343143f&X-Amz-SignedHeaders=host&actor_id=75468116&key_id=0&repo_id=676061621)

let's get started!

## Prerequisite

- Basic knowledge about CSS & HTML and you're good to go!

## Coding time

First of all, let's create base files

`index.html`
`style.css`

Heading over to the skeleton first,

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Full screen navbar</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav>
      <div class="navbar">
        <div class="nav-items">
          <ul>
            <li>home</li>
            <li id="fullScreenNavbarTrigger">Links</li>
          </ul>
        </div>
        <div id="fullScreenNavbar" class="nav-full-items">
          <button onclick="closeNav()" id="closeFullScreenNavbar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
              />
            </svg>
          </button>
          <a href="#">Home 🏠</a>
          <a href="#about">About ❓</a>
          <a href="#blogs">Blogs 📜</a>
          <a href="#contact">Contact 📧</a>
        </div>
      </div>
    </nav>
  </body>
</html>
```

Here we created the basic structure for the navbar now let's implement some styling,

`style.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}

a {
  color: red;
  text-decoration: none;
}

.navbar {
  display: flex;
  justify-content: center;
}

.nav-items {
  position: fixed;
  display: flex;
  top: 2rem;
}

.nav-items ul {
  display: flex;
  justify-content: center;
  padding: 0.4rem 1rem;
  width: fit-content;
  margin: 0 1rem;
  border-radius: 30rem;
  backdrop-filter: blur(5px);
  gap: 2rem;
  background-color: #ffffff21;
  border: 2px solid #ccc;
  list-style: none;
}

.nav-full-items {
  position: fixed; /*Fixed position so it doesn't scroll*/
  display: none; /*Initial display none Later we'll add display:flex via javascript*/
  justify-content: center;
  align-items: center;
  height: 100vh; /*Make the navbar full page*/
  width: 100vw; /*Make the navbar full page*/
  backdrop-filter: blur(15px);
  background-color: #ffffff47;
  flex-direction: column;
  font-size: 2rem;
}

.nav-full-items a {
  color: #010101;
  text-decoration: none;
}

#closeFullScreenNavbar {
  position: absolute;
  top: 17px;
  right: 50px;
  background-color: transparent;
  color: #2a2a2a;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.4s all ease-in-out;
}

#fullScreenNavbarTrigger {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
```

Okay, there we go simple navbar styling is done!

![image](https://github-production-user-asset-6210df.s3.amazonaws.com/75468116/261016815-fbf96d8b-ef0b-4465-b4a3-9608bbe9ab8c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230816%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230816T133255Z&X-Amz-Expires=300&X-Amz-Signature=6cea28d1d4ec434c642e4e52b8bd3e5f0719804377033d07c6a56cee3d01cd5f&X-Amz-SignedHeaders=host&actor_id=75468116&key_id=0&repo_id=676061621)

Now the logic part let's implement Javascript to make this functional!

write this code before the body closing tag in `index.html` or you can create a separate file for it named `script.js` and import it in html via

```html
<script src="path/to/script.js"></script>
```

The main logic for full-page navbar

```javascript
const fullScreenNavbar = document.getElementById("fullScreenNavbar");
const closeFullScreenNavbar = document.getElementById("closeFullScreenNavbar");
const fullScreenNavbarTrigger = document.getElementById(
  "fullScreenNavbarTrigger"
);

fullScreenNavbar.addEventListener("click", closeNav); // When user clicks it closes the navbar

function openNav() {
  fullScreenNavbar.style.display = "flex"; // Set the navbar to display:flex;
}

function closeNav() {
  fullScreenNavbar.style.display = "none"; // To close set the display:none; again
}
```

Now to make the buttons work we have to add onClick properties in buttons in `index.html`

```html
<div class="nav-items">
  <ul>
    <li>home</li>
    <li id="fullScreenNavbarTrigger" onclick="openNav()">Links</li>
  </ul>
</div>

<!-- In this block of code in navbar, we called openNav() function from javascript to open the navbar whenever the user click on Links -->

<div id="fullScreenNavbar" class="nav-full-items">
  <button onclick="closeNav()" id="closeFullScreenNavbar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#000"
      class="bi bi-x-lg"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
      />
    </svg>
  </button>
  <a href="#">Home 🏠</a>
  <a href="#about">About ❓</a>
  <a href="#blogs">Blogs 📜</a>
  <a href="#contact">Contact 📧</a>
</div>

<!-- And here when the user clicks on the cross svg in opened nav menu it closes the menu calling the function closeNav()  -->
```

## It's done

So yeah that was it for this much now we can add extras to out website like the main heading and other styles whatever you want

## Extra

Let's add the main heading and sort about me below there with a few social links

```html
<section class="main-section">
  <div class="main-header"><h1>Hi, I'm Preet👋</h1></div>
  <div class="main-about">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, autem sit?
      Debitis, iure fuga sit omnis incidunt adipisci commodi unde.
    </p>
    <div>
      <a href="https://preetsuthar.me" target="_blank">🌐 Devsite</a> |
      <span
        ><a href="https://github.com/preetsuthar17" target="_blank"
          >🐱 github</a
        ></span
      >
    </div>
  </div>
</section>
```

Also, let's add some styling here,

`stlye.css`

```css
.main-section {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40rem;
  flex-direction: column;
  z-index: 2;
  width: 96%;
  margin-inline: auto;
}

.main-header {
  font-size: 2.2rem;
  margin: 1rem;
}

.main-header h1 {
  font-weight: 900;
}

.main-about {
  font-weight: 500;
  font-size: 0.8rem;
}
```

We're done additionally you can add other components and pages like about me, projects etc..

![image](https://github-production-user-asset-6210df.s3.amazonaws.com/75468116/261019634-c7a3e677-8feb-4dae-9b9c-fe8fe4a42b00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230816%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230816T133310Z&X-Amz-Expires=300&X-Amz-Signature=a32d0f343de91395594bc0557ae785975841bdc7bf60477dd7e704f673e9f5a6&X-Amz-SignedHeaders=host&actor_id=75468116&key_id=0&repo_id=676061621)

> Consider checking out 👉 [🌐 Devsite](https://preetsuthar.me) | [🐱 Github](https://github.com/preetsuthar17)

That's it for this blog! Thanks for reading, I Preet Suthar sign out here!
