import magictech from "@/assets/HomePages/manggistech-tempu.png";

const Promo = () => {
  return (
    <div className="md:container px-3 mt-12">
      <div className="mb-12">
        <span className="grid mb-2 md:mb-4 lg:mb-6 text-base text-merah">
          Promo Terbatas
        </span>
        <span className="grid mb-2 md:mb-4 lg:mb-6 text-xl md:text-3xl lg:text-5xl font-semibold">
          Promo super solusi kanker.
        </span>
        <span className="grid text-lg md:text-xl text-[#667085]">
          Khusus buat kamu yang beli sekarang, bisa dapet harga miring, buruan
          order dan
        </span>
        <span className="text-lg md:text-xl text-[#667085]">
          dapeting potongan harganya sebelum kehabisan
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center items-center">
        <div>
          <img src={magictech} alt="" />
        </div>

        <div className="grid place-content-center md:place-content-end my-4 md:my-0 md:mr-6">
          <div className="grid border full-shadow rounded-xl p-4 max-w-[325px]">
            <span className="grid text-base">Harga awal</span>
            <span className="grid text-xl text-merah ml-2 font-bold line-through">
              Rp. 1.120.000
            </span>
            <span className="grid text-5xl mb-4 ml-3 font-bold">Rp. 800rb</span>
            <div className="flex p-3">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span className="ml-2">Manggistech isi 60</span>
            </div>
            <div className="flex p-3">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span className="ml-2">Tempu isi 60</span>
            </div>
            <div className="bg-hijau grid place-content-center rounded-lg mt-4">
              <span className="text-white text-base font-semibold p-2">
                Order Sekarang
              </span>
            </div>
          </div>
        </div>

        <div className="grid place-content-center md:place-content-start my-4 md:my-0">
          <div className="grid border full-shadow rounded-xl p-4 max-w-[325px]">
            <span className="grid text-base">Harga awal</span>
            <span className="grid text-xl text-merah ml-2 font-bold line-through">
              Rp. 610.000
            </span>
            <span className="grid text-5xl mb-4 ml-3 font-bold">Rp. 440rb</span>
            <div className="flex p-3">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span className="ml-2">Manggistech isi 60</span>
            </div>
            <div className="flex p-3">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span className="ml-2">Tempu isi 60</span>
            </div>
            <div className="bg-hijau grid place-content-center rounded-lg mt-4">
              <span className="text-white text-base font-semibold p-2">
                Order Sekarang
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
