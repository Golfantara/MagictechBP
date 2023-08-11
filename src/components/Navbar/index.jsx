import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  //   const [IsOpen1, setIsOpen1] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between md:px-12 lg:px-24 py-4 bg-white backdrop-blur-lg shadow-md"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to="/" className="group">
              <div className="flex items-center w-full h-[50px]">
                <div className="pl-2 text-2xl font-bold font-inter">
                  HERBAL HI TECH
                </div>
              </div>
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i>
                <svg
                  fill="#000000"
                  width="40px"
                  height="40px"
                  viewBox="0 0 32 32"
                  enableBackground="new 0 0 32 32"
                  id="Glyph"
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"
                    id="XMLID_314_"
                  />
                  <path
                    d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"
                    id="XMLID_315_"
                  />
                  <path
                    d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"
                    id="XMLID_316_"
                  />
                </svg>
              </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-wrap items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink to="/" className="">
                <div className="px-3 py-2 inline-block lg:flex items-center text-md font-semibold leading-snug">
                  <div className="ml-2 mt-1 flex items-center lg:hover:underline">
                    Home
                  </div>
                </div>
              </NavLink>
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
          </div>
        </div>
      </nav>
    </>
  );
}
