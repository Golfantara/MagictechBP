import BpomHalal from "@/assets/BpomPages/Image-7.png";

const FirstSection = () => {
  return (
    <div>
      <div className="container my-24">
        <div className="my-12 grid lg:grid-cols-2 place-content-center place-items-center">
          <div>
            <span className="grid my-4 text-5xl font-semibold">
              Produk kami sudah <span> memiliki sertifikat halal </span> & BPOM
              resmi.
            </span>
            <span className="grid text-xl text-[#667085]">
              Produk kami sudah memiliki sertifikat halal resmi
              <span>
                dengan
                <span className="text-hijau"> No. 0013008813418</span> dan sudah
                melewati
              </span>
              <span> pengawasan Obat dan Makanan dengan no izin edar</span>
              <span className="text-hijau">POM TR183311441.</span>
            </span>
            <div className=" my-6 grid grid-cols-2 place-content-center place-items-center">
              <button className="bg-hijau px-5 py-3 text-white rounded-lg">
                Sertifikat Bpom
              </button>
              <button className="bg-hijau px-5 py-3 text-white rounded-lg">
                Sertifikat Halal
              </button>
            </div>
          </div>
          <div>
            <img src={BpomHalal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
