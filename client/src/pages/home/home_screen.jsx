import React from "react";
import { HeroSection } from "../../components/hero/hero_section";
import { ProductsSection } from "../../components/products/products_section/products_section";
import { BoxcontentSection } from "../../components/box_content/boxcontent_section/boxcontent_section";
import { HomeLayout } from "../../components/home_layout/home_layout";

export const HomeScreen = () => {
  return (
    <HomeLayout>
      <HeroSection />
      <ProductsSection />
      <BoxcontentSection />
    </HomeLayout>
  );
};
