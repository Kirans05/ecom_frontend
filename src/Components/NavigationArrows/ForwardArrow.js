import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";

const ForwardArrow = (top, right) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: top,
        right: right,
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
  );
};

export default ForwardArrow;
