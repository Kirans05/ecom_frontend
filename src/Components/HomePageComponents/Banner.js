import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ForwardArrow from "../NavigationArrows/ForwardArrow";
import BackwardArrow from "../NavigationArrows/BackwardArrow";

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
      className="bannerMainDiv"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <Box
        component={"img"}
        src={bannerImage.url}
        alt={"image"}
        className="bannerImage"
      />

      {/* search box */}
      <div className="searchBoxDiv">
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
      </div>

      {/* forward arrow */}
      {showArrows == true ? (
        <div onClick={nextImageHandler}>
          <ForwardArrow top={"50%"} right={"5%"} />
        </div>
      ) : null}

      {/* backward arrow */}
      {showArrows == true ? (
        <div onClick={previousImageHandler}>
          <BackwardArrow top={"50%"} left={"5%"} />
        </div>
      ) : null}
    </Box>
  );
};

export default Banner;
