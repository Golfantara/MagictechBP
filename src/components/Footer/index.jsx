import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20">
      <ul className="flex flex-col lg:flex-row list-none justify-center items-center">
        <NavLink to="../Produk" className="">
          <div className="px-3 py-2 inline-block lg:flex items-center text-md font-semibold leading-snug">
            <div className="ml-2 mt-1 flex items-center lg:hover:underline">
              Produk
            </div>
          </div>
        </NavLink>
        <NavLink to="../Bpom" className="">
          <div className="px-3 py-2 inline-block lg:flex items-center text-md font-semibold leading-snug">
            <div className="ml-2 mt-1 flex items-center lg:hover:underline">
              BPOM & Halal
            </div>
          </div>
        </NavLink>
        <NavLink to="../Artikel" className="">
          <div className="px-3 py-2 inline-block lg:flex items-center text-md font-semibold leading-snug">
            <div className="ml-2 mt-1 flex items-center lg:hover:underline">
              Artikel
            </div>
          </div>
        </NavLink>
        <NavLink to="../About" className="">
          <div className="px-3 py-2 inline-block lg:flex items-center text-md font-semibold leading-snug">
            <div className="ml-2 mt-1 flex items-center lg:hover:underline">
              Tentang Kami
            </div>
          </div>
        </NavLink>
        <NavLink to="../Faq" className="">
          <div className="px-3 py-2 inline-block lg:flex items-center text-md font-semibold leading-snug">
            <div className="ml-2 mt-1 flex items-center lg:hover:underline">
              Faq
            </div>
          </div>
        </NavLink>
      </ul>

      <div className="py-6 max-w-5xl mx-auto">
        <div className="border border-gray-300"></div>
        <div className="grid place-items-center mt-4">
          <span>
            ©️ 2023{" "}
            <span className="font-bold">PT. Habatussauda International. </span>
            All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
