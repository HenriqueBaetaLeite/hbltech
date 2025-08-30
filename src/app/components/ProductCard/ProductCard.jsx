import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Carousel from "./Carousel";
import Modal from "./Modal";

export default function ProductCard({ product }) {
  const { images, title, price, description, buyLink } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => {
    setFade(false);
    setTimeout(
      () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
      200
    );
    setFade(true);
  };
  const nextImage = () => {
    setFade(false);
    setTimeout(
      () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
      200
    );
    setFade(true);
  };

  return (
    <div className="w-72 bg-orange-300 rounded-2xl shadow-md overflow-hidden border transform transition duration-300 hover:shadow-xl hover:scale-105 relative">
      <Carousel images={images} title={title} onImageClick={openModal} />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-blue-600 text-xl font-bold mt-2">{price}</p>
        <p className="text-black text-sm font-bold mt-2">{description}</p>

        <a href={buyLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition cursor-pointer">
            <ShoppingCartIcon className="h-5 w-5" />
            Comprar
          </button>
        </a>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentIndex}
        prevImage={prevImage}
        nextImage={nextImage}
        fade={fade}
        product={title}
      />
    </div>
  );
}
