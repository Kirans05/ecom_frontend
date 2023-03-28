import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [toggleMsg, setToggleMsg] = useState({
    myCart: false,
    myAccount: false,
  });

  return (
    <Box
      sx={{
        bgcolor: "rgb(102,102,102)",
        display: "flex",
        justifyContent: "space-between",
        width: "98%",
        alignItems: "center",
        padding: "2% 1%",
      }}
    >
      {/* left Part  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "30%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            columnGap: "5px",
            alignItems: "center",
          }}
        >
          <FacebookIcon
            sx={{
              border: "2px solid rgb(110,110,110)",
              color: "white",
              borderRadius: "50%",
              padding: "1%",
              bgcolor: "rgb(110,110,110)",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "rgb(30,147,6)",
              },
            }}
          />
          <TwitterIcon
            sx={{
              border: "2px solid rgb(110,110,110)",
              borderRadius: "50%",
              color: "white",
              padding: "1%",
              bgcolor: "rgb(110,110,110)",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "rgb(30,147,6)",
              },
            }}
          />
          <InstagramIcon
            sx={{
              border: "2px solid rgb(110,110,110)",
              borderRadius: "50%",
              color: "white",
              padding: "1%",
              bgcolor: "rgb(110,110,110)",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "rgb(30,147,6)",
              },
            }}
          />
          <LinkedInIcon
            sx={{
              border: "2px solid rgb(110,110,110)",
              borderRadius: "50%",
              color: "white",
              padding: "1%",
              bgcolor: "rgb(110,110,110)",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "rgb(30,147,6)",
              },
            }}
          />
          <YouTubeIcon
            sx={{
              border: "2px solid rgb(110,110,110)",
              borderRadius: "50%",
              color: "white",
              padding: "1%",
              bgcolor: "rgb(110,110,110)",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "rgb(30,147,6)",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            color: "white",
          }}
        >
          <Typography>Call Us Free : </Typography>
          <Typography
            sx={{ fontWeight: "bold", "&:hover": { cursor: "pointer" } }}
          >
            {" "}
            18003094005
          </Typography>
        </Box>
      </Box>

      {/* Right Part */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "70%",
          columnGap: "30px",
          alignItems: "center",
          color: "white",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            columnGap: "10px",
            bgcolor: "rgb(110,110,110)",
            border: "2px solid rgb(110,110,110)",
            borderRadius: "20px",
            paddingX: "10px",
            paddingY: "4px",
            "&:hover": {
              cursor: "pointer",
            },
            position: "relative",
            zIndex: 10,
          }}
        >
          <Typography>Gurgon</Typography>
        </Box>

        {/* my account */}
        <Box
          sx={{
            display: "flex",
            columnGap: "10px",
            bgcolor: "rgb(110,110,110)",
            border: "2px solid rgb(110,110,110)",
            borderRadius: "20px",
            paddingX: "10px",
            paddingY: "4px",
            "&:hover": {
              cursor: "pointer",
            },
            position: "relative",
          }}
          onMouseEnter={() =>
            setToggleMsg({ ...toggleMsg, myAccount: true, myCart: false })
          }
          onMouseLeave={() =>
            setToggleMsg({ ...toggleMsg, myAccount: false, myCart: false })
          }
        >
          <AccountCircleIcon />
          <Typography>My Account</Typography>
          {toggleMsg.myAccount == true ? (
            <Box
              sx={{
                position: "absolute",
                color: "black",
                backgroundColor: "white",
                top: "35px",
                right: "0px",
                display: "Flex",
                flexDirection: "column",
                rowGap: "10px",
                paddingX: "20px",
                paddingY: "20px",
                borderRadius: "10px",
                alignItems: "center",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                zIndex: 3,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "rgb(231,234,239)",
                  width: "100%",
                  padding: "5px",
                  textAlign: "center",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "rgb(30,147,6)",
                    color: "white",
                  },
                }}
              >
                Login
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "rgb(231,234,239)",
                  width: "100%",
                  padding: "5px",
                  textAlign: "center",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "rgb(30,147,6)",
                    color: "white",
                  },
                }}
              >
                Register
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "rgb(231,234,239)",
                  width: "100%",
                  padding: "5px",
                  textAlign: "center",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "rgb(30,147,6)",
                    color: "white",
                  },
                }}
              >
                Sell
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  backgroundColor: "rgb(231,234,239)",
                  width: "100%",
                  padding: "5px",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "rgb(30,147,6)",
                    color: "white",
                  },
                }}
              >
                Partner Dashboard
              </Typography>
            </Box>
          ) : null}
        </Box>

        {/* my cart */}
        <Box
          sx={{
            display: "flex",
            columnGap: "10px",
            bgcolor: "rgb(110,110,110)",
            border: "2px solid rgb(110,110,110)",
            borderRadius: "20px",
            paddingX: "10px",
            paddingY: "4px",
            "&:hover": {
              cursor: "pointer",
            },
            position: "relative",
            zIndex: 3,
          }}
          onMouseEnter={() =>
            setToggleMsg({ ...toggleMsg, myCart: true, myAccount: false })
          }
          onMouseLeave={() =>
            setToggleMsg({ ...toggleMsg, myCart: false, myAccount: false })
          }
        >
          <ShoppingCartIcon />
          <Typography>My Cart</Typography>
          <Typography
            sx={{
              bgcolor: "rgb(30,147,6)",
              borderRadius: "50%",
              width: "20px",
              height: "25px",
              textAlign: "center",
            }}
          >
            0
          </Typography>
          {toggleMsg.myCart == true ? (
            <Box
              sx={{
                position: "absolute",
                width: "350px",
                color: "black",
                right: "0px",
                top: "40px",
                backgroundColor: "white",
                paddingX: "10px",
                paddingY: "10px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
              }}
            >
              <Typography>You have no items in your shopping cart</Typography>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
