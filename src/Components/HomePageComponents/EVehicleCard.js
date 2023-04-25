import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const EVehicleCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="productCardDiv"
      onClick={() => navigate(`/productPage/${item.sub_category_name}`)}
    >
      <Box
        component={"img"}
        src={item.image}
        alt={"Electric Vehicle Image"}
        className="productImage"
      />
      <Typography className="productName">{item.sub_category_name}</Typography>
    </Card>
  );
};

export default EVehicleCard;
