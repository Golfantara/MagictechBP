import satu from "@/assets/ArtikelPages/Image-8.png";
import dua from "@/assets/ArtikelPages/Image-9.png";
import tiga from "@/assets/ArtikelPages/Image-10.png";

const ArtikelComponents = () => {
  return (
    <div className="md:container px-3">
      <span className="grid text-center my-6 text-xl md:text-3xl lg:text-4xl font-semibold">
        Artikel dan wawasan
      </span>
      <span className="grid text-center text-base my-4 text-[#667085] md:text-lg lg:text-xl">
        Temukan manfaat kesehatan yang luar biasa dari penggunaan herbal alami
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="shadow-xl p-6 rounded-lg">
          <img src={satu} alt="" className="w-full rounded-lg" />
          <h1 className="text-sm text-merah font-semibold py-3">herbal</h1>
          <h2 className="text-2xl font-semibold py-3">
            Manfaat Tanaman Herbal untuk Kesehatan
          </h2>
          <p className="text-base text-gray-500">
            Artikel ini akan membahas tentang beberapa tanaman herbal yang
            memiliki manfaat positif untuk kesehatan manusia.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://source.unsplash.com/user/username"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-col">
              <p className="ml-2 text-gray-900">Olivia Rhye</p>
              <p className="ml-2 text-gray-500">20 jan 2022</p>
            </div>
          </div>
        </div>

        <div className="shadow-xl p-6 rounded-lg">
          <img src={dua} alt="" className="w-full rounded-lg" />
          <h1 className="text-sm text-merah font-semibold py-3">herbal</h1>
          <h2 className="text-2xl font-semibold py-3">
            Manfaat Tanaman Herbal untuk Kesehatan
          </h2>
          <p className="text-base text-gray-500">
            Artikel ini akan membahas tentang beberapa tanaman herbal yang
            memiliki manfaat positif untuk kesehatan manusia.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://source.unsplash.com/user/username"
              alt="Profil Penulis"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-col">
              <p className="ml-2 text-gray-900">Phoenix Baker</p>
              <p className="ml-2 text-gray-500">19 jan 2022</p>
            </div>
          </div>
        </div>

        <div className="shadow-xl p-6 rounded-lg">
          <img src={tiga} alt="" className="w-full rounded-lg" />
          <h1 className="text-sm text-merah font-semibold py-3">herbal</h1>
          <h2 className="text-2xl font-semibold py-3">
            Manfaat Tanaman Herbal untuk Kesehatan
          </h2>
          <p className="text-base text-gray-500">
            Artikel ini akan membahas tentang beberapa tanaman herbal yang
            memiliki manfaat positif untuk kesehatan manusia.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://source.unsplash.com/user/username"
              alt="Profil Penulis"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-col">
              <p className="ml-2 text-gray-900">Lana Steinar</p>
              <p className="ml-2 text-gray-500">20 jan 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelComponents;
