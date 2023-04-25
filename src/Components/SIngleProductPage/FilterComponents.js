import { Typography } from "@mui/material";
import React, { useState } from "react";

const FilterComponents = ({ item, type, filterEvProducts }) => {
  const [inputChecked, setInputChecked] = useState(false);

  const selectHandler = () => {
    if (inputChecked == true) {
      setInputChecked(false);
      filterEvProducts(type, item[0], "cancelFilter");
    } else {
      setInputChecked(true);
      filterEvProducts(type, item[0], "filter");
    }
  };

  return (
    <div className="filterComponent" onClick={() => selectHandler()}>
      <div style={{ display: "flex", columnGap: "2px" }}>
        <input type="checkbox" checked={inputChecked == false ? false : true} />
        <Typography className="divSubtitle">{item[0]}</Typography>
      </div>
      <Typography className="divSubtitle">({item[1]})</Typography>
    </div>
  );
};

export default FilterComponents;
