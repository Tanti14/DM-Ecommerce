import React from "react";
import { BoxContentCard, ImgContainer, TxtContainer } from "./styles";

export const BoxcontentCard = ({ title, img, desc }) => {
  return (
    <BoxContentCard>
      <ImgContainer>
        <img src={img} alt={title} />
      </ImgContainer>

      <TxtContainer>
        <h3>{title}</h3>
        <p>{desc}</p>
      </TxtContainer>
    </BoxContentCard>
  );
};
