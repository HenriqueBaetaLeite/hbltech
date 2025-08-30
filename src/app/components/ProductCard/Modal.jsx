import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Modal({
  isOpen,
  onClose,
  images,
  currentIndex,
  prevImage,
  nextImage,
  fade,
  product,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={product}
          fill
          className={`object-contain transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Navegação */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 sm:p-3 hover:bg-black/70 transition cursor-pointer"
        >
          ‹
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 sm:p-3 hover:bg-black/70 transition cursor-pointer"
        >
          ›
        </button>

        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-3xl font-bold hover:text-gray-300 cursor-pointer"
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
}
