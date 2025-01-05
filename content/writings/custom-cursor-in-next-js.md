---
title: Custom Cursor in Next.Js
excerpt: How to make a custom cursor in Next.Js website.
author: Preet Suthar
date: "2023-12-26"
---

![Custom cursor](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kcoaw3ccq6yz2byynvbk.png)

Creating a custom cursor in next js website is as easy as creating a component in next js. we can create a cursor component and then import it in `_app.js` to make it globally accessible.

## Files 📂

We we'll need to create two files or maybe just one.

- `FlareCursor.js` (Main custom cursor component)
- `style.css` (It could be your own style file)
- `_app.js` (It is prebuilt file in next js)

Let's get started!

## Coding time 🚀

First of all let's create the main component,

`FlareCusror.js`

```js
import React, { useState, useEffect } from "react";

// This functional component represents a custom cursor with a flare effect.
function FlareCursor() {
  // State to track the current cursor position (x, y coordinates).
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // State to track whether the cursor is over a clickable element.
  const [isPointer, setIsPointer] = useState(false);

  // Event handler for the mousemove event.
  const handleMouseMove = (e) => {
    // Update the cursor position based on the mouse coordinates.
    setPosition({ x: e.clientX, y: e.clientY });

    // Get the target element that the cursor is currently over.
    const target = e.target;

    // Check if the cursor is over a clickable element by inspecting the cursor style.
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer",
    );
  };

  // Set up an effect to add and remove the mousemove event listener.
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount.

  // Calculate the size of the flare based on whether the cursor is over a clickable element.
  const flareSize = isPointer ? 0 : 30;

  // Adjust the cursor position to create a visual effect when over a clickable element.
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  // Render the custom cursor element with dynamic styles based on cursor state.
  return (
    <div
      className={`flare ${isPointer ? "pointer" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    ></div>
  );
}

// Export the FlareCursor component to be used in other parts of the application.
export default FlareCursor;
```

We have successfully created the custom cursor component, now let's style it.

`style.css`

```css
.flare {
  position: fixed;
  border: 2px solid #ffffff2b;
  border-radius: 50%;
  mix-blend-mode: screen;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 999999 !important ;
  backdrop-filter: blur(1px);
  background-color: #0000005e;
  transition:
    width 0.2s ease-in-out,
    height 0.2s ease-in-out;
  cursor: none !important; /* Let's hide the default cursor so it looks way better */
}

/* We need to remove this custom cursor in mobile devices */
@media screen and (max-width: 768px) {
  .flare {
    width: 0;
    height: 0;
    transition:
      width 0.2s ease-in-out,
      height 0.2s ease-in-out,
      opacity 0.2s ease-in-out;
  }
}
.flare.pointer {
  opacity: 0 !important;
  transition:
    width 0.2s ease-in-out,
    height 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
}
```

So we have successfully created and styled our component now let's head over to the `_app.js` to import it all.

`_app.js`

```jsx
import "../src/styles/globals.css"; // Make sure to change this path to your own css file path.

import FlareCursor from "../src/components/FlareCursor"; // Don't forget to update this path to your own component file.

// Now we can add the component in return () code should look like this.

return <Component {...pageProps} />;
```

```js
// Now before the <Component/> add this code,

<>
  <FlareCursor />
</>
```

And Tadaaa!! 🎉 We're done now restart your dev server `npm run dev` and you should be good to go!
