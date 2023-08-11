const Order = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="lg:container px-3 py-6 md:py-8 lg:py-12">
        <div className="py-12">
          <span className="grid text-center my-6 text-xl md:text-2xl lg:text-4xl font-semibold">
            Belanja Sekarang
          </span>
          <span className="grid text-center text-base md:text-xl text-[#667085]">
            Nikmati manfaat kesehatan yang optimal dengan produk herbal kami
            yang aman
            <span>
              dan terpercaya. Pesan sekarang dan rasakan perbedaannya!
            </span>
          </span>
          <div className="flex justify-center items-center gap-4 my-6">
            <button className="bg-hijau px-5 py-3 text-white rounded-lg">
              Produk Kami
            </button>
            <button className="bg-hijau px-5 py-3 text-white rounded-lg">
              Paker Herbal Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
