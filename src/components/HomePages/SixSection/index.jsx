const SixSection = () => {
  return (
    <div className=" bg-abu">
      <div className="container my-12 py-24">
        <div className="grid place-content-center">
          <span className="text-center font-semibold text-4xl mb-4">
            Bersertifikat Halal dan BPOM
          </span>
          <span className="text-center text-xl text-[#667085]">
            Produk kami sudah memiliki sertifikat halal resmi dan sudah melewati
          </span>
          <span className="text-center text-xl text-[#667085]">
            pengawasan Obat dan Makanan
          </span>
        </div>
        <div className="flex justify-center items-center gap-4 my-6">
          <button className="bg-hijau text-white font-semibold text-base px-5 py-3 rounded-lg">
            Sertifikat BPOM
          </button>
          <button className="bg-hijau text-white font-semibold text-base px-5 py-3 rounded-lg">
            Sertifikat Halal
          </button>
        </div>
      </div>
    </div>
  );
};

export default SixSection;
