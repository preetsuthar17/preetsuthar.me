---
title: Responsive Masonry Layout using only CSS
excerpt: Learn to create beautiful Pinterest layouts using only CSS.
author: Preet Suthar
date: "2024-12-25"
---

## Introduction

First of all let's talk what is a masonry layout. Well Masonry means "craft of building a structure with brick, stone, or similar material" - According to google definition.

Well if you ask me I'll say creating responsive and beautiful layouts in HTML with different sizes of elements.

In this article we are going to create a Image Gallery website using masonry layout which will be pretty and responsive.

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cz5k7dqncu0v5a97djlh.png)

## Let's get started!

Before learning to create masonry layouts let's learn how to make images responsive using CSS only.

## Making images responsive

Let's assume we have image in our website,

```html
<img
  class="image"
  src="https://images.unsplash.com/photo-1693761935441-ad0ffad6905b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
/>
```

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3nc2lohrj6hamh27o8pe.png)

Now to make this image responsive we have to use only two lines of css.

```css
img {
  max-width: 100%;
  height: auto;
}
```

just by using these two CSS lines we can make every image in our responsive. No matter what device width will get the `max-width` of image will always stay `100%` and we added `height: auto` so when width changes with device width it also updates the height by itself.

## Let's create masonry layout

It's time we create masonry layout. First of all let's add some images in our HTML

```html
<div class="image-gallery">
  <div class="image-card">
    <img
      src="https://images.unsplash.com/photo-1693761935441-ad0ffad6905b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="ShowCaseGallery"
    />
  </div>
  <div class="image-card">
    <img
      src="https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="ShowCaseGallery"
    />
  </div>
  <div class="image-card">
    <img
      src="https://images.unsplash.com/photo-1693165074962-ae564d6b16ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="ShowCaseGallery"
    />
  </div>
  <div class="image-card">
    <img
      src="https://images.unsplash.com/photo-1693754079764-d90b63861dd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="ShowCaseGallery"
    />
  </div>
  <div class="image-card">
    <img
      src="https://images.unsplash.com/photo-1693057205752-f7cabeaff629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="ShowCaseGallery"
    />
  </div>
  <div class="image-card">
    <img
      src="https://images.unsplash.com/photo-1693928626612-629e0b697ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="ShowCaseGallery"
    />
  </div>
</div>
```

Here I've added bunch of images from unsplash and all of them have different heights and widths.

Currently the images looks like this in straight line,

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lcvcd8nfsdwuuwlip42y.png)

Now we want images to be in row and also we want them to update as the device width changes.

We want layout to look something like this,

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nnp2kpr8eotlbkaqkk4h.png)

So we'll define number of columns to display in page, Let's write some css to make things looks beautiful.

```css
/* Parent container of .image-card */
.image-gallery {
  columns: 3;
  column-gap: 16px;
  margin: 1rem;
}
```

So we defined `3 columns` on page and we also gave `column-gap: 16px` so that it looks cleaner with bit of space around every `.image-card` we also added `margin: 1rem` so add some spacing around the entire container.

Let's target our `.image-card` in CSS and minor CSS.

```css
.image-card {
  position: relative;
  margin-bottom: 16px;
}
```

Our masonry layout is ready :D It's time to make it responsive with some `@media queries` Check out [this post](https://www.preetsuthar.me/posts/media-screens---css) to learn more about `@media queries`

```css
@media screen and (max-width: 1200px) {
  .image-gallery {
    columns: 3;
  }
}

@media screen and (max-width: 900px) {
  .image-gallery {
    columns: 2;
  }
}

@media screen and (max-width: 500px) {
  .image-gallery {
    columns: 1;
  }
}
```

And we're done!

![Small width preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/19gb00c9wvawo9ikosvi.png)

![Small width preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bwq0zrmoyr7s9kedxzvs.png)

## Wrapping up

It's is pretty basic to create masonry layout using only CSS and still you can spice it up by implementing Javascript and more feature.
