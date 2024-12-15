import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Typed from "typed.js";

const Carousel = () => {
  const dataProduct = [
    {
      id: 1,
      product_name: "Cireng Hot Boom",
      product_image_large: "fotocirengisiayamsuir.jpg",
      product_image: "cirengggg.png",
      description: "Cireng Hot Boom dengan rasa pedas yang nikmat!",
    },
    {
      id: 2,
      product_name: "Pink Lava",
      product_image_large: "fotopinklavaa.jpg",
      product_image: "pinklavaaa.jpg",
      description: "Minuman segar dengan rasa strawberry lava.",
    },
  ];

  // Nomor telepon WhatsApp
  const whatsappNumber = "+62895324785230";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const [activeIndex, setActiveIndex] = useState(0);
  const typedRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % dataProduct.length);
  };

  useEffect(() => {
    if (typedRef.current) {
      typedRef.current.destroy();
    }

    typedRef.current = new Typed(`#typed-text-${activeIndex}`, {
      strings: [dataProduct[activeIndex].product_name],
      typeSpeed: 300,
      backSpeed: 50,
      loop: false,
      onComplete: () => {
        setTimeout(nextSlide, 1000);
      },
    });

    return () => {
      if (typedRef.current) typedRef.current.destroy();
    };
  }, [activeIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Container untuk slide */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {dataProduct.map((product, index) => (
          <div
            key={product.id}
            className="w-full h-screen flex-shrink-0 relative"
          >
            {/* Gambar besar */}
            <img
              src={product.product_image_large}
              alt={product.product_name}
              className="w-full h-screen object-cover"
            />
            {/* Overlay konten */}
            <div className="absolute inset-0 flex flex-col lg:flex-row lg:items-center text-white bg-black/50 justify-center items-center">
              {/* Gambar kecil */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end lg:order-2 lg:p-16">
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="w-40 h-56 lg:w-72 lg:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Teks */}
              <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-8 lg:p-16">
                <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-left">
                  Selamat datang di WishWave, <br />
                  Kami menyediakan <span id={`typed-text-${index}`}></span>
                </h1>
                <p className="text-base lg:text-lg mt-4 text-center lg:text-left">
                  {product.description}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition-all"
                >
                  <FaWhatsapp className="mr-2" />
                  Pesan Sekarang via WA
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol navigasi */}
      <button
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? dataProduct.length - 1 : prevIndex - 1
          )
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={() =>
          setActiveIndex((prevIndex) => (prevIndex + 1) % dataProduct.length)
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        &gt;
      </button>

      {/* Bullets indikator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {dataProduct.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-yellow-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
