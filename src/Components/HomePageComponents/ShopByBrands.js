import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ShopByBrands = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [brandsArr, setBrandsArr] = useState([
    {
      url: "https://evkharido.com/media/wysiwyg/jpeg_logo.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/2.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/3.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/12.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/rbseva_logo.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/9.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/13.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/14.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/1.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/17.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/sturdy_bikes_logo.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/kionic_mobility.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/10.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/21.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/6.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/23.jpg",
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
          BRANDS
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 100 }}>
        SELECT FROM WIDE RANGE OF EV BRANDS
      </Typography>
      <Box
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      ></Box>

      {/* brand images */}
      <Box
        sx={{
          width: "90%",
          padding: "0% 5%",
          display: "flex",
          flexWrap: "wrap",
          height: "20vh",
          justifyContent: "space-between",
          rowGap: "6px",
          position: "relative",
        }}
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {brandsArr.map((item, index) => {
          return (
            <Box
              key={index}
              component={"img"}
              src={item.url}
              alt={"image"}
              sx={{
                width: "12%",
                border: "2px solid white",
                "&:hover": {
                  cursor: "pointer",
                  border: "2px solid rgb(31,148,7)",
                },
              }}
            />
          );
        })}

        {/* forward arrow */}
        {showArrows == true ? (
          <Box
            sx={{
              position: "absolute",
              top: "35%",
              right: "3%",
              width: "50px",
              height: "50px",
              backgroundColor: "rgb(102,102,102)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: "white",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgb(31,148,7)",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </Box>
        ) : null}

        {/* backward arrow */}
        {showArrows == true ? (
          <Box
            sx={{
              position: "absolute",
              top: "35%",
              left: "3%",
              width: "50px",
              height: "50px",
              backgroundColor: "rgb(102,102,102)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: "white",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgb(31,148,7)",
              },
            }}
          >
            <ArrowBackIosIcon />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default ShopByBrands;
