"use client";

import MyLogo from "../components/MyLogo";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "@/app/data/products.json";

export default function Store() {
  return (
    <div className="min-h-screen bg-gray-300 p-6">
      {/* Cabeçalho */}
      <header className="text-center mb-8">
        <h1 className="text-6xl font-bold text-orange-500 mb-2">
          Boas vindas à nossa lojinha!
        </h1>
        <p className="text-gray-700 text-2xl max-w-xl mx-auto mb-4">
          Aqui você vai encontrar produtos impressos em 3D com material PLA,
          feitos com carinho e qualidade.
        </p>
        <p className="text-gray-700 text-2xl max-w-xl mx-auto">
          Caso tenha alguma dúvida sobre nossos produtos, entre em contato e vamos te ajudar!
          Ao realizar a compra, leia com atenção as instruções.
        </p>
      </header>

      {/* Grid de produtos */}
      {/* <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center"> */}
        <main className="grid gap-4 sm:gap-6 justify-items-center grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
