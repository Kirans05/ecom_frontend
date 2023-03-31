import { Box, Divider, List, Typography } from "@mui/material";
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
    <Box className="topOffersDiv">
      <Typography className="titleTypography">
        TOP <span className="mainTitle">OFFERS</span>
      </Typography>
      <Typography className="titleDescription">
        CHOOSE FROM THE VARIETY OF TOP PRODUCTS & SERVICES OFFERED BY US
      </Typography>
      <Divider className="dividerWidth" />

      <div className="imagesDiv">
        {/* first big image left part */}
        <div className="bigImageDiv">
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
        </div>

        {/* right part 4 small images */}
        <div className="smallImageDiv">
          {offersImagesArr.map((item, index) => {
            if (index > 0) {
              return (
                <Box
                  key={index}
                  className="smallImage"
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
        </div>
      </div>
    </Box>
  );
};

export default TopOffers;
