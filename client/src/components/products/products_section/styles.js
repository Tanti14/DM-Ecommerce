import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProdSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px;
  gap: 60px;
  background: #f0a6ca;

  h2 {
    font-size: 30px;
    font-weight: 800;
    line-height: 20px;
  }

  @media (width <= 470px) {
    h2 {
      font-size: 22px;
      width: 320px;
      text-align: center;
    }
  }
`;

export const ProdCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const ShowMoreProds = styled(motion.div)`
  user-select: none;

  @media (width <= 470px) {
    font-size: 15px;
  }
`;

export const ShowMoreProdsBtn = styled(Link)`
  user-select: none;
  padding: 10px 30px;
  background-color: orange;
  color: white;
`;
