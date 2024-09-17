import React from "react";

import WorkImg1 from "../../assets/images/works-img-(1).png";
import WorkImg2 from "../../assets/images/works-img-(2).png";
import WorkImg3 from "../../assets/images/works-img-(3).png";
import Button from "../../components/Button";

export default function Works() {
  return (
    <section className="works section" id="our-work">
      <div className="works__container container grid gap-12">
        <div className="works__data sm:max-w-lg lg:max-w-3xl">
          <div className="works__subtitle section-subtitle">
            <div className="section-line"></div>
            Recent work
          </div>
          <h1 className="works__title section-title">
            Some of our crafts made with love
          </h1>
        </div>

        <div className="works__group grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-12">
          <div className="works__content grid gap-8">
            <div className="works__content-overlay relative overflow-hidden">
              <img
                src={WorkImg1}
                alt="work img"
                className="works__content-img h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <h1 className="works__content-title services__content-title pb-4 font-serif text-[32px] font-medium leading-[130%]">
                Villa Furnishing & Interior
              </h1>
              <p className="works__content-text section-text pb-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                eius quam Commodi culpa dolores non nam cupiditate, molestias
                voluptas ut maxime aut officia.
              </p>
            </div>
          </div>

          <div className="works__content grid gap-8">
            <div className="works__content-overlay relative overflow-hidden">
              <img
                src={WorkImg2}
                alt="work img"
                className="works__content-img h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <h1 className="works__content-title services__content-title pb-4 font-serif text-[32px] font-medium leading-[130%]">
                Residence Garden & Swimming Pool
              </h1>
              <p className="works__content-text section-text pb-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                eius quam Commodi culpa dolores non nam cupiditate, molestias
                voluptas ut maxime aut officia.
              </p>
            </div>
          </div>

          <div className="works__content grid gap-8">
            <div className="works__content-overlay relative overflow-hidden">
              <img
                src={WorkImg3}
                alt="work img"
                className="works__content-img h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <h1 className="works__content-title services__content-title pb-4 font-serif text-[32px] font-medium leading-[130%]">
                Renovation & Finishing Dining Room
              </h1>
              <p className="works__content-text section-text pb-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                eius quam Commodi culpa dolores non nam cupiditate, molestias
                voluptas ut maxime aut officia.
              </p>
            </div>
          </div>
        </div>

        <Button url="/contact-us" className="inline-flex justify-self-start">
          Contact us
        </Button>
      </div>
    </section>
  );
}
