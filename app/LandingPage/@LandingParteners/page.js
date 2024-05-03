"use client";
import React, { useEffect } from "react";

import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Container, Typography } from "@mui/material";
import cred_client_1 from "@/public/assets/images/cred_client_1.webp";
import cred_client_2 from "@/public/assets/images/cred_client_2.webp";
import cred_client_3 from "@/public/assets/images/cred_client_3.webp";
import cred_client_4 from "@/public/assets/images/cred_client_4.webp";
import cred_client_5 from "@/public/assets/images/cred_client_5.webp";
import cred_client_6 from "@/public/assets/images/cred_client_6.webp";
import cred_client_7 from "@/public/assets/images/cred_client_7.webp";
import cred_client_8 from "@/public/assets/images/cred_client_8.webp";
import cred_client_9 from "@/public/assets/images/cred_client_9.webp";
import swiper from "swiper";
const swiperData = [
  {
    image: cred_client_1,
  },
  {
    image: cred_client_2,
  },
  {
    image: cred_client_3,
  },
  {
    image: cred_client_4,
  },
  {
    image: cred_client_5,
  },
  {
    image: cred_client_6,
  },
  {
    image: cred_client_7,
  },
  {
    image: cred_client_8,
  },
  {
    image: cred_client_9,
  },
];

const LandingPartners = () => {
  useEffect(() => {
    new swiper(".swiper", {
      direction: "horizontal",
      breakpoints: {
        1440: { slidesPerView: 3.5, spaceBetween: 50 },
        1220: { slidesPerView: 3.5, spaceBetween: 50 },
        1100: { slidesPerView: 3.3, spaceBetween: 50 },
        1024: { slidesPerView: 2.8, spaceBetween: 0 }, // Adjusted for 1024px width
        1000: { slidesPerView: 2.8, spaceBetween: 0 },
        900: { slidesPerView: 2.7, spaceBetween: 0 },
        768: { slidesPerView:1.8, spaceBetween: 0 },
        500: { slidesPerView: 1.5, spaceBetween: 0 },
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
    <Box
      sx={{
        overflow: "hidden",
        backgroundColor: "#243771",
        marginTop: { xs: "20%", sm: "5%" },
        padding: "40px 0",
      }}
    >
      <Container sx={{ width: "100%", overflow: "visible" }}>
        <Box>
          <Typography
            sx={{
              color: "#f7d64a",
              fontSize: {
                xs: "24px",
                sm: "26px",
                md: "28",
                lg: "30px",
                xl: "32px",
              },
              fontWeight: "900", 
              marginBottom: "30px",
            }}
          >
            Our Lending Partners
          </Typography>
        </Box>
        <Box className="swiper">
          <Box
            className="swiper-wrapper"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {swiperData.map((data, index) => (
              <Box className="swiper-slide" key={`slide${index}`}>
                <Box
                  sx={{
                    width: { xs: "270px", sm: "300px" },
                    marginRight: "25px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src={data.image}
                    alt="Image description"
                  />
                </Box>
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
              sx={{
                position: "initial",
                margin: "10px 0",
                width: "-webkit-fill-available",
                height: "7px",
                backgroundColor: "#5166a7",
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

export default LandingPartners;
