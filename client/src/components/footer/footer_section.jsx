import React from "react";
import {
  FooterColumns,
  FooterSectionContainer,
  PayMethods,
  PedidosRedes,
  VisitUs,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faMoneyBill1Wave,
  faMoneyBillTransfer,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export const FooterSection = () => {
  return (
    <FooterSectionContainer>
      <FooterColumns>
        <PayMethods>
          <h4>Medios de Pago</h4>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faMoneyBill1Wave}
                style={{ color: "#0a6808" }}
              />
              Efectivo
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMoneyBillTransfer}
                style={{ color: "#1cd1d4" }}
              />
              Transferencia
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCreditCard}
                style={{ color: "#dfd80c" }}
              />
              Tarjetas
            </li>
          </ul>
        </PayMethods>
        <PedidosRedes>
          <h4>Realiza tu pedido</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25d366" }} />
              <a href="https://wa.me/543815988699" target="_blank">
                Whatsapp
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ffffff" }}
              />
              <a
                href="https://www.instagram.com/dulce.maicenita/?hl=es-la"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </PedidosRedes>
        <VisitUs>
          <h4>Visita nuestro Stand!</h4>
          <p>
            Seguinos en nuestro Instagram y enterate cuando estemos de feria!
          </p>
        </VisitUs>
      </FooterColumns>
      <p>
        Dulce Maicenita Candy Shop &copy; 2023 | Web designed & created by
        Santiago Costanti
      </p>
    </FooterSectionContainer>
  );
};
