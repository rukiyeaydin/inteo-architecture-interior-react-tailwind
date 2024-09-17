import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link as RouterLink, useLocation } from 'react-router-dom';

import HeaderImg from "../assets/images/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const setHandlerMenu = () => {
    setMenuOpen((even) => !even);
  };
  
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 40) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
      if (location.hash) {
          const element = document.getElementById(location.hash.substring(1));
          if (element) {
              // Elemente git ve offset uygula
              const yOffset = -10; // Offset değerini burada belirleyin
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
          }
      }
  }, [location]);

  return (
    <header className="header fixed top-0 left-0 z-20 w-full bg-white">
      <div className="header__container container flex h-24 items-center justify-between">
        <RouterLink target="_top" className="header__logo w-20">
          <img src={HeaderImg} alt="header logo" />
        </RouterLink>

        <div
          className={`header__menu fixed top-24 left-0 w-full origin-top bg-white py-8 px-16 text-center shadow-lg transition-all duration-500 md:static md:top-0 md:flex md:w-auto md:scale-y-100 md:items-center md:gap-8 md:p-0 md:opacity-100 md:shadow-none lg:gap-12 ${
            menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
        <ul className="header__list mb-6 flex flex-col gap-6 md:mb-0 md:flex-row lg:gap-8">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Our Work", "#our-work"],
            ["Contact Us", "#contact-us"],
          ].map(([title, url]) => (
            <li key={url.toString()}>
              <RouterLink
                to={url}
                className="header__link font-medium text-black hover:text-brown-600"
                onClick={() => setMenuOpen(false)} // Menü otomatik kapansın
              >
                {title}
              </RouterLink>
            </li>
          ))}
        </ul>
        </div>

        <div
          className="header__toggle inline-flex cursor-pointer text-[1.4rem] text-black md:hidden"
          onClick={setHandlerMenu}
        >
          {!menuOpen ? <RiMenu3Line /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
}
