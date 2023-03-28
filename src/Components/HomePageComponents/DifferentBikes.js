import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const DifferentBikes = () => {
  const [toggleMenu, setToggleMenu] = useState({
    twoWheeler: false,
    threeWheeler: false,
    eCar: false,
    eMassMobility: false,
    news_review: false,
    aboutUs: false,
  });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "10vh",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
      }}
    >
      {/* image */}
      <Box
        sx={{
          width: "10%",
          marginRight: "20px",
          "&:hover": {
            cursor: "pointer",
          },
          alignSelf: "center",
        }}
      >
        <Box
          component={"img"}
          src={
            "https://evkharido.com/media/logo/stores/1/New_Logo_-_FInal_.jpg"
          }
          alt={"image"}
          sx={{
            width: "100%",
          }}
        />
      </Box>

      {/* E TWO WHEELERS */}
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(30,147,6)",
            color: "white",
          },
          width: "10%",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
        onMouseEnter={() =>
          setToggleMenu({
            ...toggleMenu,
            twoWheeler: true,
            threeWheeler: false,
            eCar: false,
            eMassMobility: false,
            news_review: false,
            aboutUs: false,
          })
        }
        onMouseLeave={() =>
          setToggleMenu({
            ...toggleMenu,
            twoWheeler: false,
            threeWheeler: false,
            eCar: false,
            eMassMobility: false,
            news_review: false,
            aboutUs: false,
          })
        }
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          E TWO WHEELERS
        </Typography>
        {toggleMenu.twoWheeler == true ? (
          <Box
            sx={{
              position: "absolute",
              top: "70px",
              left: "0px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              padding: "5px 0px 5px 0px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              color: "black",
              zIndex:9,
              backgroundColor:"white"
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              Electric Scooter
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
                zIndex:9
              }}
            >
              Electric Moped
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
                zIndex:9
              }}
            >
              Electric Bike
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
                zIndex:9
              }}
            >
              Electric Cycle
            </Typography>
          </Box>
        ) : null}
      </Box>

      {/* E THREE WHEELERS */}
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(30,147,6)",
            color: "white",
          },
          width: "10%",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
        onMouseEnter={() =>
          setToggleMenu({
            ...toggleMenu,
            threeWheeler: true,
            eCar: false,
            eMassMobility: false,
            news_review: false,
            aboutUs: false,
            twoWheeler: false,
          })
        }
        onMouseLeave={() =>
          setToggleMenu({
            ...toggleMenu,
            threeWheeler: false,
            eCar: false,
            eMassMobility: false,
            news_review: false,
            aboutUs: false,
            twoWheeler: false,
          })
        }
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          E THREE WHEELERS
        </Typography>
        {toggleMenu.threeWheeler == true ? (
          <Box
            sx={{
              position: "absolute",
              top: "70px",
              left: "0px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              padding: "5px 0px 5px 0px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              color: "black",
              zIndex:9,
              backgroundColor:"white"
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              Electric 3 Wheeler
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              Electric E Rikshaw
            </Typography>
          </Box>
        ) : null}
      </Box>

      {/* ELECTRIC CAR */}
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(30,147,6)",
            color: "white",
          },
          width: "10%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
        }}
        onMouseEnter={() =>
          setToggleMenu({
            ...toggleMenu,
            eCar: true,
            eMassMobility: false,
            news_review: false,
            aboutUs: false,
            twoWheeler: false,
            threeWheeler: false,
          })
        }
        onMouseLeave={() =>
          setToggleMenu({
            ...toggleMenu,
            eCar: false,
            eMassMobility: false,
            news_review: false,
            aboutUs: false,
            twoWheeler: false,
            threeWheeler: false,
          })
        }
      >
        <Typography>ELECTRIC CAR</Typography>

        {toggleMenu.eCar == true ? (
          <Box
            sx={{
              position: "absolute",
              top: "70px",
              left: "0px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              padding: "5px 0px 5px 0px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              color: "black",
              zIndex:9,
              backgroundColor:"white"
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              E Car
            </Typography>
          </Box>
        ) : null}
      </Box>

      {/* ELECTRIC MASS MOBILITY */}
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(30,147,6)",
            color: "white",
          },
          width: "10%",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
        onMouseEnter={() =>
          setToggleMenu({
            ...toggleMenu,
            eMassMobility: true,
            news_review: false,
            aboutUs: false,
            twoWheeler: false,
            threeWheeler: false,
            eCar: false,
          })
        }
        onMouseLeave={() =>
          setToggleMenu({
            ...toggleMenu,
            eMassMobility: false,
            news_review: false,
            aboutUs: false,
            twoWheeler: false,
            threeWheeler: false,
            eCar: false,
          })
        }
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          ELECTRIC MASS MOBILITY
        </Typography>
        {toggleMenu.eMassMobility == true ? (
          <Box
            sx={{
              position: "absolute",
              top: "70px",
              left: "0px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              padding: "5px 0px 5px 0px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              color: "black",
              zIndex:9,
              backgroundColor:"white"
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              Electric Bus
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              E Van
            </Typography>
          </Box>
        ) : null}
      </Box>

      {/* NEWS & REVIEWS */}
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(30,147,6)",
            color: "white",
          },
          width: "10%",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
        onMouseEnter={() =>
          setToggleMenu({
            ...toggleMenu,
            news_review: true,
            aboutUs: false,
            twoWheeler: false,
            threeWheeler: false,
            eCar: false,
            eMassMobility: false,
          })
        }
        onMouseLeave={() =>
          setToggleMenu({
            ...toggleMenu,
            news_review: false,
            aboutUs: false,
            twoWheeler: false,
            threeWheeler: false,
            eCar: false,
            eMassMobility: false,
          })
        }
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          NEWS & REVIEWS
        </Typography>
        {toggleMenu.news_review == true ? (
          <Box
            sx={{
              position: "absolute",
              top: "70px",
              left: "0px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              padding: "5px 0px 5px 0px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              color: "black",
              zIndex:9,
              backgroundColor:"white"
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              Informative Article EV
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              EV Guide & Tutorial
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              Latest EV News Bike
            </Typography>
          </Box>
        ) : null}
      </Box>

      {/* EV SERVICES */}
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(30,147,6)",
            color: "white",
          },
          width: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>EV SERVICES</Typography>
      </Box>

      {/* ABOUT US */}
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(30,147,6)",
            color: "white",
          },
          width: "10%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
        }}
        onMouseEnter={() =>
          setToggleMenu({
            ...toggleMenu,
            aboutUs: true,
            twoWheeler: false,
            threeWheeler: false,
            eCar: false,
            eMassMobility: false,
            news_review: false,
          })
        }
        onMouseLeave={() =>
          setToggleMenu({
            ...toggleMenu,
            aboutUs: false,
            twoWheeler: false,
            threeWheeler: false,
            eCar: false,
            eMassMobility: false,
            news_review: false,
          })
        }
      >
        <Typography>ABOUT US</Typography>
        {toggleMenu.aboutUs == true ? (
          <Box
            sx={{
              position: "absolute",
              top: "70px",
              left: "0px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              padding: "5px 0px 5px 0px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              color: "black",
              zIndex:9,
              backgroundColor:"white"
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgb(243,243,243)",
                },
                padding: "0px 0px 0px 15px",
              }}
            >
              Partner with us - become an EV preneur
            </Typography>
          </Box>
        ) : null}
      </Box>

      {/* FRANCHISE */}
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(30,147,6)",
            color: "white",
          },
          width: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>FRANCHISE</Typography>
      </Box>
    </Box>
  );
};

export default DifferentBikes;
