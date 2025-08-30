import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect } from "react";

import Carroussel from "./Carroussel";
import Modal from "./Modal";

export default function ProductCard({ product }) {
  const { images, title, price, description, buyLink } = product;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fade, setFade] = useState(true);

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  const goToImage = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    if (isHovered) return; // pausa autoplay se hover
    const interval = setInterval(() => {
      nextImage();
    }, 12000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <div
      className="w-72 bg-orange-300 rounded-2xl shadow-md overflow-hidden border transform transition duration-300 hover:shadow-xl hover:scale-105 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carrossel de Imagens */}
      <Carroussel
        images={images}
        title={title}
        currentIndex={currentIndex}
        prevImage={prevImage}
        nextImage={nextImage}
        goToImage={goToImage}
        setIsModalOpen={setIsModalOpen}
      />

      {/* Conteúdo */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-blue-600 text-xl font-bold mt-2">{price} + frete</p>
        <p className="text-black text-sm font-bold mt-2">{description}</p>

        <a href={buyLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition cursor-pointer">
            <ShoppingCartIcon className="h-5 w-5" />
            Comprar
          </button>
        </a>
      </div>

      {/* Modal / Lightbox com Fade */}
      {isModalOpen && (
        <Modal
          images={images}
          title={title}
          currentIndex={currentIndex}
          prevImage={prevImage}
          nextImage={nextImage}
          fade={fade}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}
