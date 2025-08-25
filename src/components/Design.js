'use client';

import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import designs from '@/data/designs';
import ExternalOptimizedImage from './ExternalOptimizedImage';

export default function Design() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Product Design', 'Web Design'];

  const filteredDesigns =
    selectedCategory === 'All'
      ? designs
      : designs.filter((design) => design.category === selectedCategory);

  const openModal = (design) => {
    setSelectedImage(design);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && selectedImage) {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [selectedImage, closeModal]);

  return (
    <>
      <section className="flex w-full flex-col items-center gap-12 text-left">
        <div className="flex w-full flex-col gap-8">
          <div className="px-10">
            <h2 className="text-lg tracking-tight">Design</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  className={`px-3 py-1 text-sm transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="px-10">
            <div className="flex flex-col gap-6">
              {filteredDesigns
                .sort((a, b) => b.id - a.id)
                .map((design) => (
                  <div
                    className="group cursor-pointer border"
                    key={design.id}
                    onClick={() => openModal(design)}
                  >
                    <div className="relative w-full overflow-hidden bg-gray-50 transition-transform duration-300">
                      <ExternalOptimizedImage
                        alt={`${design.category} design`}
                        className="h-auto w-full object-cover"
                        height={600}
                        quality={45}
                        src={design.imageUrl}
                        width={800}
                      />
                    </div>
                  </div>
                ))}
            </div>

            {filteredDesigns.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                <p>No designs found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 p-2 text-white transition-colors hover:text-gray-300"
            onClick={closeModal}
          >
            <FiX size={32} />
          </button>

          <div className="relative flex h-full max-h-[90vh] w-full max-w-[90vw] items-center justify-center p-4">
            <ExternalOptimizedImage
              alt={`${selectedImage.category} design`}
              className="max-h-full max-w-full rounded-2xl object-contain"
              height={800}
              priority={true}
              quality={95}
              src={selectedImage.imageUrl}
              width={1200}
            />
          </div>

          <div
            aria-label="Close modal"
            className="-z-10 absolute inset-0"
            onClick={closeModal}
          />
        </div>
      )}
    </>
  );
}
