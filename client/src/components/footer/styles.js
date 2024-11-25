import styled from "styled-components";

export const FooterSectionContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: #121314;
  color: white;
  padding: 60px;

  @media (width <= 576px) {
    font-size: 12px;
    gap: 25px;
  }

  @media (width <= 414px) {
    font-size: 8px;
    gap: 20px;
  }
`;

export const FooterColumns = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  a {
    color: white;

    &:visited {
      color: white;
    }
  }

  li {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (width <= 992px) {
    gap: 80px;
  }

  @media (width <= 576px) {
    gap: 60px;
    font-size: 12px;
  }

  @media (width <= 414px) {
    gap: 30px;
    font-size: 10px;
  }
`;

export const PayMethods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;

  @media (width <= 414px) {
    width: 30%;
  }
`;

export const PedidosRedes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;

  a {
    text-decoration: underline;
  }

  @media (width <= 576px) {
    width: 25%;
  }

  @media (width <= 414px) {
    width: 30%;
  }
`;

export const VisitUs = styled.div`
  width: 25%;

  @media (width <= 576px) {
    width: 30%;
  }
`;
