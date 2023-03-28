import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const TopOffers = () => {
  const [offersImagesArr, setOffersImagesArr] = useState([
    {
      url: "https://evkharido.com/media/wysiwyg/testride.jpg",
      name: "BOOK A TEST DRIVE",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/exchange_banner.jpg",
      name: "EXCHANGE BONUS",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/Banner_4_copy.jpg",
      name: "BATTERY & CHARGER",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/Accessories.jpg",
      name: "ACCESSORIES",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/emi_bonus_2.jpg",
      name: "EASY FINANCE",
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
          columnGap: "10px",
        }}
      >
        <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
          TOP
        </Typography>
        <Typography
          sx={{ fontSize: "40px", color: "rgb(56,160,34)", fontWeight: "bold" }}
        >
          OFFERS
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 100 }}>
        CHOOSE FROM THE VARIETY OF TOP PRODUCTS & SERVICES OFFERED BY US
      </Typography>
      <Box
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      ></Box>
      <Box
        sx={{
          width: "90%",
          padding: "0% 5%",
          height: "82vh",
          display: "flex",
          columnGap: "20px",
        }}
      >
        {/* first big image left part */}
        <Box
          sx={{
            width: "40%",
            height: "100%",
            position: "relative",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Box
            component={"img"}
            src={offersImagesArr[0].url}
            alt={"image"}
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: "0px",
              color: "white",
              right: "0px",
              backgroundColor: "rgb(31,148,7)",
              fontWeight: 900,
              padding: "10px 15px",
            }}
          >
            {offersImagesArr[0].name}
          </Typography>
        </Box>

        {/* right part 4 small images */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "60%",
            height: "100%",
            justifyContent: "space-between",
            rowGap: "11px",
          }}
        >
          {offersImagesArr.map((item, index) => {
            if (index > 0) {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "49%",
                    height: "49%",
                    position: "relative",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={item.url}
                    alt={"image"}
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: "0px",
                      color: "white",
                      right: "0px",
                      backgroundColor: "rgb(31,148,7)",
                      fontWeight: 900,
                      padding: "10px 15px",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              );
            }
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TopOffers;
