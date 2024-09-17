import React from "react";

import ServicesIcon1 from "../../assets/images/service-icon-(1).svg";
import ServicesIcon2 from "../../assets/images/service-icon-(2).svg";
import ServicesIcon3 from "../../assets/images/service-icon-(3).svg";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="services__container container grid gap-12">
        <div className="services__data sm:max-w-lg lg:max-w-3xl">
          <p className="services__subtitle section-subtitle">
            <div className="section-line"></div>
            Our Services
          </p>
          <h1 className="services__title section-title">
            We provide the best solutions for your dream home
          </h1>
        </div>

        <div className="services__group grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-12">
          <div className="services__content grid grid-rows-[repeat(2,max-content)] gap-8 border border-gray-300 py-12 px-8">
            <img
              src={ServicesIcon1}
              alt="services icon"
              className="services__content-icon w-16"
            />

            <div>
              <h3 className="services__content-title pb-4 font-serif text-[32px] font-medium leading-[130%]">
                Architectural & Interior design
              </h3>
              <p className="services__content-text section-text pb-0">
                Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies.
              </p>
            </div>
          </div>

          <div className="services__content grid grid-rows-[repeat(2,max-content)] gap-8 border border-gray-300 py-12 px-8">
            <img
              src={ServicesIcon2}
              alt="services icon"
              className="services__content-icon w-16"
            />

            <div>
              <h3 className="services__content-title pb-4 font-serif text-[32px] font-medium leading-[130%]">
                Building & Renovation
              </h3>
              <p className="services__content-text section-text pb-0">
                Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies.
              </p>
            </div>
          </div>

          <div className="services__content grid grid-rows-[repeat(2,max-content)] gap-8 border border-gray-300 py-12 px-8">
            <img
              src={ServicesIcon3}
              alt="services icon"
              className="services__content-icon w-16"
            />

            <div>
              <h3 className="services__content-title pb-4 font-serif text-[32px] font-medium leading-[130%]">
                Construciton Management
              </h3>
              <p className="services__content-text section-text pb-0">
                Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
