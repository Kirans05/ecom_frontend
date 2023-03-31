import { Box, Divider, List, Typography } from "@mui/material";
import React, { useState } from "react";
import EVehicleCard from "./EVehicleCard";

const ShopElectricVehicle = () => {
  const [vehicleArr, setVehicleArr] = useState([
    {
      name: "ELECTRIC CAR",
      url: "https://evkharido.com/media/catalog/category/1_copy.jpg",
    },
    {
      name: "ELECTRIC SCOOTER",
      url: "https://evkharido.com/media/catalog/category/3_copy_3.jpg",
    },
    {
      name: "ELECTRIC CYCLE",
      url: "https://evkharido.com/media/catalog/category/2_copy1.jpg",
    },
    {
      name: "ELECTRIC BIKE",
      url: "https://evkharido.com/media/catalog/category/4_copy1.jpg",
    },
    {
      name: "ELECTRIC MOPED",
      url: "https://evkharido.com/media/catalog/category/5_copy_2.jpg",
    },
    {
      name: "ELECTRIC BUS",
      url: "https://evkharido.com/media/catalog/category/6_copy_1.jpg",
    },
    {
      name: "ELECTRIC 3 WHEELER",
      url: "https://evkharido.com/media/catalog/category/7_copy1_1.jpg",
    },
    {
      name: "ELECTRIC E RIKSHAW",
      url: "https://evkharido.com/media/catalog/category/8_copy_1.jpg",
    },
  ]);

  return (
    <Box className="shopByElectricVehicleDiv">
      <Typography className="titleTypography">
        SHOP BY <span className="mainTitle">ELECTRIC VEHICLE</span>
      </Typography>
      <Typography className="titleDescription">
        CHOOSE FROM POPULAR ELECTRIC VEHICLES
      </Typography>
      <Divider className="dividerWidth" />

      {/* electric vehicle card list of electric vehicles */}
      <div className="productDiv">
        {vehicleArr.map((item, index) => {
          return <EVehicleCard key={index} item={item} />;
        })}
      </div>
    </Box>
  );
};

export default ShopElectricVehicle;
