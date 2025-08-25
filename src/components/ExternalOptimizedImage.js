import { Loader } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export const ExternalOptimizedImage = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  quality = 45,
  priority = false,
  ...props
}) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center border border-gray-200 bg-gray-100 ${className}`}
        style={{ width, height }}
      >
        <div className="text-center text-gray-500">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <p className="mt-2 text-sm">Failed to load image</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <Image
        alt={alt}
        className={`transition-all duration-700 ease-in-out ${
          isLoading
            ? 'scale-100 opacity-70 blur-sm'
            : 'scale-100 opacity-100 blur-0'
        } ${className}`}
        height={height}
        onError={() => {
          setLoading(false);
          setHasError(true);
        }}
        onLoad={() => setLoading(false)}
        priority={priority}
        quality={quality}
        src={src}
        unoptimized={true}
        width={width}
        {...props}
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <Loader className="animate-spin" />
        </div>
      )}
    </div>
  );
};

export default ExternalOptimizedImage;
