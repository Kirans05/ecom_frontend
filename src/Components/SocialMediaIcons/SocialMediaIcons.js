import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";

const SocialMediaIcons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "5px",
        alignItems: "center",
      }}
    >
      <FacebookIcon
        sx={{
          border: "2px solid rgb(110,110,110)",
          color: "white",
          borderRadius: "50%",
          padding: "1%",
          bgcolor: "rgb(110,110,110)",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "rgb(30,147,6)",
          },
        }}
      />
      <TwitterIcon
        sx={{
          border: "2px solid rgb(110,110,110)",
          borderRadius: "50%",
          color: "white",
          padding: "1%",
          bgcolor: "rgb(110,110,110)",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "rgb(30,147,6)",
          },
        }}
      />
      <InstagramIcon
        sx={{
          border: "2px solid rgb(110,110,110)",
          borderRadius: "50%",
          color: "white",
          padding: "1%",
          bgcolor: "rgb(110,110,110)",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "rgb(30,147,6)",
          },
        }}
      />
      <LinkedInIcon
        sx={{
          border: "2px solid rgb(110,110,110)",
          borderRadius: "50%",
          color: "white",
          padding: "1%",
          bgcolor: "rgb(110,110,110)",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "rgb(30,147,6)",
          },
        }}
      />
      <YouTubeIcon
        sx={{
          border: "2px solid rgb(110,110,110)",
          borderRadius: "50%",
          color: "white",
          padding: "1%",
          bgcolor: "rgb(110,110,110)",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "rgb(30,147,6)",
          },
        }}
      />
    </Box>
  );
};

export default SocialMediaIcons;
