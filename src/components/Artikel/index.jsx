const ArtikelComponents = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4">
        <div className="shadow-xl p-2 rounded-lg">
          <img
            src="https://source.unsplash.com/random"
            alt="Gambar Wisata"
            className="w-full rounded-lg"
          />
          <h1 className="text-2xl font-bold">herbal</h1>
          <h2 className="text-lg font-semibold">
            Manfaat Tanaman Herbal untuk Kesehatan
          </h2>
          <p className="text-gray-700">
            Artikel ini akan membahas tentang beberapa tanaman herbal yang
            memiliki manfaat positif untuk kesehatan manusia.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://source.unsplash.com/user/username"
              alt="Profil Penulis"
              className="w-10 h-10 rounded-full"
            />
            <p className="ml-2 text-gray-600">Ditulis oleh John Doe</p>
          </div>
        </div>

        <div className="shadow-xl p-2 rounded-lg">
          <img
            src="https://source.unsplash.com/random"
            alt="Gambar Produktivitas Kerja"
            className="w-full rounded-lg"
          />
          <h1 className="text-2xl font-bold">Product</h1>
          <h2 className="text-lg font-semibold">
            Magictech sebagai solusi alami kanker
          </h2>
          <p className="text-gray-700">
            Magictech merupakan paduan ekstrak terpurifikasi dari temu putih dan
            ekstrak kulit manggis.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://source.unsplash.com/user/username"
              alt="Profil Penulis"
              className="w-10 h-10 rounded-full"
            />
            <p className="ml-2 text-gray-600">Ditulis oleh Jane Smith</p>
          </div>
        </div>

        <div className="shadow-xl p-2 rounded-lg">
          <img
            src="https://source.unsplash.com/random"
            alt="Gambar Artikel 3"
            className="w-full rounded-lg"
          />
          <h1 className="text-2xl font-bold">Insights</h1>
          <h2 className="text-lg font-semibold">Fakta mengerikan kanker</h2>
          <p className="text-gray-700">
            Kanker adalah penyakit yang mengerikan dan mematikan. Setiap tahun,
            jutaan orang di seluruh dunia terkena kanker. Ada lebih dari 100
            jenis kanker yang berbeda
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://source.unsplash.com/user/username"
              alt="Profil Penulis"
              className="w-10 h-10 rounded-full"
            />
            <p className="ml-2 text-gray-600">Ditulis oleh John Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelComponents;
