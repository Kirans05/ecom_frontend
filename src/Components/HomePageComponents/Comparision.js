import { Box, Divider, List, Typography } from "@mui/material";
import React, { useState } from "react";
import ComparisionCard from "./ComparisionCard";

const Comparision = () => {
  const [ComparisionIMagesArr, setComparisionArr] = useState([
    {
      image1:
        "https://evkharido.com/media/catalog/product/cache/55b9373a2aa8f64c6d5d3c78cc654110/e/v/evex_sprint_m2__images_reviews_price__range__charging_time__accessories_copy1.jpg",
      image2:
        "https://evkharido.com/media/catalog/product/cache/55b9373a2aa8f64c6d5d3c78cc654110/e/v/evex_sprint_m2__images_reviews_price__range__charging_time__accessories_copy1.jpg",
      name1: "RBSeVA Rider Lithium Ion 48V 26Ah Electric Scooter",
      name2: "Evex Sprint +M2 Lithium Ion 48V,24Ah Electric Scooter",
    },
    {
      image1:
        "https://evkharido.com/media/catalog/product/cache/55b9373a2aa8f64c6d5d3c78cc654110/p/o/powertron_crampo_images_reviews_price_range_charging_time_accessories.jpg",
      image2:
        "https://evkharido.com/media/catalog/product/cache/55b9373a2aa8f64c6d5d3c78cc654110/v/i/vijanta_arka_images_reviews_price_range_charging_time_accessories_2_.jpg",
      name1: "Sturdy Crampo Electric Bicycle",
      name2: "Vijnata Arka 12Ah Electric Bicycle",
    },
    {
      image1:
        "https://evkharido.com/media/catalog/product/cache/55b9373a2aa8f64c6d5d3c78cc654110/s/p/sprint_images_yellow_colour2_14.jpg",
      image2:
        "https://evkharido.com/media/catalog/product/cache/55b9373a2aa8f64c6d5d3c78cc654110/r/b/rbseva_legend__images_reviews__price__range__charging_time__accessories1.jpg",
      name1: "Evex Sprint Lithium Ion 48V,24Ah Electric Scooter",
      name2: "RBSeVA Legend Lithium Ion 60V 30Ah Electric Scooter",
    },
  ]);

  return (
    <Box className="comparisionMainDiv">
      <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
        COMPARISION
      </Typography>
      <Typography sx={{ fontWeight: 100 }}>
        CHOOSE FROM BEST SELLING ELECTRIC BIKES & CYCLES
      </Typography>
      <Divider
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      />

      {/* camparision products details */}
      <div className="comparisionProductDiv">
        {ComparisionIMagesArr.map((item, index) => {
          return <ComparisionCard key={index} item={item} />;
        })}
      </div>
    </Box>
  );
};

export default Comparision;
