import styled from "styled-components";

export const BoxContentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  background: gray;
  color: white;
  border-radius: 15px;
  padding: 10px;

  @media (width <= 414px) {
    width: 320px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  img {
    width: 90%;
    border-radius: 10px;
  }
`;

export const TxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 130px;

  h3{
    text-decoration: underline;
  }

  p{
    text-align: justify;
  }

  @media (width <= 414px) {
    h3{
      font-size: 15px;
    }
    p{
      font-size: 14px;
    }
  }
`;
