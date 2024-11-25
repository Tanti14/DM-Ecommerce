import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec38bc;
  width: 100%;
  height: 125px;
  position: fixed;
  top: 0;
  z-index: 10;

  a {
    color: white;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  gap: 30px;
  position: relative;
`;

export const NavImgContainer = styled.div`
  width: 20%;
  img {
    width: 200px;
  }

  @media (width <= 768px) {
    width: 40%;
    img {
      width: 400px;
    }
  }
`;

export const NavBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  gap: 40px;

  @media (width <= 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    background-color: #ec38bc;
    width: 30%;
    height: calc(100vh - 100px);
    padding: 30px 20px;
    top: 100px;
    right: 0;
    gap: 60px;
    z-index: 3;

    transform: translate(105%);
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  }

  @media (width <= 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #ec38bc;
    width: 40%;
    top: 90px;
  }
`;

/* Mobile Navbar */
export const MobileNavbarBtn = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  font-size: 26px;

  @media (width <= 768px) {
    display: flex;
    width: 80%;
  }
`;

export const CartBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavCartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    background-color: orange;
    border-radius: 45%;
    position: relative;
    top: -10px;
    left: -10px;
    font-size: 12px;
    user-select: none;
    color: white;
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ec38bc;
  width: 40%;
  height: calc(100vh - 125px);
  top: 122px;
  right: 0;
  gap: 40px;
  z-index: 3;
  overflow-y: scroll;
  padding: 20px 40px;

  transform: translate(105%);
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);

  @media (width <= 992px) {
    width: 60%;
    height: calc(100vh - 125px);
    top: 115px;
  }

  @media (width <= 768px) {
    height: calc(100vh - 100px);
  }

  @media (width <= 576px) {
    width: 80%;
    height: calc(100vh - 100px);
    top: 90px;
  }

  @media (width <= 470px) {
    height: calc(100vh - 115px);
  }
`;

export const CartTitle = styled.div`
  display: flex;
  width: 100%;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  color: white;
`;

export const CartDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CartBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const CartActionsBtns = styled(motion.button)`
  width: 100%;
  background-color: orange;
  color: white;
  padding: 8px 0;
  border-radius: 12px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
