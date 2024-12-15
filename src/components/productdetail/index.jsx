import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";

// Fungsi untuk membuat slug dari nama produk
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const ProductDetail = () => {
  const { productSlug } = useParams(); // Mengambil slug dari URL

  // Data dummy produk
  const productDetails = [
    {
      name: "Cireng Hot Boom",
      description:
        "Rasakan kelezatan Cireng dengan isian ayam suwir pedas yang menggugah selera.",
      image: "/fotocirengisiayamsuir.jpg",
    },
    {
      name: "Pink Lava",
      description:
        "Minuman segar dengan rasa unik yang memberikan kesan manis dan menyegarkan.",
      image: "/fotopinklavaa.jpg",
    },
  ];

  // Nomor telepon WhatsApp
  const whatsappNumber = "+62895324785230";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Mencari produk berdasarkan slug
  const product = productDetails.find(
    (p) => createSlug(p.name) === productSlug
  );

  if (!product) {
    return (
      <p className="text-center text-xl font-semibold text-red-600">
        Product not found
      </p>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-600 mb-4">
        {product.name}
      </h1>
      <div className="relative mb-6">
        <img
          src={product.image} // Pastikan path relatif sesuai dengan lokasi gambar di folder public
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
        />
      </div>
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <div className="flex justify-end">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300"
        >
          <FaWhatsapp className="mr-2" />
          Pesan Sekarang via WA
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
