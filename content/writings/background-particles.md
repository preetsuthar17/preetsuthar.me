---
title: Animated Background Particles in React
excerpt: Learn how to create a visually stunning animated background particles component using React and TypeScript.
author: Preet Suthar
date: "2023-12-25"
---

### Introduction

Adding interactive and animated backgrounds can elevate the user experience of any web application. In this post, we will explore how to create a customizable animated background particles component in React using TypeScript. The component will support various properties for customization, making it versatile for different use cases.

### Features

The `BackgroundParticles` component provides:

- Fully animated particle effects.
- Customization options for particle quantity, size, color, movement, and more.
- Performance optimization through efficient canvas rendering.
- Mouse interaction for dynamic particle behavior.

Let’s dive into the implementation step by step.

---

### Step 1: Setting Up the Component

We’ll start by creating the `BackgroundParticles` component with basic props and hooks to manage canvas rendering.

```js
import React, { useEffect, useRef, useState } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

const BackgroundParticles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}) => {
  interface MousePosition {
    x: number;
    y: number;
  }

  const MousePosition = (): MousePosition => {
    const [mousePosition, setMousePosition] =
      useState <
      MousePosition >
      {
        x: 0,
        y: 0,
      };

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return mousePosition;
  };

  // Rest of the component follows...
};

export default BackgroundParticles;
```

---

### Step 2: Managing the Canvas and Particles

The component uses a `canvas` element to render particles. We handle rendering and animation through `requestAnimationFrame` for smooth transitions.

Here’s how we initialize the canvas and draw the particles:

```js
const canvasRef = useRef<HTMLCanvasElement>(null);
const canvasContainerRef = useRef<HTMLDivElement>(null);
const context = useRef<CanvasRenderingContext2D | null>(null);
const circles = useRef<any[]>([]);
const mousePosition = MousePosition();
const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

useEffect(() => {
  if (canvasRef.current) {
    context.current = canvasRef.current.getContext("2d");
  }
  initCanvas();
  animate();
  window.addEventListener("resize", initCanvas);

  return () => {
    window.removeEventListener("resize", initCanvas);
  };
}, [color]);

const initCanvas = () => {
  resizeCanvas();
  drawParticles();
};

const resizeCanvas = () => {
  if (canvasContainerRef.current && canvasRef.current && context.current) {
    circles.current.length = 0;
    canvasSize.current.w = canvasContainerRef.current.offsetWidth;
    canvasSize.current.h = canvasContainerRef.current.offsetHeight;
    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;
    canvasRef.current.style.width = `${canvasSize.current.w}px`;
    canvasRef.current.style.height = `${canvasSize.current.h}px`;
    context.current.scale(dpr, dpr);
  }
};
```

---

### Step 3: Particle Animation

The animation logic determines how the particles move and interact with the mouse position.

```js
const animate = () => {
  clearContext();
  circles.current.forEach((circle, i) => {
    const edge = [
      circle.x + circle.translateX - circle.size,
      canvasSize.current.w - circle.x - circle.translateX - circle.size,
      circle.y + circle.translateY - circle.size,
      canvasSize.current.h - circle.y - circle.translateY - circle.size,
    ];
    const closestEdge = edge.reduce((a, b) => Math.min(a, b));
    const remapClosestEdge = parseFloat(
      remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
    );
    if (remapClosestEdge > 1) {
      circle.alpha += 0.02;
      if (circle.alpha > circle.targetAlpha) {
        circle.alpha = circle.targetAlpha;
      }
    } else {
      circle.alpha = circle.targetAlpha * remapClosestEdge;
    }
    circle.x += circle.dx + vx;
    circle.y += circle.dy + vy;
    circle.translateX +=
      (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
      ease;
    circle.translateY +=
      (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
      ease;

    drawCircle(circle, true);

    if (
      circle.x < -circle.size ||
      circle.x > canvasSize.current.w + circle.size ||
      circle.y < -circle.size ||
      circle.y > canvasSize.current.h + circle.size
    ) {
      circles.current.splice(i, 1);
      const newCircle = circleParams();
      drawCircle(newCircle);
    }
  });
  window.requestAnimationFrame(animate);
};
```

---

### Step 4: Using the Component

To use the component, simply import and render it in your application.

```js
<div className="w-screen h-screen absolute">
  <BackgroundParticles quantity={300} />
</div>
```

---

### Conclusion

The `BackgroundParticles` component is a flexible and visually appealing feature to add to any React application. With its customizable properties, you can tweak it to suit a variety of contexts, from landing pages to dashboard backgrounds.

Feel free to experiment with the settings and integrate it into your next project.
