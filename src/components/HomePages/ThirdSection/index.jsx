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
            Kolaborasi khasiat yang dahsyat
          </span>
          <span className="text-base text-[#667085] my-3">
            Dunia herbal terus menerus berkembang untuk menemukan solusi terbaik
            bagi masyarakat. Seperti penggunaan bahan temu putih yang dikenal
            sebagai antikanker.
          </span>
          <span className="text-base text-[#667085] ">
            Dahulu, temu putih dikonsumsi langsung seperti digeprek, diseduh,
            atau lainya. Kemudian hadirlah ekstraksi yang menghasilkan ekstrak
            temu putih. namun, nyatanya konsumsi temu putih baik secara langsung
            maupun dari ekstraknya belum cukup menjadi solusi karena masih
            bercampur dengan senyawa lain.
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-2 mt-12">
        <div className="grid place-content-center">
          <span className="text-3xl text-center lg:text-left text-merah font-semibold">
            Inovasi Terbaru
          </span>
          <span className="text-base text-[#667085] my-3">
            kini telah hadir teknologi yang bisa mengekstrak kembali hasil
            ekstraksi tersebut sehingga menghasilkan kinerja herbal yang lebih
            optimal yang kemudian disebut ekstrak terpurifikasi.
          </span>
          <span className="text-base text-[#667085] mb-4 lg:mb-0">
            Magictech merupakan paduan ekstrak terpurifikasi dari temu putih dan
            ekstrak kulit manggis yang dapat bekerja saling menguatkan dan
            melengkapi saat dikonsumsi bersama.
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
