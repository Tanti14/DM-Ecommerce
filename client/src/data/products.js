import ImgCard1 from "../assets/img/cards_img/box1.jpeg";
import ImgCard2 from "../assets/img/cards_img/box2.jpeg";
import ImgCard3 from "../assets/img/cards_img/box3.jpeg";

export const products = [
  {
    id: 1,
    title: "Kilo de Felicidad",
    img: ImgCard1,
    peso: "1Kg",
    precio: 3500,
    categoria: "Kilos",
  },
  {
    id: 2,
    title: "Picada Combinada",
    img: ImgCard2,
    peso: "500gr / 700gr",
    precio: 2500,
    categoria: "Picadas",
  },
  {
    id: 3,
    title: "Pote de Dulzura",
    img: ImgCard3,
    peso: "200gr / 250gr",
    precio: 1900,
    categoria: "Potes",
  },
  {
    id: 4,
    title: "Kilo de Felicidad",
    img: ImgCard1,
    peso: "1Kg",
    precio: 3500,
    categoria: "Kilos",
  },
  {
    id: 5,
    title: "Picada Combinada",
    img: ImgCard2,
    peso: "500gr / 700gr",
    precio: 2500,
    categoria: "Picadas",
  },
  {
    id: 6,
    title: "Pote de Dulzura",
    img: ImgCard3,
    peso: "200gr / 250gr",
    precio: 1900,
    categoria: "Potes",
  },
  {
    id: 7,
    title: "Kilo de Felicidad",
    img: ImgCard1,
    peso: "1Kg",
    precio: 3500,
    categoria: "Kilos",
  },
  {
    id: 8,
    title: "Picada Combinada",
    img: ImgCard2,
    peso: "500gr / 700gr",
    precio: 2500,
    categoria: "Picadas",
  },
  {
    id: 9,
    title: "Pote de Dulzura",
    img: ImgCard3,
    peso: "200gr / 250gr",
    precio: 1900,
    categoria: "Potes",
  },
  {
    id: 10,
    title: "Kilo de Felicidad",
    img: ImgCard1,
    peso: "1Kg",
    precio: 3500,
    categoria: "Kilos",
  },
  {
    id: 11,
    title: "Picada Combinada",
    img: ImgCard2,
    peso: "500gr / 700gr",
    precio: 2500,
    categoria: "Picadas",
  },
  {
    id: 12,
    title: "Pote de Dulzura",
    img: ImgCard3,
    peso: "200gr / 250gr",
    precio: 1900,
    categoria: "Potes",
  },
  {
    id: 13,
    title: "Kilo de Felicidad",
    img: ImgCard1,
    peso: "1Kg",
    precio: 3500,
    categoria: "Kilos",
  },
  {
    id: 14,
    title: "Picada Combinada",
    img: ImgCard2,
    peso: "500gr / 700gr",
    precio: 2500,
    categoria: "Picadas",
  },
  {
    id: 15,
    title: "Pote de Dulzura",
    img: ImgCard3,
    peso: "200gr / 250gr",
    precio: 1900,
    categoria: "Potes",
  },
  {
    id: 16,
    title: "Kilo de Felicidad",
    img: ImgCard1,
    peso: "1Kg",
    precio: 3500,
    categoria: "Kilos",
  },
  {
    id: 17,
    title: "Picada Combinada",
    img: ImgCard2,
    peso: "500gr / 700gr",
    precio: 2500,
    categoria: "Picadas",
  },
  {
    id: 18,
    title: "Pote de Dulzura",
    img: ImgCard3,
    peso: "200gr / 250gr",
    precio: 1900,
    categoria: "Potes",
  },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.categoria]) {
    acc[product.categoria] = [];
  }

  acc[product.categoria] = [...acc[product.categoria], product];
  return acc;
}, {});
