import React from "react";

const Event = () => {
  return (
    <div className="my-4 px-6" id="event">
      {/* Judul Event */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-3">Acara</h1>
        <p className="text-lg text-gray-700">
          Segera datang dan meriahkan Market Day pada 18 Desember 2024!
        </p>
      </div>

      {/* Deskripsi Event dengan gambar di kanan */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Deskripsi Tentang Market Day */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Tentang Market Day
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Market Day adalah acara tahunan yang sangat dinantikan oleh banyak
            orang! Pada tanggal 18 Desember 2024, kami akan mempersembahkan
            berbagai produk unggulan dari para siswa.
          </p>
          <p className="text-lg text-gray-700">
            Di Market Day, Anda akan menemukan produk-produk hasil kreasi dari
            siswa kelas XII. Selain itu, ada juga pementasan drama dari kelas XI
            dengan tema <b>bullying</b> serta pameran karya seni dari kelas X
            yang tentunya tidak kalah menarik. Catat tanggalnya dan mari kita
            meriahkan acara ini pada 18 Desember 2024, yang akan diadakan di SMK
            Mutiara Ilmu Makassar!
          </p>
        </div>

        {/* Gambar Event */}
        <div className="lg:w-1/2">
          <img
            src="projekpkkkkkkkkkk.jpeg"
            alt="Market Day Event"
            className="w-full h-auto rounded-lg shadow-xl"
          />
          {/* Sumber gambar */}
          <small className="block text-center text-sm text-gray-500 mt-2">
            Ilustrasi Market Day, sumber:{" "}
            <a
              href="https://mutiarailmu.sch.id/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-18-at-17.51.07-1280x800.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              mutiarailmu.sch.id
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Event;
