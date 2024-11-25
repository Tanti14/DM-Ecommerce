import styled from "styled-components";
import background from "../../assets/img/candy-store1.png";

export const AboutScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 125px;
  padding: 70px;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;

export const AboutHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  padding: 60px;
  gap: 10px;

  background: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);

  position: relative;

  h1 {
    font-size: 40px;
    font-weight: 800;
  }

  @media (width <= 992px) {
    max-width: 990px;
    width: 100%;
  }

  @media (width <= 768px) {
    max-width: 765px;
    width: 100%;

    h1 {
      font-size: 30px;
    }
  }

  @media (width <= 576px) {
    max-width: 574px;
    width: 100%;

    h1 {
      font-size: 25px;
    }
  }

  @media (width <= 414px) {
    max-width: 410px;
    width: 100%;
    font-size: 8px;

    h1 {
      font-size: 16px;
    }
  }
`;

export const Comilla = styled.img`
  width: 90px;
  position: absolute;
`;

export const AboutHistory = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: justify;
  gap: 30px;

  p {
    font-size: 18px;
  }

  @media (width <= 414px) {
    max-width: 410px;
    width: 100%;
    p {
      font-size: 12px;
    }
  }
`;
