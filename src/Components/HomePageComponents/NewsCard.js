import { Box, Card, List, Typography } from "@mui/material";
import React from "react";

const NewsCard = ({ item }) => {
  return (
    <Card className="newsCard">
      <Box
        component={"img"}
        src={item.url}
        alt={"image"}
        sx={{
          width: "100%",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          padding: "10px 10px",
        }}
      >
        <Typography>{item.date}</Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "black",
            "&:hover": {
              color: "RGB(64 237 44)",
            },
          }}
        >
          {item.name}
        </Typography>
      </div>
    </Card>
  );
};

export default NewsCard;
