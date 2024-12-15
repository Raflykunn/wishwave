import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Atur ikon default untuk marker menggunakan path lokal
const customIcon = new L.Icon({
  iconUrl: "/images/marker-icon.png", // Path relatif ke folder 'public/images'
  shadowUrl: "/images/marker-shadow.png", // Path relatif ke folder 'public/images'
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -15],
});

// Hook untuk memperbarui ukuran peta pada perubahan ukuran layar
const ResizeMap = () => {
  const map = useMap(); // Mendapatkan instance peta menggunakan useMap
  useEffect(() => {
    if (map) {
      map.invalidateSize(); // Memperbarui ukuran peta
    }
  }, [map]);

  return null;
};

const Contact = () => {
  const position = [-5.101336074338854, 119.53583197032161]; // Koordinat SMK MUTIARA ILMU

  // Nomor telepon WhatsApp
  const whatsappNumber = "+62895324785230";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="container mx-auto my-4 px-6">
      <h1 className="text-center text-4xl font-bold text-yellow-500 mb-6">
        Kontak Kami
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <MapContainer
            center={position}
            zoom={18}
            scrollWheelZoom={false}
            className="lg:w-full w-[500px] h-[400px] rounded-lg shadow-lg"
          >
            {/* Memastikan peta di-resize secara otomatis */}
            <ResizeMap />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>SMK Mutiara Ilmu</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="lg:w-1/2 lg:pl-12">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">
            Hubungi Kami
          </h3>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-800">
                Nomor Telepon
              </h4>
              <p className="text-gray-600 text-lg mt-2">+62 895-3247-85230</p>
            </div>
          </a>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600 text-lg mt-2">
              rflyrmdhn03@gmail.com@example.com
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800">
              Alamat Menjual
            </h4>
            <p className="text-gray-600 text-lg mt-2">
              Jl. Goa Ria Poros Laikang Sudiang No.Raya, Sudiang Raya, Makassar,
              Kota Makassar, Sulawesi Selatan 90552
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
