import { Box, Card, Typography } from "@mui/material";
import React from "react";

const EVehicleCard = ({ item }) => {
  return (
    <Card className="productCardDiv">
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
      <Typography className="productName">{item.name}</Typography>
    </Card>
  );
};

export default EVehicleCard;
