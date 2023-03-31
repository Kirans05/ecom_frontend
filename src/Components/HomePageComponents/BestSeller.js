import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import ForwardArrow from "../NavigationArrows/ForwardArrow";
import BackwardArrow from "../NavigationArrows/BackwardArrow";
import BikeDescription from "../HomePageComponents/BikeDescription";

const BestSeller = () => {
  const [showArrows, setShowArrows] = useState(false);
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
    <Box className="bestSellersDiv">
      <Typography className="titleTypography">
        BEST <span className="mainTitle">SELLERS</span>
      </Typography>
      <Typography className="titleDescription">
        CHOOSE FROM BEST SELLING ELECTRIC BIKES & CYCLES
      </Typography>
      <Divider className="dividerWidth" />

      {/* product image and deatils */}
      <div
        className="productDiv"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {bestSellersProd.map((item, index) => {
          return <BikeDescription key={index} item={item} />;
        })}

        {/* forward arrow */}
        {showArrows == true ? <ForwardArrow top={"50%"} right={"4%"} /> : null}

        {/* backward arrow */}
        {showArrows == true ? <BackwardArrow top={"50%"} left={"4%"} /> : null}
      </div>
    </Box>
  );
};

export default BestSeller;
