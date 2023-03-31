import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const ElectricVehicleLocation = () => {
  return (
    <Box className="evLocation">
      <Typography className="titleTypography">
        SELECT YOUR <span className="mainTitle">ELECTRIC VEHICLE</span>
      </Typography>
      <Divider className="dividerWidth" />

      {/* brand modal and year */}
      <div className="innerDiv">
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

        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(31,148,7)",
            padding: "15px 20px",
            "&:hover": {
              backgroundColor: "rgb(31,148,7)",
            },
          }}
        >
          <SearchIcon />
          SEARCH
        </Button>
      </div>
    </Box>
  );
};

export default ElectricVehicleLocation;
