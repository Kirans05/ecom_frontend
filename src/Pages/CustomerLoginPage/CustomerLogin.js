import React from "react";
import "./CustomerLogin.css";
import { Box, Button, Typography } from "@mui/material";
import Header from "../../Components/Header/Header";
import DifferentBikes from "../../Components/HomePageComponents/DifferentBikes";
import Footer from "../../Components/HomePageComponents/Footer";

const CustomerLogin = () => {
  return (
    <Box className="customerLoginMainDiv">
      <Header />
      <DifferentBikes />
      <div className="customerLogin_signupDiv">
        <Typography className="typoTitle">CUSTOMER LOGIN</Typography>
        <div className="login_registerBox">
          <div className="loginDiv">
            <Typography
              sx={{ color: "rgb(33,148,9)", fontSize: "20px", opacity: 0.8 }}
            >
              REGISTERED CUSTOMERS
            </Typography>
            <Typography
              sx={{
                opacity: 0.8,
              }}
            >
              If you have an account, sign in with your email address.
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Typography
                sx={{
                  opacity: 0.8,
                }}
              >
                Email / Mobile Number
              </Typography>
              <input
                type="text"
                style={{ height: "5vh", paddingLeft: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Typography
                sx={{
                  opacity: 0.8,
                }}
              >
                Password
              </Typography>
              <input
                type="password"
                style={{ height: "5vh", paddingLeft: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgb(31,148,7)",
                  "&:hover": {
                    backgroundColor: "rgb(31,148,7)",
                  },
                }}
              >
                Login
              </Button>
              <Typography
                sx={{
                  opacity: 0.8,
                }}
              >
                Forgot Your Password ?
              </Typography>
            </div>
          </div>
          <div className="registerDiv">
            <Typography
              sx={{ color: "rgb(33,148,9)", fontSize: "20px", opacity: 0.8 }}
            >
              NEW CUSTOMERS
            </Typography>
            <Typography
              sx={{
                opacity: 0.8,
              }}
            >
              Creating an account has many benefits: check out faster, keep more
              than one address, track orders and more.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(31,148,7)",
                "&:hover": {
                  backgroundColor: "rgb(31,148,7)",
                },
                width:"30%"
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
};

export default CustomerLogin;
