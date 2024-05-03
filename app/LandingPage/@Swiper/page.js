"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.css";
import "../swiper.css";
import "../slider.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import layer1 from "@/public/assets/images/Layer_x0020_1.svg";
import tablet from "@/public/assets/images/tablet.svg";
import tick from "@/public/assets/images/tick.svg";
import _x33_ from "@/public/assets/images/_x33_.svg";
import dollar from "@/public/assets/images/dollar.svg";
import worldwideShipping from "@/public/assets/images/worldwide-shipping.svg";
import transparency from "@/public/assets/images/transparency.svg";
import protection from "@/public/assets/images/protection.svg";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import Image from "next/image";

const swiperData = [
  {
    title: "90%+ Disbursal Rate",
    description:
      "We work to match you with lenders that align with your needs, increasing your chances of loan approval.",
    image: layer1,
  },
  {
    title: "100% Paperless",
    description:
      "Apply for Link loan sitting in the comfort of your home, as we are 100% digital.",
    image: tablet,
  },
  {
    title: "Prequalified Offers",
    description:
      "Check offer rates without having to worry about the impact on your credit score.",
    image: tick,
  },
  {
    title: "Tailor Your Loan",
    description:
      "Customise your loan amount from INR 1000 to INR 1,00,000 within the tenure of 3 months to 2 years.",
    image: _x33_,
  },
  {
    title: "Instant Approval",
    description:
      "Online approval within 48 hours with less documentation to those needing the loan urgently.",
    image: dollar,
  },
  {
    title: "No geographical limitations*",
    description:
      "The platform is also accessible in many remote and underserved areas with an internet connection.",
    image: worldwideShipping,
  },
  {
    title: "No Hidden Charges",
    description:
      "Our process is transparent and fair, as there are no hidden charges that may surprise you.",
    image: transparency,
  },
  {
    title: "Safe and Secure",
    description:
      "We follow all the necessary security protocols, and data privacy standards to make sure that your information is safe and secure.",
    image: protection,
  },
];

const SwiperComponent = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      direction: "horizontal",

      breakpoints: {
        1440: { slidesPerView: 3.5, spaceBetween: 50 },
        1220: { slidesPerView: 3.5, spaceBetween: 50 },
        1100: { slidesPerView: 3.3, spaceBetween: 50 },
        1024: { slidesPerView: 2.8, spaceBetween: 0 }, // Adjusted for 1024px width
        1000: { slidesPerView: 2.8, spaceBetween: 0 },
        900: { slidesPerView: 2.7, spaceBetween: 0 },
       
        500: { slidesPerView: 2, spaceBetween: 20 },
        0: { slidesPerView: 1, spaceBetween: 20, dragSize: 100 },
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  });

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container sx={{ width: "100%", overflowX: "visible" }}>
        <Box className="swiper">
          <Box
            className="swiper-wrapper"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {swiperData.map((data, index) => (
              <Box className="swiper-slide" key={`slide${index}`}>
                <Card
                  sx={{
                    maxWidth: { xs: "296px" },
                    bgcolor: "#eaecf1",
                    borderRadius: "20px",
                    padding: {xs:'10px',sm:'30px',md:'30px',},
                    height: "250px",
                  }}
                >
                  <Box sx={{ height: "30%", paddingTop: "30px" }}>
                    <Image
                      src={data.image}
                      alt="Image description"
                      width={38}
                      height={38}
                    />
                  </Box>
                  <CardContent sx={{ padding: 0, height: "60%" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "21px",
                          color: "#243771",
                          fontWeight: 700,
                          lineHeight: "1.2",
                        }}
                      >
                        {data.title}
                      </Typography>
                    </Box>
                    <Box marginTop={{xs:'0px',md:'15px'}}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#243771",
                          paddingTop: "30px",
                        }}
                      >
                        {data.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingTop: "20px",
              alignItems: "center",
            }}
          >
            <Box
              className="swiper-scrollbar "
              bgcolor="#243771"
              sx={{
                position: "initial",
                margin: "10px 0",
                width: "-webkit-fill-available",
                height: "7px",
                // background: "#243771",
              }}
            ></Box>
            <Box sx={{ display: "flex" }}>
              <Box className="swiper-prev" sx={{ color: "#f6d549" }}>
                <KeyboardArrowLeftIcon fontSize="large" />
              </Box>
              <Box className="swiper-next" sx={{ color: "#f6d549" }}>
                <KeyboardArrowRightIcon fontSize="large" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SwiperComponent;
