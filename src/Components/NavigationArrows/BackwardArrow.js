import { Box } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BackwardArrow = (top, left) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: top,
        left: left,
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
  );
};

export default BackwardArrow;
