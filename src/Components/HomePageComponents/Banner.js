import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Banner = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [bannerImagesArr, setBannerImagesArr] = useState([
    {
      url: "https://evkharido.com/media/wysiwyg/slider/cycle_banner_1_.jpg",
      no: 1,
    },
    {
      url: "https://evkharido.com/media/wysiwyg/slider/WE_ARE_OPEN_NOW_3.jpg",
      no: 2,
    },
    {
      url: "https://evkharido.com/media/wysiwyg/slider/scooter_banner_4_.jpg",
      no: 3,
    },
  ]);
  const [bannerImage, setBannerImage] = useState({
    url: "https://evkharido.com/media/wysiwyg/slider/cycle_banner_1_.jpg",
    currentImageNo: 1,
  });

  const nextImageHandler = () => {
    if (bannerImage.currentImageNo == 1) {
      setBannerImage({
        ...bannerImage,
        url: bannerImagesArr[1].url,
        currentImageNo: 2,
      });
    } else if (bannerImage.currentImageNo == 2) {
      setBannerImage({
        ...bannerImage,
        url: bannerImagesArr[2].url,
        currentImageNo: 3,
      });
    } else {
      setBannerImage({
        ...bannerImage,
        url: bannerImagesArr[0].url,
        currentImageNo: 1,
      });
    }
  };

  const previousImageHandler = () => {
    if (bannerImage.currentImageNo == 1) {
      setBannerImage({
        ...bannerImage,
        url: bannerImagesArr[2].url,
        currentImageNo: 3,
      });
    } else if (bannerImage.currentImageNo == 2) {
      setBannerImage({
        ...bannerImage,
        url: bannerImagesArr[0].url,
        currentImageNo: 1,
      });
    } else {
      setBannerImage({
        ...bannerImage,
        url: bannerImagesArr[1].url,
        currentImageNo: 2,
      });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <Box
        component={"img"}
        src={bannerImage.url}
        alt={"image"}
        sx={{
          width: "100%",
          "&:hover":{
            cursor:"pointer"
          }
        }}
      />

      {/* search box */}
      <Box
        sx={{
          position: "absolute",
          width: "80%",
          backgroundColor: "rgb(243,243,243)",
          padding: "2% 5%",
          display: "flex",
          alignItems: "center",
          bottom: "-50px",
          left: "5%",
          columnGap: "2px",
        }}
      >
        <TextField
          type={"text"}
          placeholder={"What are you looking for?"}
          sx={{
            width: "90%",
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(31,148,7)",
          }}
        >
          SEARCH
        </Button>
      </Box>

      {/* forward arrow */}
      {showArrows == true ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "5%",
            width: "50px",
            height: "50px",
            backgroundColor: "rgb(243,243,243)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            "&:hover": {
              cursor: "pointer",
              backgroundColor:"rgb(31,148,7)",
              color:"white"
            },
          }}
          onClick={nextImageHandler}
        >
          <ArrowForwardIosIcon />
        </Box>
      ) : null}

      {/* backward arrow */}
      {showArrows == true ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "5%",
            width: "50px",
            height: "50px",
            backgroundColor: "rgb(243,243,243)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            "&:hover": {
              cursor: "pointer",
              backgroundColor:"rgb(31,148,7)",
              color:"white"
            },
          }}
          onClick={previousImageHandler}
        >
          <ArrowBackIosIcon />
        </Box>
      ) : null}
    </Box>
  );
};

export default Banner;
