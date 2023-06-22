import Company from "@/assets/AboutPages/Image-14.png";
import LogoCompany from "@/assets/AboutPages/logo habbats.png";

const SecondSection = () => {
  return (
    <div className="lg:container px-3">
      <img src={Company} alt="" />
      <div className="pt-12 grid lg:grid-cols-2 gap-4 place-content-center place-items-center">
        <div>
          <span className="grid text-merah text-base font-semibold">
            Tentang Kami
          </span>
          <span className="grid my-4 font-semibold text-2xl  md:text-3xl lg:text-5xl">
            Visi & Misi
          </span>
          <span className="grid">
            PT. Habatussauda International(HABBATS) memiliki visi dalam
            mengangkat produk obat herbal khususnya obat herbal sunnah
            berkandung Habatussauda bersaing di tataran pasar obat modern
            International sehingga dapat dirasakan seluas-luasnya manfaat serta
            khasiatnya oleh seluruh umat manusia.
          </span>
          <span className="grid my-4">
            Untuk misi PT. Habatussauda International adalah menjadi pemimpin
            (leader) pasar dalam penyedia produk herbal Habatussauda baik di
            pasar domestik maupun regional bahkan International.
          </span>
          <span className="grid">
            PT. Habatussauda International berdiri sejak tahun 2005. Domisili
            perusahaan dan pabrik adalah di Jl. Cisaranteun Kulon No. 59 A,
            Arcamanik - Bandung, Jawa Barat.
          </span>
        </div>
        <div>
          <img src={LogoCompany} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
