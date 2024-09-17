import React from "react";

import AboutImg from "../../assets/images/about-img.png";
import Button from "../../components/Button";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="about__data sm:max-w-lg md:max-w-xl">
          <div className="about__line section-subtitle">
            <div className="section-line"></div>
            About Us
          </div>
          <h1 className="about__title section-title">
            We help to bring your dream home to reality
          </h1>
          <p className="about__text section-text">
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
            mauris posuere auctor justo. Habitant proin aliquet volutpat leo
            ultricies. Dui blandit eget vitae turpis ultrices. Faucibus sit odio
            bibendum lobortis diam.
          </p>
          <Button url="/about" className="inline-flex">
            learn more
          </Button>
        </div>

        <img src={AboutImg} alt="about img" className="about__img" />
      </div>
    </section>
  );
}
