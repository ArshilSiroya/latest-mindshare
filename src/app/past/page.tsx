import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const page = () => {
  const navItems = ["Home", "About", "Future", "Past", "Contact"];

  return (
    <Box>
      <Header />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginTop: "160px",
          marginBottom: { xs: "195px", md: "281px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "48px", md: "64px" },
            fontWeight: { xs: "500", md: "400" },
            width: { xs: "311px", md: "513px" },
            lineHeight: { xs: "52px", md: "70px" },
          }}
        >
          Our conferences
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: { xs: "500", md: "400" },
            marginTop: { xs: "24px", md: "50px" },
            width: { xs: "306px", md: "573px" },
            lineHeight: { xs: "26px", md: "35px" },
          }}
        >
          Our first conference is in the future. Content will be uploaded here
          soon.
        </Typography>
        <Button
          size="small"
          sx={{
            color: "#fff",
            backgroundColor: "#F57E59",
            marginLeft: "7px",
            borderRadius: "53px",
            paddingInline: "20px",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "32px",
            border: "1px solid white",
          }}
        >
          Upcoming Conferences
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};

export default page;
