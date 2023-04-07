import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import NewsCard from "./NewsCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ForwardArrow from "../NavigationArrows/ForwardArrow";
import BackwardArrow from "../NavigationArrows/BackwardArrow";

const News = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [newsArr, setNewsArr] = useState([
    {
      url: "https://evkharido.com/media/magefan_blog/feature_216.jpg",
      name: "MUMBAI BASES COMPANY LAUNCHES FIRE EXTINGUISHER FOR EV BATTERIES",
      date: "june 22, 2022",
    },
    {
      url: "https://evkharido.com/media/magefan_blog/feature_219.jpg",
      name: "SONA COMSTAR AND ENEDYM INC PARTNERS TO PRODUCE MAGNET-LESS MOTORS",
      date: "june 22, 2022",
    },
    {
      url: "https://evkharido.com/media/magefan_blog/feature_214.jpg",
      name: "RETROFITTING FOR INDIA REGULATORY FRAMEWORK COMPILED BY ARAI",
      date: "june 22, 2022",
    },
  ]);

  return (
    <Box className="newsDiv">
      <Typography className="titleTypography">
        NEWS
      </Typography>
      <Divider
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      />

      {/* news display */}
      <div
        className="newListDiv"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {newsArr.map((item, index) => {
          return <NewsCard key={index} item={item} />;
        })}

        {/* forward arrow */}
        {showArrows == true ? <ForwardArrow top={"30%"} right={"3%"} /> : null}

        {/* backward arrow */}
        {showArrows == true ? <BackwardArrow top={"30%"} left={"3%"} /> : null}
      </div>
    </Box>
  );
};

export default News;
