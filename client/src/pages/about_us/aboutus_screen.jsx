import React from "react";
import citar from "../../assets/img/citar.png";
import {
  AboutHistory,
  AboutHistoryContainer,
  AboutScreenContainer,
  Comilla,
} from "./styles";

export const AboutusScreen = () => {
  return (
    <AboutScreenContainer>
      <AboutHistoryContainer>
        <Comilla
          src={citar}
          style={{ top: -40, left: 15 }}
          alt="Icono de comillas"
        />
        <h1>Sobre Nosotros...</h1>
        <AboutHistory>
          <p>
            Bienvenidos a Dulce Maicenita, el lugar donde los sueños se vuelven
            dulces y las sonrisas se transforman en sabores. Somos Luiggi y
            Martina, una joven pareja llena de pasión por las golosinas y la
            creatividad.
          </p>
          <p>
            Hace 2 años, mientras explorábamos nuestro querido Tucumán, nos
            dimos cuenta de que la magia reside en los pequeños placeres de la
            vida, y para nosotros, esos placeres siempre estuvieron vinculados a
            los dulces. Así nació la idea de Dulce Maicenita.
          </p>
          <p>
            Nos sumergimos en la cocina de la abuela de Luiggi, donde las
            recetas tradicionales se mezclaron con nuestra creatividad
            desbordante. Después de innumerables pruebas y risas compartidas,
            creamos un universo de golosinas que reflejan nuestra historia y la
            herencia de Maicenita, la abuela de Luiggi.
          </p>
          <p>
            Dulce Maicenita no es solo una tienda de golosinas; es el resultado
            de nuestra dedicación y amor por compartir momentos especiales con
            cada uno de ustedes. Cada caramelo, malvavisco y chocolate cuenta
            una historia, llevando consigo la esencia única de Dulcillar,
            nuestro querido pueblo.
          </p>
          <p>
            Desde nuestro modesto comienzo en una feria local hasta convertirnos
            en la tienda que conocen hoy, cada paso ha sido un viaje increíble.
            Gracias a ustedes, nuestros queridos clientes, Dulce Maicenita ha
            crecido y se ha convertido en un rincón donde la comunidad se
            encuentra para celebrar la dulzura de la vida.
          </p>
          <p>
            Nos emociona compartir este viaje con ustedes y seguir creando
            momentos dulces juntos. Así que, únanse a nosotros en Dulce
            Maicenita, donde cada golosina cuenta una historia y cada historia
            se convierte en un dulce recuerdo.
          </p>
        </AboutHistory>

        <Comilla
          src={citar}
          style={{ bottom: -40, right: 15 }}
          alt="Icono de comillas"
        />
      </AboutHistoryContainer>
    </AboutScreenContainer>
  );
};
