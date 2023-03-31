import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const FaqCard = ({ item, index, faqCurrentNumber, setFaqCurrentNumber }) => {
  const openAnswerDropDown = () => {
    if (faqCurrentNumber == 0) {
      setFaqCurrentNumber(index);
    } else if (faqCurrentNumber == index) {
      setFaqCurrentNumber(0);
    } else {
      setFaqCurrentNumber(index);
    }
  };
  return (
    <Box className="faqCard">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={openAnswerDropDown}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 500,
          }}
        >
          {item.question}
        </Typography>
        <div>
          {faqCurrentNumber == index ? (
            <RemoveIcon
              sx={{
                fontWeight: 900,
                fontSize: "20px",
              }}
            />
          ) : (
            <AddIcon
              sx={{
                fontWeight: 900,
                fontSize: "20px",
              }}
            />
          )}
        </div>
      </div>
      {faqCurrentNumber == index ? (
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 300,
            opacity: 0.7,
          }}
        >
          {item.answer}
        </Typography>
      ) : null}
      <Divider />
    </Box>
  );
};

export default FaqCard;
