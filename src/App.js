import React from "react";
import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/SingleProductPage/ProductPage";
import CustomerLogin from "./Pages/CustomerLoginPage/CustomerLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productPage/:name" element={<ProductPage />} />
      <Route path="/CustomerLogin" element={<CustomerLogin />} />
    </Routes>
  );
};

export default App;
