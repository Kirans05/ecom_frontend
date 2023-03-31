import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/HomePageComponents/Banner";
import BestSeller from "../../Components/HomePageComponents/BestSeller";
import Comparision from "../../Components/HomePageComponents/Comparision";
import Comunity from "../../Components/HomePageComponents/Comunity";
import CustomerReview from "../../Components/HomePageComponents/CustomerReview";
import DifferentBikes from "../../Components/HomePageComponents/DifferentBikes";
import ElectricVehicleLocation from "../../Components/HomePageComponents/ElectricVehicleLocation";
import Footer from "../../Components/HomePageComponents/Footer";
import Guides_Tutorials from "../../Components/HomePageComponents/Guides_Tutorials";
import NewArrivals from "../../Components/HomePageComponents/NewArrivals";
import News from "../../Components/HomePageComponents/News";
import ShopByBrands from "../../Components/HomePageComponents/ShopByBrands";
import ShopElectricVehicle from "../../Components/HomePageComponents/ShopElectricVehicle";
import TopOffers from "../../Components/HomePageComponents/TopOffers";
import "./HomePage.css"

const HomePage = () => {
  return (
    <Box>
      <Header />  
      <DifferentBikes />  
      <Banner />  
      <ShopElectricVehicle /> 
      <ShopByBrands />
      <ElectricVehicleLocation />
      <TopOffers />
      <BestSeller />
      <News />
      <Comparision />
      <NewArrivals />
      <Guides_Tutorials />
      <Comunity />
      <CustomerReview />
      <Footer />
    </Box>
  );
};

export default HomePage;
