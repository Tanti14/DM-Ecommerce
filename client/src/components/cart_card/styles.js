import { motion } from "framer-motion";
import styled from "styled-components";

export const CartCardContent = styled.div`
  display: flex;
  width: 400px;
  height: 150px;
  padding: 10px;
  gap: 10px;
  background-color: #ec38bc;
  border-radius: 16px;
  color: white;
  border: 2px solid white;

  img {
    width: 130px;
    border-radius: 12px;
  }

  @media (width <= 470px) {
    width: 300px;
  }
`;

export const CardRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  height: 130px;
`;

export const CartCardText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  h2 {
    font-size: 22px;
    font-weight: 800;
  }
  p {
    overflow: hidden;
  }
`;

export const CartCardBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  span {
    width: 20px;
    text-align: center;
  }
`;

export const CardBtn = styled(motion.button)`
  background-color: orange;
  width: 25px;
  border-radius: 5px;
  border: 1px solid white;
`;
