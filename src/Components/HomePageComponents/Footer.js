import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
  return (
    <Box className="footerMainDiv">
      <div className="footerDetailsDiv">
        {/* about box */}
        <div className="footerAboutDiv">
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            ABOUT EVKHARIDO
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
            }}
          >
            EVKharido is committed to accelerate the pace of adopting green
            energy by making it easy for customers to migrate from conventional
            fossil fuel powered ICE’s to EV’s running on clean, green,
            sustainable energy sources. Our mission is to be a one-stop-shop for
            all things EV for migrating customers and first time EV owners, to
            enable them to make informed decisions, and empower them to purchase
            the EV best suited to their needs with one easy click.
          </Typography>
        </div>

        {/* quick link Box */}
        <div className="footerQuickLinksDiv">
          <Typography>QUICK LINKS</Typography>
          <List dense={true}>
            <ListItem
              component="li"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Terms & Conditions" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Privacy Policy" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Pricing Policy" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Exchange Policy" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Shipping Policy" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Sitemap" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Why Ev / Benefits of Ev" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="FAQs" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Brands" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Partner with Us" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Work With Us" />
            </ListItem>
            <ListItem
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemText primary="Savings Calculator" />
            </ListItem>
          </List>
        </div>

        {/* Stay connected box */}
        <div className="fooerStayConnectedDiv">
          <Typography
            sx={{
              color: "white",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            STAY CONNECTED
          </Typography>
          <SocialMediaIcons />
          <TextField
            type={"text"}
            placeholder={"Your email address"}
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              height: "50px",
            }}
          />
          <Button
            sx={{
              bgcolor: "rgb(31,148,7)",
              borderRadius: "20px",
              color: "white",
              width: "50%",
              "&:hover": {
                bgcolor: "rgb(31,148,7)",
              },
            }}
            variant="contained"
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>
      <Typography
        sx={{
          backgroundColor: "rgb(23,23,23)",
          width: "90%",
          padding: "2% 5%",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        © 2022 Shop My EV India Pvt Ltd . All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
