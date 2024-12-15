import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Fungsi untuk membuat slug dari nama produk
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const Product = () => {
  // Data dummy untuk produk
  const [products] = useState([
    {
      id: 1,
      name: "Cireng Hot Boom",
      description:
        "Rasakan kelezatan Cireng dengan isian ayam suwir pedas yang menggugah selera.",
      image: "cirengggg.png",
    },
    {
      id: 2,
      name: "Pink Lava",
      description:
        "Minuman segar dengan rasa unik yang memberikan kesan manis dan menyegarkan.",
      image: "pinklavaaa.jpg",
    },
  ]);

  const navigate = useNavigate(); // Untuk navigasi

  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`); // Navigasi ke halaman detail produk menggunakan slug
  };

  return (
    <div className="my-4" id="product">
      <h1 className="text-center mb-8 text-4xl font-bold text-yellow-500">
        Produk Kami
      </h1>

      <div className="flex justify-center gap-8 flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-80 mb-8 hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => handleProductClick(createSlug(product.name))} // Menangani klik produk dengan slug
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg transform transition-all duration-500 hover:shadow-2xl group h-full">
              {/* Kontainer gambar */}
              <div className="relative w-full h-72 group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Detail Produk */}
              <div className="text-center p-6 bg-gradient-to-b from-yellow-500 to-yellow-600 text-white rounded-b-3xl h-full">
                <h5 className="text-2xl font-semibold">{product.name}</h5>
                <p className="text-sm">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
