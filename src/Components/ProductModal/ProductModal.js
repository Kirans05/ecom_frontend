import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import BoltIcon from "@mui/icons-material/Bolt";
import StarIcon from "@mui/icons-material/Star";
import "./ProductModal.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CachedIcon from "@mui/icons-material/Cached";

const ProductModal = ({ item }) => {
  console.log(item);
  return (
    <Box className="productModalMainBox">
      <div className="name_ratingsBox">
        <Typography>{item.name}</Typography>
        <InfoIcon
          sx={{
            color: "grey",
            "&:hover": { cursor: "pointer" },
          }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <BoltIcon
            sx={{
              color: "rgb(31,148,7)",
              "&:hover": { cursor: "pointer" },
            }}
          />
          <Typography>EV</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarIcon
            sx={{
              color: "rgb(31,148,7)",
              "&:hover": { cursor: "pointer" },
            }}
          />
          <Typography>4.3</Typography>
        </div>
        <Typography>|</Typography>
        <Typography
          sx={{ color: "rgb(31,148,7)", "&:hover": { cursor: "pointer" } }}
        >
          4 Reviews
        </Typography>
      </div>
      <div className="image_descriptionBox">
        <div className="imageBox">
          <img src={item.url} alt={"product image"} />
          <FavoriteBorderIcon
            sx={{
              color: "grey",
              border: "1px solid grey",
              padding: "1%",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgb(31,148,7)",
                color: "white",
              },
              position: "absolute",
              top: "5%",
              right: "0%",
            }}
          />
        </div>
        <div className="descriptionBox">
          <div
            style={{ display: "flex", columnGap: "10px", alignItems: "center" }}
          >
            <Typography>SKU</Typography>
            <Typography sx={{ color: "rgb(31,148,7)" }}>Legend</Typography>
            <div style={{ display: "flex", color: "grey", columnGap: "5px" }}>
              <CachedIcon />
              <Typography>ADD TO COMPARE</Typography>
            </div>
          </div>
          <div>
            <Typography
              sx={{
                color: "grey",
              }}
            >
              Location
            </Typography>
            <TextField
              id="standard-basic"
              variant="standard"
              value={"Gurgon"}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CurrencyRupeeIcon />
            <Typography sx={{ fontSize: "20px" }}>{item.price}</Typography>
          </div>
          <div className="AddToCartBtn">
            <ShoppingCartIcon />
            <Typography>ADD TO CART</Typography>
          </div>
          <div>
            <Typography>Brand</Typography>
            <Typography>Rbseva</Typography>
            <Typography>4 PRODUCTS</Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ProductModal;
