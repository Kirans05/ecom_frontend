import { Box, Divider, Slider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FilterComponents from "./FilterComponents";
import RatingsFilterComponent from "./RatingsFilterComponent";
import { useSelector } from "react-redux";

const SideFilters = ({ filterEvProducts, filterData, setFilterData }) => {
  const storeState = useSelector((state) => state);
  let { brandsArr, categoryArr, modelArr, priceArr, variantArr, yearArr } =
    storeState.ProductPageReducer;

  const categoryChangeHandler = (e) => {
    if (e.target.value.length == 0) {
      setFilterData({ ...filterData, categoryData: [...categoryArr] });
    } else {
      let filterProducts = filterData.categoryData.filter((list) => {
        return list[0].toLowerCase().includes(e.target.value.toLowerCase());
      });
      setFilterData({ ...filterData, categoryData: filterProducts });
    }
  };

  const brandChangeHandler = (e) => {
    if (e.target.value.length == 0) {
      setFilterData({ ...filterData, brandData: [...brandsArr] });
    } else {
      let filterProducts = filterData.brandData.filter((list) => {
        return list[0].toLowerCase().includes(e.target.value.toLowerCase());
      });
      setFilterData({ ...filterData, brandData: filterProducts });
    }
  };

  return (
    <Box className="sideFilterMainDiv">
      <Typography className="title">FILTER PRODUCTS BY</Typography>
      <div className="categoryDiv">
        <Typography className="divMainTitle">CATEGORY</Typography>
        <input
          type="text"
          placeholder="SEARCH"
          className="inputTextFeild"
          onChange={categoryChangeHandler}
        />
        {filterData.categoryData.map((item, index) => {
          return <Typography className="divSubtitle">{item[0]}</Typography>;
        })}
      </div>
      <Divider />
      <div className="brandDiv">
        <Typography className="divMainTitle">BRAND</Typography>
        <input
          type="text"
          placeholder="SEARCH"
          className="inputTextFeild"
          onChange={brandChangeHandler}
        />
        <div
          className="filterElementDiv"
          style={{ height: brandsArr.length <= 5 ? "fit-content" : "30vh" }}
        >
          {filterData.brandData.map((item, index) => {
            return (
              <FilterComponents
                key={index}
                item={item}
                type={"brand"}
                filterEvProducts={filterEvProducts}
              />
            );
          })}
        </div>
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <Typography className="divMainTitle">MODAL</Typography>
        <div
          className="filterElementDiv"
          style={{ height: modelArr.length <= 5 ? "fit-content" : "30vh" }}
        >
          {filterData.modelData.map((item, index) => {
            return (
              <FilterComponents
                key={index}
                item={item}
                type={"model"}
                filterEvProducts={filterEvProducts}
              />
            );
          })}
        </div>
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <Typography className="divMainTitle">LAUNCH YEAR</Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "70%",
            rowGap: "10px",
          }}
        >
          {filterData.yearData.map((item, index) => {
            return (
              <button key={index} className="yearBtns">
                {item[0]}
              </button>
            );
          })}
        </div>
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <Typography className="divMainTitle">PRICE</Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={[priceArr[0], priceArr[priceArr.length - 1]]}
          valueLabelDisplay="auto"
          className="rangeSlider"
        />
        <Typography sx={{ textAlign: "center" }}>
          ₹{priceArr[0]} - ₹{priceArr[priceArr.length - 1]}
        </Typography>
      </div>
      <Divider />
    </Box>
  );
};

export default SideFilters;
