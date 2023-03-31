import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Guides_tutorialCard from "./Guides_tutorialCard";
import ForwardArrow from "../NavigationArrows/ForwardArrow";
import BackwardArrow from "../NavigationArrows/BackwardArrow";

const Guides_Tutorials = () => {
  const [showArrows, setShowArrows] = useState(false);

  const [guidesArr, setGuidesArr] = useState([
    {
      url: "https://evkharido.com/media/magefan_blog/e-ashwa.jpg",
      name: "EASHWA ELECTRIC SCOOTERS AND RIKSHAWS",
      date: "May 21, 2022",
    },
    {
      url: "https://evkharido.com/media/magefan_blog/EVEX_INDIA.jpg",
      name: "ASTAR BATTERIES",
      date: "May 21, 2022",
    },
    {
      url: "https://evkharido.com/media/magefan_blog/motovolt.jpg",
      name: "MOTOVOLT ELECTRIC CYCLES",
      date: "May 21, 2022",
    },
  ]);

  return (
    <Box className="gudes_tutorialMainDiv">
      <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
        GUIDES &{" "}
        <span
          style={{
            fontSize: "40px",
            color: "rgb(56,160,34)",
            fontWeight: "bold",
          }}
        >
          TUTORIALS
        </span>
      </Typography>
      <Typography></Typography>
      <Typography sx={{ fontWeight: 100 }}>
        GET INSIGHTS FROM OUR EXPERTS
      </Typography>
      <Divider
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      />

      {/* guides display */}
      <div
        className="guidesProductList"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {guidesArr.map((item, index) => {
          return <Guides_tutorialCard key={index} item={item} />;
        })}

        {/* forward arrow */}
        {showArrows == true ? <ForwardArrow top={"30%"} right={"3%"} /> : null}

        {/* backward arrow */}
        {showArrows == true ? <BackwardArrow top={"30%"} left={"3%"} /> : null}
      </div>
    </Box>
  );
};

export default Guides_Tutorials;
