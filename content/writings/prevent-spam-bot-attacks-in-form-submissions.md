---
title: "Prevent Spam Bot Attacks in Form Submissions"
excerpt: "Easy way to stop spam bots from submitting forms"
author: "Preet Suthar"
date: "2025-05-21"
---

Spam bot attacks on forms can be a nuisance, leading to spam submissions and potential security risks. Here's a simple method to prevent spam bot attacks in form submissions using a hidden field.

### Step 1: Add a Hidden Field

Add a hidden field to your form. This field should be invisible to users but visible to bots. For example:

```jsx
const [honey, setHoney] = useState("");

<input
  type="text"
  value={honey}
  onChange={(e) => setHoney(e.target.value)}
  tabIndex="-1"
  area-hidden="true"
/>;
```

### Step 2: Validate the Hidden Field

When processing the form submission, check if the hidden field is empty. If it's not empty, it's likely a bot submission.

```jsx
const handleSubmit = (e) => {
  e.preventDefault();

  if (honey) {
    // This is a bot submission
    console.log("Spam bot detected!");
    return;
  }

  // Process the form submission
  console.log("Form submitted successfully!");
};
```

### Complete Example

```jsx
import React, { useState } from "react";

const Form = () => {
  const [honey, setHoney] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (honey) {
      console.log("Spam bot detected!");
      return;
    }

    console.log("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        tabIndex="-1"
        area-hidden="true"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

Actual users won't see the hidden field, but bots will fill it out, allowing you to filter out spam submissions easily. This method is simple and effective for preventing spam bot attacks in form submissions.

Read the actual Twitter thread: [Prevent spam bot attacks in form submissions — Twitter thread](https://x.com/preetsuthar17/status/1926188828169015371)
