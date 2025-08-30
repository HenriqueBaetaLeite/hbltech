"use client";

import MyLogo from "../components/MyLogo";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "@/app/data/products.json";

export default function Store() {
  return (
    <div className="min-h-screen bg-gray-300 p-6">
      {/* Cabeçalho */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-2">
          Boas-vindas à nossa lojinha!
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Aqui você vai encontrar produtos impressos em 3D com material PLA,
          feitos com carinho e qualidade.
        </p>
      </header>

      {/* Grid de produtos */}
      <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
