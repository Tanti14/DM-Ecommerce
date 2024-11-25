import styled from "styled-components";
import herobg from "../../assets/img/candypattern.jpg";

export const HeroSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 125px);
  margin-top: 125px;

  background: url(${herobg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroGlassmorphism = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  padding: 20px;

  /* Efecto Glassmorphism */
  background: rgba(255, 255, 255, 0.35);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);

  @media (width <= 992px) {
    max-width: 900px;
    width: 100%;
  }

  @media (width <= 768px) {
    max-width: 700px;
    width: 100%;
  }

  @media (width <= 576px) {
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    height: 90%;
    gap: 40px;
  }

  @media (width <= 470px) {
    max-width: 400px;
    width: 100%;
    padding: 0;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  img {
    width: 400px;
  }

  @media (width <= 768px) {
    img {
      width: 350px;
    }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  h1 {
    font-family: "Clicker Script", cursive;
    font-size: 85px;
  }

  p {
    font-size: 18px;
    text-align: justify;
    padding: 0 20px;
  }

  @media (width <= 768px) {
    h1 {
      font-size: 60px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (width <= 576px) {
    width: 100%;
  }
`;
