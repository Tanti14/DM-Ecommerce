import React from "react";
import {
  HeroSectionContainer,
  HeroGlassmorphism,
  ImgContainer,
  HeroTextContainer,
} from "./styles";
import Logo from "../../assets/img/DulceLogo-transformed.png";
import "animate.css";

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroGlassmorphism>
        <ImgContainer>
          <img
            className="animate__animated animate__fadeInLeft animate__slow"
            src={Logo}
            alt=""
          />
        </ImgContainer>
        <HeroTextContainer>
          <h1 className="animate__animated animate__fadeInUp">
            Dulce Maicenita
          </h1>
          <p className="animate__animated animate__fadeInUp">
            "Donde la magia se combina con los sabores. Explora un universo de
            golosinas que despiertan tus sentidos. Descubre la dulzura en cada
            bocado. ¡Bienvenido a un mundo de delicias!"
          </p>
        </HeroTextContainer>
      </HeroGlassmorphism>
    </HeroSectionContainer>
  );
};
