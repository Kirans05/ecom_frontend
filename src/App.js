import React from "react";
import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
