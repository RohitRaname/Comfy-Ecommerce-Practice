import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";
import ProductsPage from "./pages/ProductsPage";
import SharedLayout from "./pages/SharedLayout";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import PrivateRoute from "./pages/PrivateRoute";
import AuthWrapper from "./pages/AuthWrapper";

function App() {

  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="product/:id" element={<SingleProductPage />} />
            <Route path="about" element={<AboutPage />} />

            <Route path="cart" element={<CartPage />} />
            <Route
              path="checkout"
              element={
                <PrivateRoute>
                  <CheckoutPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
