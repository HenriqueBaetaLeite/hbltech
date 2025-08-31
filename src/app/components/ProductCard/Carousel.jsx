import Image from "next/image";
import { useState, useEffect } from "react";

export default function Carousel({ images, title, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

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

  const goToImage = (index) => {
    setFade(false);
    setTimeout(() => setCurrentIndex(index), 200);
    setFade(true);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextImage, 9000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Swipe
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) nextImage();
    if (touchStart - touchEnd < -50) prevImage();
    setTouchStart(null);
  };

  const handleClick = () => onImageClick(currentIndex);

  return (
    <div
      className="relative bg-white h-48 cursor-zoom-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={handleClick}
        className="w-full h-full block cursor-zoom-in"
      >
        <Image
          src={images[currentIndex]}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </button>

      {/* Navegação */}
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

      {/* Indicadores */}
      {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`transition-all w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-600 w-3 h-3" : "bg-gray-300"
            } cursor-pointer`}
          />
        ))}
      </div> */}
    </div>
  );
}
