import styled from "styled-components";
import { motion } from "framer-motion";

export const CardItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffff;
  padding: 20px;
  gap: 10px;
  position: relative;
  height: 450px;
  width: 300px;
`;

export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 280px;
  }
`;

export const CardTxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  h3 {
    font-size: 22px;
    font-weight: 800;
  }
  span {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const CardBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const ProdCardBtn = styled(motion.button)`
  background-color: orange;
  padding: 5px 25px;
  width: 100%;
  color: white;
`;
