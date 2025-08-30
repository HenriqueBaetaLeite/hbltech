"use client";
import Image from "next/image";

export default function Carroussel({
  images,
  title,
  currentIndex,
  prevImage,
  nextImage,
  goToImage,
  setIsModalOpen,
}) {
  return (
    <div className="relative bg-white h-48">
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full h-full block cursor-zoom-in"
      >
        <Image
          priority
          width={200}
          height={200}
          src={images[currentIndex]}
          alt={title}
          className="w-full h-48 object-cover transition-opacity duration-700"
        />
      </button>

      {/* Botões de Navegação */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-1 hover:bg-black/50 transition cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-1 hover:bg-black/50 transition cursor-pointer"
      >
        ›
      </button>

      {/* Indicadores de Ponto */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`transition-all w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-600 w-3 h-3" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
