import content from "@/assets/HomePages/Content.png";
import contentdua from "@/assets/HomePages/Content 02.png";

const ThirdSection = () => {
  return (
    <div className="md:container px-3 mb-12 md:mb-24">
      <div className="grid lg:grid-cols-2 gap-2 mt-12">
        <div className="grid place-content-center">
          <img src={content} alt="" />
        </div>
        <div className="grid mt-4 lg:mt-0 place-content-center">
          <span className="text-3xl text-center lg:text-left text-merah font-semibold">
            SEMUA BAHAN BAKU DIOLAH DENGAN TEKNOLOGI PALING MUTAKHIR
          </span>
          <span className="text-base text-[#667085] my-3">
            Para peneliti terus melakukan upaya-upaya pembaruan untuk menemukan
            solusi terbaik untuk dunia kesehatan. Seperti herbal yang berevolusi
            dari tradiosional ke modern. Dari konsumsi langsung bahan utuh
            (simplisia), kemudian ekstrak yang memisahkan senyawa aktif, sampai
            saat ini ditemukan teknologi baru bernama ekstrak terpurifikasi yang
            mampu memisahkan satu senyawa dari senyawa lainnya.
          </span>
          <span className="text-base text-[#667085] ">
            Teknologi ini lah yang kami gunakan saat ini, dan KAMILAH
            SATU-SATUNYA DI INDONESIA
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-2 mt-12">
        <div className="grid place-content-center">
          <span className="text-3xl text-center lg:text-left text-merah font-semibold">
            BEDA DARI HERBAL BIASA, INILAH KEUNGGULAN KAMI
          </span>
          <span className="text-base text-[#667085] my-3">
            -
            <span className="pl-2">
              Sudah menggunakan teknologi paling mutakhir
            </span>
          </span>
          <span className="text-base text-[#667085] my-3">
            -<span className="pl-2">Bahan baku ekstrak terpurifikasi</span>
          </span>
          <span className="text-base text-[#667085] my-3">
            -<span className="pl-2">100% alami tanpa campuran bahan kimia</span>
          </span>
          <span className="text-base text-[#667085] my-3">
            -
            <span className="pl-2">
              Bahan baku berkualitas premium ASLI INDONESIA
            </span>
          </span>
          <span className="text-base text-[#667085] my-3">
            -
            <span className="pl-2">
              Bisa didosis sesuai keluhan dan kebutuhan
            </span>
          </span>
          <span className="text-base text-[#667085] my-3">
            -<span className="pl-2">Halal</span>
          </span>
          <span className="text-base text-[#667085] my-3">
            -
            <span className="pl-2">
              Bisa konsultasi gratis dengan praktisi medis kami
            </span>
          </span>
          <span className="text-base text-[#667085] my-3">
            -
            <span className="pl-2">
              Didampingi selama pengobatan (atas izin konsumen)
            </span>
          </span>
        </div>
        <div className="grid place-content-center mb-12 lg:mb-0">
          <img src={contentdua} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
