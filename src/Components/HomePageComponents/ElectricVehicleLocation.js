import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const ElectricVehicleLocation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
        marginTop: "50px",
        padding: "10px 0px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
        }}
      >
        <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
          SELECT YOUR
        </Typography>
        <Typography
          sx={{ fontSize: "40px", color: "rgb(56,160,34)", fontWeight: "bold" }}
        >
          ELECTRIC VEHICLE
        </Typography>
      </Box>
      <Box
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      ></Box>

      {/* brand modal and year */}
      <Box
        sx={{
          width: "80%",
          padding: "0% 10%",
          height: "30vh",
        }}
      >
        <Box
          sx={{
            backgroundImage:
              'url("https://evkharido.com/static/version1674123307/frontend/Sm/market/en_US/images/bg-at-bike.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "90%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0% 5%",
            justifyContent: "space-evenly",
          }}
        >
          {/* <Typography sx={{color:"white"}}>hi</Typography> */}
          <TextField
            type={"text"}
            placeholder={"Select Brand"}
            sx={{
              backgroundColor: "white",
            }}
          />
          <TextField
            type={"text"}
            placeholder={"Select Modal"}
            sx={{
              backgroundColor: "white",
            }}
          />
          <TextField
            type={"text"}
            placeholder={"Select Year"}
            sx={{
              backgroundColor: "white",
            }}
          />
          <Box
            sx={{
              backgroundColor: "rgb(31,148,7)",
              display: "flex",
              alignItems: "center",
              width: "10%",
              height: "8vh",
              padding: "0px 15px",
              borderRadius: "10px",
            }}
          >
            <SearchIcon
              sx={{
                color: "white",
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(31,148,7)",
                "&:hover": {
                  backgroundColor: "rgb(31,148,7)",
                },
              }}
            >
              SEARCH
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ElectricVehicleLocation;
