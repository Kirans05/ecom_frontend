import { Box, Typography } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
        marginTop: "50px",
        padding: "10px 0px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "5px",
        }}
      >
        <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
          SHOP BY
        </Typography>
        <Typography
          sx={{ fontSize: "40px", color: "rgb(56,160,34)", fontWeight: "bold" }}
        >
          ELECTRIC VEHICLE
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 100 }}>
        CHOOSE FROM POPULAR ELECTRIC VEHICLES
      </Typography>
      <Box
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      ></Box>

      {/* electric vehicle card list of electric vehicles */}
      <Box
      sx={{
        width:"90%",
        display:"flex",
        flexWrap:"wrap",
        padding:"0% 5%",
        justifyContent:"space-between",
        columnGap:"2px",
        rowGap:"60px"
      }}
      >
        {vehicleArr.map((item, index) => {
          return <EVehicleCard key={index} item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default ShopElectricVehicle;
