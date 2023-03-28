import { Box, Typography } from "@mui/material";
import React from "react";

const EVehicleCard = ({ item }) => {
  return (
    <Box
      sx={{
        width: "20%",
        display: "flex",
        flexDirection: "column",
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
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
      />
      <Typography
        sx={{
          width: "100%",
          backgroundColor: "rgb(31,148,7)",
          color: "white",
          height: "5vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        {item.name}
      </Typography>
    </Box>
  );
};

export default EVehicleCard;
