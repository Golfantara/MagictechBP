import produk from "@/components/ProdukPages/DataProduk";

const SecondSection = () => {
  return (
    <div>
      <div className="lg:container px-3 my-12 lg:my-24">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {produk.map((product, index) => (
            <div
              className="full-shadow grid lg:block p-2 lg:p-4 rounded-lg"
              key={index}
            >
              <img src={product.image} alt={product.title} className="mb-4" />
              {product.label && (
                <span className="bg-merah text-white px-3 py-1 rounded-full">
                  {product.label}
                </span>
              )}
              <span className="grid my-4 text-2xl font-semibold">
                {product.title}
              </span>
              {product.promo && (
                <span className="text-merah text-lg">{product.promo}</span>
              )}
              <span className="grid text-base text-[#667085]">
                {product.description}
              </span>
              <button className="bg-hijau text-white px-5 py-3 rounded-lg mt-4">
                Order Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
