import Image from "next/image";

export default function Modal({
  images,
  title,
  currentIndex,
  prevImage,
  nextImage,
  fade,
  setIsModalOpen,
}) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative max-w-full max-h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
      >
        <Image
          priority
          width={800}
          height={800}
          src={images[currentIndex]}
          alt={title}
          className={`object-contain max-h-screen max-w-full transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Botões de Navegação no Modal */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition cursor-pointer"
        >
          ‹
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition cursor-pointer"
        >
          ›
        </button>

        {/* Fechar Modal */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 cursor-pointer"
        >
          ×
        </button>
      </div>
    </div>
  );
}
