import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { HomeScreen } from "../pages/home/home_screen";
import { ProductsScreen } from "../pages/products/products_screen";
import { AboutusScreen } from "../pages/about_us/aboutus_screen";
import { ContactusScreen } from "../pages/contact_us/contactus_screen";
import { Checkout } from "../pages/checkout/checkout";
import { ProtectedRoute } from "../ProtectedRoute";
import { ProtectedCheckout } from "../ProtectedCheckout";
import { ControlPanel } from "../pages/admin/controlpanel";
import { Login } from "@/pages/admin/login";
import { NewProduct } from "@/pages/admin/newproduct";
import { ScrollToTop } from "@/components/scrolltotop/ScrollToTop";
import { AuthProvider } from "../context/AuthContext";
import { ManagementProvider } from "../context/ManagementContext";
import { Toaster } from "react-hot-toast";
import { CategoryManager } from "@/pages/admin/categorymanager";
import { UserManager } from "@/pages/admin/usermanager";
import { MsgManager } from "@/pages/admin/msgmanager";

export const RoutesDef = () => {
  return (
    <AuthProvider>
      <ManagementProvider>
        <BrowserRouter>
          <Layout>
            <ScrollToTop />
            <Routes>
              <Route path="/" index element={<HomeScreen />} />
              <Route path="/products" element={<ProductsScreen />} />
              <Route path="/about" element={<AboutusScreen />} />
              <Route path="/contact" element={<ContactusScreen />} />

              {/* Rutas de compra */}
              <Route element={<ProtectedCheckout />}>
                <Route path="/checkout" element={<Checkout />} />
              </Route>

              {/* Rutas de autentificacion */}
              <Route path="/login" element={<Login />} />

              {/* Rutas de administracion */}
              <Route element={<ProtectedRoute />}>
                <Route path="/controlpanel" element={<ControlPanel />} />
                <Route path="/newproduct/form" element={<NewProduct />} />
                <Route path="/editproduct/form/:id" element={<NewProduct />} />
                <Route path="/categorymanager" element={<CategoryManager />} />
                <Route path="/msgmanager" element={<MsgManager />} />
                <Route path="/usermanager" element={<UserManager />} />
              </Route>
            </Routes>
            <Toaster position="bottom-right" />
          </Layout>
        </BrowserRouter>
      </ManagementProvider>
    </AuthProvider>
  );
};
