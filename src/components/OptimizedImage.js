import Image from "next/image";
import { useState } from "react";

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  quality = 75,
  ...props
}) => {
  const [isLoading, setLoading] = useState(true);
  const isLocalImage = src.startsWith("/");

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      unoptimized={true}
      className={`
        duration-700 ease-in-out
        ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }
        ${className}
      `}
      onLoad={() => setLoading(false)}
      loading="lazy"
      {...(isLocalImage
        ? {
            placeholder: "blur",
            blurDataURL:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23dedede'/%3E%3C/svg%3E",
          }
        : {})}
      {...props}
    />
  );
};
