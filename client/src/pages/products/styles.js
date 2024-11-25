import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProdsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 125px 0;
  margin-top: 60px;
  background-color: #ffc8dd;
`;

export const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 32px 0;
  width: 100%;
  user-select: none;
`;
export const Button = styled(motion.button)`
  background-color: orange;
  border: ${({ selected }) => (selected ? "2px solid #ec38bc" : "none")};
  border-radius: 15px;
  cursor: pointer;
  padding: 4px 20px;
  color: white;
`;

export const StyledProdCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  /* flex-wrap: wrap; */
  padding: 30px;
  gap: 20px;

  @media (width <= 992px) {
    max-width: 900px;
    width: 100%;
  }

  @media (width <= 768px) {
    max-width: 760px;
    width: 100%;
  }

  @media (width <= 576px) {
    max-width: 570px;
    width: 100%;
  }

  @media (width <= 414px) {
    max-width: 380px;
    width: 100%;
  }
`;

export const StyledProdButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  padding: 65px;

  button {
    background: orange;
    border-radius: 15px;
    cursor: pointer;
    padding: 4px 20px;
    color: white;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
