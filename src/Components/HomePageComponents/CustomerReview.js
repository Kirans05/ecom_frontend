import { Avatar, Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FaqCard from "./FaqCard";
import ForwardArrow from "../NavigationArrows/ForwardArrow";
import BackwardArrow from "../NavigationArrows/BackwardArrow";

const CustomerReview = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [CustomerReviewArr, setCustomerReviewArr] = useState([
    {
      url: "https://evkharido.com/media/wysiwyg/sonu.jpg",
      name: "AMIT KUMAR",
      review:
        "EVKharido helped me greatly to purchase correct vehicle for my needs .",
      no: 1,
    },
    {
      url: "https://evkharido.com/media/wysiwyg/lakshay_1_.jpg",
      name: "NIKHIL BHATT",
      review:
        "EVKharido has so much information about products and I am very happy with my purchase.",
      no: 2,
    },
    {
      url: "https://evkharido.com/media/wysiwyg/anuj_1_.jpg",
      name: "AKHIL GUPTA",
      review:
        "EVKharido is a good website to get information and purchase electric scooter",
      no: 3,
    },
  ]);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [faqData, setFaqData] = useState([
    {
      question:
        "How much electricity units an electric scooter consumes in full charging at home?",
      answer:
        "Approx 2-4 units per full charge - this works out to a cost of approx Rs. 30 to Rs 35 per full charge (assuming electricity cost @ Rs.10 per unit).",
    },
    {
      question: "What is the range of an electric scooter?",
      answer:
        "The driving range depends on the brand and model - based on manufacturer's claim the range can be anywhere between 80kms to 300kms per charge",
    },
    {
      question: "What is the range of an EV?",
      answer:
        "The range of EVs with a single charge depends on the design and modelling. Many modern EVs are at a reasonable distance for daily commute. This means you can charge your car at home or at work without interfering with your system. For longer trips it is a good idea to use fast chargers to charge as it is the fastest way to charge your EV. You can find them in parking lots, gas stations, supermarkets and supermarkets. This goes well with a comfortable stop on a long trip. There are also long-distance electric cars available in the market.",
    },
    {
      question: "Are Electric Cars as Safe as Other Vehicles?",
      answer: "Yes they are as safe as other vehicles.",
    },
    {
      question: "Can I purchase Insurance for my electric vehicle ?",
      answer: "Yes, you can purchase Insurance.",
    },
    {
      question: "How much will I save on the running cost in one month?",
      answer:
        "Kindly check with the calculator available on our website, yes you will save a lot.",
    },
    {
      question:
        "Difference between LA (Lead Acid) and Li (Lithium Ion) Battery?",
      answer:
        "LA acid batteries are heavier than the Li one. Charging time of the Li battery is lesser than the LA.",
    },
    {
      question:
        "What is the price difference between a petrol scooter and an electric scooter?",
      answer:
        "As on date the pricing is almost similar. Low speed scooters are more cost effective due to cheap charging cost, zero service and low maintenance costs",
    },
    {
      question: "What is the average cost of servicing an electric 2 wheeler?",
      answer:
        "The service charges of an electric 2 wheeler / scooter are significantly lower than high pollution petrol scooters - the Regular annual service would cost Rs 1000 per year compared to Rs 5000 - 6000 per year for a high pollution petrol scooter.",
    },
    {
      question: "How often do electric vehicles need to be serviced?",
      answer: "There is a fixed schedule given by the manufacturer.",
    },
  ]);
  const [faqCurrentNumber, setFaqCurrentNumber] = useState(0);

  const nextReviewHandler = () => {
    if (currentNumber == 1) {
      setCurrentNumber(2);
    } else if (currentNumber == 2) {
      setCurrentNumber(3);
    } else {
      setCurrentNumber(1);
    }
  };

  const previousReviewHandler = () => {
    if (currentNumber == 1) {
      setCurrentNumber(3);
    } else if (currentNumber == 2) {
      setCurrentNumber(1);
    } else {
      setCurrentNumber(2);
    }
  };

  return (
    <Box
      className="customerReviewMainDiv"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
        CUSTOMER{" "}
        <span
          style={{
            fontSize: "40px",
            color: "rgb(56,160,34)",
            fontWeight: "bold",
          }}
        >
          REVIEWS
        </span>
      </Typography>
      <Typography sx={{ fontWeight: 100 }}>
        FEEDBACK FROM OUR CUSTOMERS
      </Typography>
      <Divider
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      />

      {/* customer review */}
      <div className="customerBox">
        <div className="customerDetailsDiv">
          <Avatar
            alt="Remy Sharp"
            src={CustomerReviewArr[currentNumber - 1].url}
            sx={{ width: 100, height: 100 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <Typography
              sx={{
                color: "rgb(31,148,7)",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {CustomerReviewArr[currentNumber - 1].name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
              }}
            >
              "{CustomerReviewArr[currentNumber - 1].review}"
            </Typography>
          </div>
        </div>

        {/* forward arrow */}
        {showArrows == true ? (
          <div onClick={nextReviewHandler}>
            <ForwardArrow top={"30%"} right={"1%"} />
          </div>
        ) : null}

        {/* backward arrow */}
        {showArrows == true ? (
          <div onClick={previousReviewHandler}>
            <BackwardArrow top={"30%"} left={"1%"} />
          </div>
        ) : null}
      </div>

      {/* faq questions and answers */}
      <div className="faqMainDiv">
        {faqData.map((item, index) => {
          return (
            <FaqCard
              key={index}
              item={item}
              faqCurrentNumber={faqCurrentNumber}
              index={index + 1}
              setFaqCurrentNumber={setFaqCurrentNumber}
            />
          );
        })}
      </div>
    </Box>
  );
};

export default CustomerReview;
