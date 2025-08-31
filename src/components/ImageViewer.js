import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageViewer = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <div 
                    className="relative max-w-full max-h-full w-full h-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
                        aria-label="Close image viewer"
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onPrev();
                                }}
                                className="absolute left-4 sm:left-8 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onNext();
                                }}
                                className="absolute right-4 sm:right-8 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
                                aria-label="Next image"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </>
                    )}

                    {/* Current image */}
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Project view ${currentIndex + 1}`}
                        className="max-w-full max-h-[90vh] object-contain"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onClick={onNext}
                    />

                    {/* Image counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageViewer;
