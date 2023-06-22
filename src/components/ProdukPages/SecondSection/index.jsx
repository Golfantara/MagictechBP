import Harmonix from "@/assets/ProdukPages/Image-1.png";
import Manggistech from "@/assets/ProdukPages/Image-2.png";
import Tempu from "@/assets/ProdukPages/Image-3.png";
import JNCcurcumin from "@/assets/ProdukPages/Image-4.png";
import JNCcurcuminKids from "@/assets/ProdukPages/Image-5.png";
import HFH from "@/assets/ProdukPages/Image-6.png";

const SecondSection = () => {
  return (
    <div>
      <div className="lg:container px-3 my-12 lg:my-24">
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-4">
          {/* First Produk */}
          <div>
            <img src={Harmonix} alt="" className="mb-4" />
            <span className=" bg-merah text-white px-3 py-1 rounded-full">
              NEW PRODUCT
            </span>
            <span className="grid my-4 text-2xl font-semibold">
              Harmonix - 30 KAPSUL
            </span>
            <span className="grid text-base text-[#667085]">
              Mengandung ekstrak terpurifikasi Alpha Mangostin dari Ekstrak
              Kulit Manggis.
            </span>
            <button className="bg-hijau text-white px-5 py-3 rounded-lg mt-4">
              Order Sekarang
            </button>
          </div>

          {/* Second Product */}
          <div>
            <img src={Manggistech} alt="" />
            <span className="grid my-4 text-2xl font-semibold">
              Manggistech - 30 KAPSUL
            </span>
            <span className=" text-merah text-lg">Promo Diskon 20%</span>
            <span className="grid text-base text-[#667085]">
              Mengandung ekstrak terpurifikasi Alpha Mangostin dari Ekstrak
              Kulit Manggis.
            </span>
            <button className="bg-hijau text-white px-5 py-3 rounded-lg mt-4">
              Order Sekarang
            </button>
          </div>

          {/* Third Product */}
          <div>
            <img src={Manggistech} alt="" />
            <span className="grid my-4 text-2xl font-semibold">
              Manggistech - 60 KAPSUL
            </span>
            <span className=" text-merah text-lg">Promo Diskon 20%</span>
            <span className="grid text-base text-[#667085]">
              Mengandung ekstrak terpurifikasi Alpha Mangostin dari Ekstrak
              Kulit Manggis.
            </span>
            <button className="bg-hijau text-white px-5 py-3 rounded-lg mt-4">
              Order Sekarang
            </button>
          </div>

          {/* Fourth Product */}
          <div>
            <img src={Tempu} alt="" />
            <span className="grid my-4 text-2xl font-semibold">
              Tempu - 60 KAPSUL
            </span>
            <span className=" text-merah text-lg">Promo Diskon 20%</span>
            <span className="grid text-base text-[#667085]">
              Mengandung ekstrak terpurifikasi Alpha Mangostin dari Ekstrak
              Kulit Manggis.
            </span>
            <button className="bg-hijau text-white px-5 py-3 rounded-lg mt-4">
              Order Sekarang
            </button>
          </div>

          {/* Fifth Product */}
          <div>
            <img src={Tempu} alt="" />
            <span className="grid my-4 text-2xl font-semibold">
              Tempu - 30 KAPSUL
            </span>
            <span className=" text-merah text-lg">Promo Diskon 20%</span>
            <span className="grid text-base text-[#667085]">
              Mengandung ekstrak terpurifikasi Alpha Mangostin dari Ekstrak
              Kulit Manggis.
            </span>
            <button className="bg-hijau text-white px-5 py-3 rounded-lg mt-4">
              Order Sekarang
            </button>
          </div>

          {/* Six Product */}
          <div>
            <img src={JNCcurcumin} alt="" />
            <span className="grid my-4 text-2xl font-semibold">
              JNC Curcumin - Women
            </span>
            <span className="grid text-base text-[#667085]">
              Ekstrak curcumin terpurifikasi yang ditambah madu dengan dosis
              yang disesuaikan untuk mengatasi masalah kesehatan reproduksi
              perempuan
            </span>
            <button className="bg-hijau text-white px-5 py-3 rounded-lg mt-4">
              Order Sekarang
            </button>
          </div>

          {/* Seven Product */}
          <div>
            <img src={JNCcurcuminKids} alt="" />
            <span className="grid my-4 text-2xl font-semibold">
              JNC Curcumin - Kids
            </span>
            <span className="grid text-base text-[#667085]">
              Ekstrak curcumin terpurifikasi yang ditambah madu dengan dosis
              yang disesuaikan untuk mengatasi masalah kesehatan reproduksi
              perempuan
            </span>
            <button className="bg-hijau text-white px-5 py-3 rounded-lg mt-4">
              Order Sekarang
            </button>
          </div>

          {/* Eight Product */}
          <div>
            <img src={HFH} alt="" />
            <span className="grid my-4 text-2xl font-semibold">
              Honey For Honey
            </span>
            <span className="grid text-base text-[#667085]">
              Ekstrak curcumin terpurifikasi yang ditambah madu dengan dosis
              yang disesuaikan untuk mengatasi masalah kesehatan reproduksi
              perempuan
            </span>
            <button className="bg-hijau text-white px-5 py-3 rounded-lg mt-4">
              Order Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
