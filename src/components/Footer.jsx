import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer pt-32 pb-8" id="contact-us">
      <div className="footer__container container grid gap-24">
        <div className="footer__group grid gap-12 md:flex md:items-start md:justify-between">
          <div className="footer__data sm:max-w-lg lg:max-w-3xl">
            <h1 className="footer__data-title section-title">
              Kick start your dreams home with us
            </h1>
            <Link
              to="/"
              className="footer__data-button font-serif text-[32px] font-medium italic text-brown-600 underline"
            >
              Send us a Hi
            </Link>
          </div>

          <div className="footer__wrapper grid gap-6">
            <div className="footer__wrapper-data">
              <h1 className="footer__wrapper-title font-serif text-[24px] font-medium text-black">
                Brooklyn, New York
              </h1>
              <p className="footer__wrapper-text section-text pb-0">
                962 Fifth Avenue Str, 3rd Floor-Trump <br />
                Building NY 10006, United State.
              </p>
            </div>

            <div className="footer__wrapper-data">
              <p className="footer__wrapper-text section-text pb-0">
                Email us at:
              </p>
              <h1 className="footer__wrapper-title font-serif text-[24px] font-medium text-black">
                hi@inteointerior.com
              </h1>
            </div>

            <div className="footer__wrapper-data">
              <p className="footer__wrapper-text section-text pb-0">
                If you're hurry, quick call for us
              </p>
              <h1 className="footer__wrapper-title font-serif text-[24px] font-medium text-black">
                +8 (663) 125-08-59
              </h1>
            </div>
          </div>
        </div>

        <div className="footer__copy border-t border-gray-300 pt-8 text-center text-[14px] text-black">
          &copy; 2022 Inteo Interior - Award winning studio. Made with love by
          Fajar Fadillah A
        </div>
      </div>
    </footer>
  );
}
