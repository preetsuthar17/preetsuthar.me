'use client';

import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import ExternalOptimizedImage from './ExternalOptimizedImage';
import designs from '@/data/designs';

export default function Design() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const categories = ['All', 'Product Design', 'Web Design'];
  
  const filteredDesigns = selectedCategory === 'All' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

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
  }, [selectedImage]);

  return (
    <>
      <section className="flex w-full flex-col items-center gap-12 text-left">
        <div className="flex w-full flex-col gap-8">
          <div className="px-10">
            <h2 className="text-lg tracking-tight">Design</h2>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-sm transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-[var(--blue-color)] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="px-10">
            <div className="flex flex-col gap-6">
              {filteredDesigns.map((design) => (
                <div
                  key={design.id}
                  className="group cursor-pointer"
                  onClick={() => openModal(design)}
                >
                  <div className="relative w-full overflow-hidden bg-gray-50 transition-transform duration-300">
                    <ExternalOptimizedImage
                      src={design.imageUrl}
                      alt={`${design.category} design`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      quality={45}
                    />
                  </div>
                </div>
              ))}
            </div>

            {filteredDesigns.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>No designs found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <FiX size={32} />
          </button>

          <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <ExternalOptimizedImage
              src={selectedImage.imageUrl}
              alt={`${selectedImage.category} design`}
              width={1200}
              height={800}
              className="max-w-full  rounded-2xl max-h-full object-contain"
              quality={95}
              priority={true}
            />
          </div>

          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeModal}
            aria-label="Close modal"
          />
        </div>
      )}
    </>
  );
}
