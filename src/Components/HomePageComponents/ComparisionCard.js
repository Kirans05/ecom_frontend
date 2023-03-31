import { Box, Button, Typography, Card } from "@mui/material";
import React from "react";

const ComparisionCard = ({ item }) => {
  return (
    <Card className="comparisionProductCard">
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component={"img"}
            src={item.image1}
            alt={"image"}
            sx={{
              width: "100%",
            }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              padding: "0px 10px",
            }}
          >
            {item.name1}
          </Typography>
        </div>
        <Typography
          sx={{
            padding: "7px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "50%",
          }}
        >
          VS
        </Typography>
        <div
          style={{
            width: "45%",
          }}
        >
          <Box
            component={"img"}
            src={item.image2}
            alt={"image"}
            sx={{
              width: "100%",
            }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              padding: "0px 10px",
            }}
          >
            {item.name2}
          </Typography>
        </div>
      </div>
      <Button
        sx={{
          backgroundColor: "rgb(31,148,7)",
          color: "white",
          width: "50%",
          alignSelf: "center",
          "&:hover": {
            backgroundColor: "rgb(31,148,7)",
          },
        }}
        variant="contained"
      >
        VIEW COMPARISION
      </Button>
    </Card>
  );
};

export default ComparisionCard;
