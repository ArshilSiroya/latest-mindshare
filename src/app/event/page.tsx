"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import Person4 from ".././assets/Person4.svg";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const page = () => {
  // ----------------

  const Root = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "312px",
      height: "227px",
    },

    [theme.breakpoints.up("md")]: {
      width: "513px",
      height: "340px",
    },
  }));
  return (
    <Box>
      <Header />
      {/* /* -------------starting text-------------- */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            marginTop: { xs: "51px", md: "137px" },
            marginBottom: "93px",
            marginInline: "60px",
            width: "100%",
            height: { md: "703px" },
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
            justifyContent: { xs: "center", md: "unset" },
            alignItems: { xs: "center", md: "stretch" },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarMonthRoundedIcon
                sx={{
                  color: "#F57E59",
                  height: { xs: "22px" },
                  width: { xs: "22px" },
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "" },
                  fontWeight: { xs: "400" },
                  marginLeft: { xs: "10px" },
                }}
              >
                11th Oct 2023
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                size="small"
                sx={{
                  marginTop: "7px",
                  color: "#fff",
                  backgroundColor: "#F57E59",
                  marginLeft: "7px",
                  borderRadius: "53px",
                  paddingInline: "20px",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "1px solid white",
                }}
              >
                Secure your spot
              </Button>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBlock: "24px" }}
          >
            <AccessTimeOutlinedIcon sx={{ color: "#F57E59" }} />
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "" },
                fontWeight: { xs: "400" },
                marginLeft: { xs: "10px" },
              }}
            >
              17:00 HS CET
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SensorsOutlinedIcon sx={{ color: "#F57E59" }} />
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "" },
                fontWeight: { xs: "400" },
                marginLeft: { xs: "10px" },
              }}
            >
              Veiovia Platform
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "47px",
              fontSize: { xs: "24px", md: "48px" },
              fontWeight: { xs: "500", md: "400" },
              color: "#0084FD",
              width: { xs: "311px", md: "548px" },
              lineHeight: { xs: "26px", md: "52px" },
              textAlign: { xs: "center", md: "unset" },
            }}
          >
            Exploring the Power of DAOs and DAO Toolings
          </Box>
          <Box
            sx={{
              marginTop: { xs: "24px", md: "24px" },
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: { xs: "400", md: "400" },
              lineHeight: { xs: "17px", md: "24px" },
              width: { xs: "316px", md: "580px" },
              textAlign: { xs: "center", md: "unset" },
            }}
          >
            Join us as we dive into the world of Decentralized Autonomous
            Organizations (DAOs) and learn about the latest tools and
            innovations driving this space.
          </Box>
          <Box
            sx={{
              marginTop: "47px",
              fontSize: "24px",
              fontweight: "400",
              color: "#F57E59",
              marginRight: { xs: "6rem", sm: "unset" },
            }}
          >
            Conference Details
          </Box>
          <Typography
            sx={{
              marginTop: { xs: "24px", md: "32px" },
              width: { xs: "330px", md: "1361px" },
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: { xs: "400", md: "400" },
              lineHeight: { xs: "17px", md: "28px" },
              letterSpacing: "0.16px",
            }}
          >
            Kyle will delve into the origins, introducing key concepts how DAOs
            are built and what the future holds. DAO (pronounced as “Dow,” like
            the Dow Jones Industrial Average) is the acronym for decentralized
            autonomous organization. A DAO is a new type of digital-first entity
            that shares similarities with a traditional company structure but
            has some additional features, such as the automatic enforcement of
            operating rules via smart contracts (we’ll explain more about these
            and why they are so interesting). DAOs come in many structures, but
            all operate as collectives in which members make decisions
            democratically. No single person exerts control in the way a
            conventional CEO or senior management team would.
          </Typography>
        </Box>
      </Box>

      {/* -------------card--------------- */}

      <Box
        sx={{
          height: { xs: "645px", md: "495px" },
          width: { xs: "100%", md: "100%" },
          backgroundColor: "#0084FD",
          display: { md: "flex" },
          // flexDirection: "column",
          alignItems: "center",
          paddingInline: { md: "185px" },
          justifyContent: { xs: "center", md: "space-evenly" },
          paddingTop: { xs: "56px", md: "unset" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Root>
            <Image
              src={Person4}
              alt="banner"
              style={{
                width: "100%",
                height: "100%",
                // scale: 2,
                // position: "absolute",
              }}
            />
          </Root>
        </Box>

        <Box
          sx={{
            marginLeft: { xs: "40px", sm: "200px", md: "40px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "24px", md: "16px" },
              fontWeight: { xs: "500", md: "400" },
              marginBottom: { xs: "30px", md: "24px" },
              marginTop: { xs: "10px", md: "unset" },
              color: "#fff",
            }}
          >
            Speaker
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: { xs: "400", md: "500" },
              marginBottom: { xs: "24px", md: "16px" },
              color: "#fff",
            }}
          >
            Name Lastname
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              marginBottom: "32px",
              color: "#fff",
            }}
          >
            CEO Company
          </Typography>
          <Typography
            sx={{
              width: { xs: "314px", md: "513px" },
              color: "#fff",
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: { xs: "400", md: "400" },
              lineHeight: { xs: "20px", md: "26px" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Lobortis faucibus metus
            facilisi diam eleifend a habitant. Vitae morbi gravida sed amet
            lectus enim faucibus sit. Tempus et lectus donec aliquet turpis.
            Lacus amet arcu libero habitasse ac. Tempor porttitor interdum mi a.
            Vulputate sollicitudin urna tristique neque urna.
          </Typography>
        </Box>
      </Box>

      {/* -------------join these section------------- */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBlock: "88px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: { xs: "500", md: "400" },
            lineHeight: { xs: "26px", md: "35px" },
            width: { xs: "308px", md: "812px" },
            display: { xs: "", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Join these expert-led discussions to learn all about the progress to
          date and the possibilities for tomorrow
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
            border: "1px solid white",
            marginTop: "2rem",
          }}
        >
          Attend
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default page;
