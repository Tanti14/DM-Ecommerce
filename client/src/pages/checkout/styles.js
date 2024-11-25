import { motion } from "framer-motion";
import styled from "styled-components";

export const CheckoutScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 125px;
  padding: 50px;
  gap: 40px;
  width: 100%;
  background-color: #ffc8dd;
  color: white;

  @media (width <= 470px) {
    align-items: center;
    h1 {
      width: 400px;
      text-align: center;
    }
  }
`;

export const CheckoutScreenItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-radius: 20px;
  background-color: #181920;
  padding: 20px 30px;

  @media (width <= 470px) {
    flex-direction: column-reverse;
    padding: 20px;
    gap: 30px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  height: 100%;
  gap: 30px;

  @media (width <= 470px) {
    align-items: center;
    width: 100%;
    border-top: 2px solid white;
    padding-top: 20px;
  }
`;

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 15px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 12px;
  color: black;
  background-color: white;
  padding: 5px 10px;
  text-align: center;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const StyledSubmitBtn = styled(motion.button)`
  width: 90%;
  border-radius: 12px;
  color: black;
  background-color: white;
  padding: 5px 10px;
  text-align: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CheckoutCartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  padding: 0 10px;
  gap: 30px;

  @media (width <= 470px) {
    align-items: center;
    width: 100%;
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 30px;
`;

export const CartItemsDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
