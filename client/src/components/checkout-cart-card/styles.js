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
`;

export const CartCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100px;
  h2 {
    font-size: 22px;
    font-weight: 800;
  }

  span {
    font-weight: 700;
  }

  @media (width <= 768px) {
    h2 {
      font-size: 18px;
    }

    span {
      font-size: 14px;
    }
  }
`;
