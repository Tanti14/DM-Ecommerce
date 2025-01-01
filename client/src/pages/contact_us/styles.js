import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledFormScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 125px;
  background-color: #ffc8dd;
  gap: 60px;
  padding: 30px;
  img {
    width: 50%;
  }

  @media (width <= 992px) {
    max-width: 990px;
    width: 100%;
    img {
      width: 40%;
    }
  }

  @media (width <= 768px) {
    max-width: 765px;
    width: 100%;
    img {
      display: none;
    }
  }

  @media (width <= 576px) {
    img {
      display: none;
    }
  }

  @media (width <= 414px) {
    max-width: 410px;
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  padding: 50px 40px;
  gap: 10px;
  background-color: #a367b1;
  border-radius: 22px;

  h1 {
    font-size: 30px;
    font-weight: 800;
  }

  @media (width <= 992px) {
    width: 60%;
    h1 {
      font-size: 27px;
    }
  }

  @media (width <= 768px) {
    width: 90%;
  }

  @media (width <= 576px) {
    width: 100%;
  }

  @media (width <= 414px) {
    h1 {
      font-size: 17px;
    }
  }
`;

export const StyledInput = styled.input`
  border: 2px solid white;
  width: 100%;
  text-align: center;
  padding: 6px;
  background: transparent;
  border-radius: 15px;
  color: white;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
    text-align: center;
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 2px solid white;
  width: 100%;
  background: transparent;
  border-radius: 15px;
  resize: none;
  color: white;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: white;
    text-align: center;
  }
`;

export const SubmitBtn = styled(motion.button)`
  width: 100%;
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

export const GroupedInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
