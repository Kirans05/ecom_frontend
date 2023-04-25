import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductHeader from "./ProductHeader";
import { useDispatch, useSelector } from "react-redux";
import VehicleDetails from "./VehicleDetails";

const ProductCategory = ({ productDetails }) => {
  const { name } = useParams();
  // const dispatch = useDispatch();
  // const storeState = useSelector((state) => state);
  // let { productsArray } = storeState.ProductPageReducer;
  const [menuIconsSelected, setMenuIconsSelected] = useState("grid");

  return (
    <div className="productCategoryMainDiv">
      <Typography className="productTitle">{name.toUpperCase()}</Typography>
      <ProductHeader
        setMenuIconsSelected={setMenuIconsSelected}
        menuIconsSelected={menuIconsSelected}
      />
      <div
        className={
          menuIconsSelected == "grid"
            ? "productDescriptionDiv"
            : "productDescriptionDiv columnView"
        }
      >
        {productDetails.map((item, index) => {
          return (
            <VehicleDetails
              key={index}
              item={item}
              menuIconsSelected={menuIconsSelected}
              setMenuIconsSelected={setMenuIconsSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
