import React from "react";

const About = () => {
  return (
    <div className="container mx-auto my-4 px-4" id="about">
      <h1 className="text-center text-4xl font-bold text-yellow-500 mb-8">
        Tentang Kami
      </h1>

      <div className="flex flex-col lg:flex-row items-center">
        {/* Gambar Tentang Kami */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="anggota-wishwave.jpg"
            alt="Tentang Kami"
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <small className="block text-center text-sm text-gray-500 mt-2">
            Ilustrasi anggota WishWave melakukan kerja kelompok
          </small>
        </div>

        {/* Deskripsi Tentang Kami */}
        <div className="lg:w-1/2 lg:pl-12">
          <h3 className="text-2xl font-bold text-yellow-500">
            Tentang Tim Kami
          </h3>
          <p className="mt-4 text-lg">
            Kami adalah kelompok PKK yang membuat website Wishwave untuk
            memperkenalkan produk unggulan kami, seperti cireng pedas, kepada
            pelanggan.
          </p>

          <h3 className="text-2xl font-bold text-yellow-500 mt-6">Visi Kami</h3>
          <p className="mt-4 text-lg">
            Menjadi platform terbaik untuk memperkenalkan produk PKK dengan cara
            yang kreatif dan menarik.
          </p>

          <h3 className="text-2xl font-bold text-yellow-500 mt-6">Misi Kami</h3>
          <ul className="list-disc pl-5 mt-4 text-lg">
            <li>Memperkenalkan produk PKK kepada lebih banyak orang.</li>
            <li>Memberikan pengalaman belanja yang mudah dan menyenangkan.</li>
            <li>
              Terus berinovasi untuk produk dan pelayanan yang lebih baik.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
