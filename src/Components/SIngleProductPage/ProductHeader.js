import { Typography } from "@mui/material";
import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";

const ProductHeader = ({menuIconsSelected, setMenuIconsSelected}) => {

  return (
    <div className="productHeaderMainDiv">
      <div style={{ display: "flex", columnGap: "10px" }}>
        <GridViewIcon
          className={
            menuIconsSelected == "grid"
              ? "menuiIconsClicked"
              : "menuiIconsNotClicked"
          }
          onClick={() => setMenuIconsSelected("grid")}
        />
        <ListIcon
          className={
            menuIconsSelected == "list"
              ? "menuiIconsClicked"
              : "menuiIconsNotClicked"
          }
          onClick={() => setMenuIconsSelected("list")}
        />
      </div>
      <div style={{ display: "flex", columnGap: "20px" }}>
        <Typography>Sort By</Typography>
        <Typography>Latest</Typography>
      </div>
    </div>
  );
};

export default ProductHeader;
