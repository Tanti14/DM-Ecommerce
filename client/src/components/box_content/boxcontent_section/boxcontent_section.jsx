import React from "react";
import { BoxcontentCard } from "../boxcontent_card/boxcontent_card";
import { BoxContentSection, CardsContainer, Parrafo } from "./styles";

export const BoxcontentSection = () => {
  return (
    <BoxContentSection>
      <h2>¿Que traen nuestras cajas?</h2>
      <Parrafo>
        Nuestras cajas contienen muchas variedades de golosinas. Muchas de esas
        combinaciones son de eleccion propia pero tambien existe la posibilidad
        de que las combinen a eleccion! Algunas de nuestras golosinas favoritas
        son:
      </Parrafo>

      <CardsContainer>
      </CardsContainer>
    </BoxContentSection>
  );
};
