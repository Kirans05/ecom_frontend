import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Comunity = () => {
  return (
    <Box className="communityMainDiv">
      <Typography className="communityHeading">JOIN OUR COMMUNITY</Typography>
      <Typography className="subscribe">
        SUBSCRIBE TO OUR NEWSLETTERS
      </Typography>
      <Typography
        // sx={{
        //   padding: "3% 5%",
        //   border: "2px solid grey",
        //   borderRadius: "10px",
        //   fontSize: "25px",
        //   textAlign: "center",
        // }}
        className="communityDesc"
      >
        Join the community of Green Warriors with for exciting awards, cash
        backs, latest news, EV maintenance tips, exclusive discounts and much
        more.
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <TextField
          type={"text"}
          placeholder={"Your email address"}
          sx={{
            backgroundColor: "white",
            borderRadius: "60px",
            width: "80%",
            outline: "none",
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(31,148,7)",
            color: "white",
            borderRadius: "60px",
            // height: "55px",
            marginLeft: "-60px",
            padding: "15px 15px",
          }}
        >
          SUBSCRIBE
        </Button>
      </div>
    </Box>
  );
};

export default Comunity;
