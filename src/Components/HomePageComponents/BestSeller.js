import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BestSellerCard from "./BestSellerCard";

const BestSeller = () => {
  const [bestSellersProd, setBestSellersProd] = useState([
    {
      url: "https://evkharido.com/media/catalog/product/cache/f4037cf015b06dc984582ea64882dd84/r/b/rbseva_legend__images_reviews__price__range__charging_time__accessories1.jpg",
      name: "RBSEVA LEGEND LITHIUM ION 60V 30AH ELECTRIC SCOOTER",
      ratings: 4.5,
      price: "91,647",
    },
    {
      url: "https://evkharido.com/media/catalog/product/cache/f4037cf015b06dc984582ea64882dd84/v/i/vijanta_arka_images_reviews_price_range_charging_time_accessories_2_.jpg",
      name: "VIJNATA ARKA 12AH ELECTRIC BICYCLE",
      ratings: 5,
      price: "30,000",
    },
    {
      url: "https://evkharido.com/media/catalog/product/cache/f4037cf015b06dc984582ea64882dd84/z/e/zelio_eeva_images_reviews_price__range__charging_time__accessories_black_colour.jpg",
      name: "ZELIO EEVA GEL BATTERY (48V,28AH) ELECTRIC SCOOTER",
      ratings: 3,
      price: "50,184",
    },
    {
      url: "https://evkharido.com/media/catalog/product/cache/f4037cf015b06dc984582ea64882dd84/g/_/g_kon_roadies_vs__images_reviews__price__range__charging_time__accessoriess_copy1.jpg",
      name: "GKON ROADIES VS LEAD ACID 48V/28AH ELECTRIC SCOOTER",
      ratings: 4,
      price: "58,590",
    },
  ]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
        marginTop: "20px",
        padding: "10px 0px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "rgb(243,243,243)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
        }}
      >
        <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
          BEST
        </Typography>
        <Typography
          sx={{ fontSize: "40px", color: "rgb(56,160,34)", fontWeight: "bold" }}
        >
          SELLERS
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 100 }}>
        CHOOSE FROM BEST SELLING ELECTRIC BIKES & CYCLES
      </Typography>
      <Box
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      ></Box>

      {/* product image and deatils */}
      <Box
      sx={{
        width:"100%",
        border:"2px solid red",
      }}
      >
        {
            bestSellersProd.map((item, index) => {
                return <BestSellerCard key={index} item={item}/>
            })
        }
      </Box>
    </Box>
  );
};

export default BestSeller;
