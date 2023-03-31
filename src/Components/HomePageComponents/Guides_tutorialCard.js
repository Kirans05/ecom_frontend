import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Guides_tutorialCard = ({ item }) => {
  return (
    <Card className="guidesCard">
      <Box
        component={"img"}
        src={item.url}
        alt={"image"}
        sx={{
          width: "100%",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          padding: "0px 10px",
        }}
      >
        <Typography>{item.date}</Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Guides_tutorialCard;
