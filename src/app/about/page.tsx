"use client";
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Message from "../assets/message.svg";
import Computer from "../assets/computer.svg";
import Clock from "../assets/clock.svg";
import HelloImage from "../assets/Helloimage.svg";
import aboutBanner from "../../app/assets/aboutBanner.png";
import aboutBannerMob from "../../app/assets/aboutBannerMob.png";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Page = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const Root = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "646px",
      marginBottom: "86px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "622px",
      marginBottom: "56px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: "620px",
    },
  }));
  const HelloSection = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "end",
    [theme.breakpoints.down("md")]: {
      width: "310px",
      height: "207px",
      marginTop: "32px",
    },
    [theme.breakpoints.up("md")]: { width: "626px", height: "418px" },
  }));

  return (
    <Box>
      <Header />
      <Root>
        {matches == true ? (
          <Image
            src={aboutBanner}
            alt="banner"
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
        ) : (
          <Image
            src={aboutBannerMob}
            alt="banner"
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "55px" },
              width: { xs: "308px", md: "1230px" },
              height: { xs: "139px", md: "213px" },
              fontWeight: { xs: "500", md: "400" },
              lineHeight: { xs: "26px", md: "60px" },
            }}
          >
            A series of free online conferences inviting you to explore the
            collision of leading edge thinking and innovative technologies
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "32px" },
              fontWeight: { xs: "400", md: "400" },
              width: { xs: "310px", md: "835px" },
              height: { xs: "63px", md: "106px" },
              lineHeight: { xs: "17px", md: "35px" },
              marginTop: { xs: "24px", md: "1rem" },
            }}
          >
            Engage with experts sharing their insight in an informal and
            friendly environment where everyone is welcome..
          </Typography>
        </Box>
      </Root>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: { md: "1189px" },
            height: { md: "418px" },
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                width: { xs: "313px", md: "668px" },
                height: { xs: "156px", md: "265px" },
                fontSize: { xs: "24px", md: "48px" },
                fontWeight: { xs: "500", md: "400" },
                lineHeight: { xs: "26px", md: "52px" },
                left: { md: "10%" },
                position: { xs: "unset", md: "absolute" },
                textAlign: { xs: "center", md: "unset" },
              }}
            >
              Our series has been curated to cover topics including Digital
              Privacy, Self Sovereign Identity, Web3, AI, and the Circular
              Economy
            </Typography>
          </Box>
          <HelloSection>
            <Image
              src={HelloImage}
              alt="banner"
              style={{ height: "100%", width: "100%" }}
            />
          </HelloSection>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "48px", md: "48px" },
            fontWeight: { xs: "400", md: "400" },
            height: { xs: "106px", md: "53px" },
            width: { xs: "305px", md: "375px" },
            lineHeight: "52px",
            color: "#0084FD",
            marginTop: { xs: "88px", md: "88px" },
            textAlign: "center",
          }}
        >
          About the Series
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: { xs: "500", md: "400" },
            lineHeight: { xs: "26px", md: "32px" },
            height: { xs: "126px", md: "77px" },
            width: { xs: "310px", md: "851px" },
            color: "#0084FD",
            marginTop: { xs: "24px", md: "32px" },
            textAlign: "center",
          }}
        >
          Although it may seem trite to use such words, we believe these
          technologies can change the world for the better.
        </Typography>
        <Box
          sx={{
            width: { xs: "312px", md: "1132px" },
            height: { xs: "448px", md: "388px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: { xs: "400", md: "400" },
              textAlign: "center",
              lineHeight: { xs: "17px", md: "28px" },
              marginTop: { xs: "24px", md: "35px" },
            }}
          >
            From <span style={{ fontWeight: "600" }}>DAOs </span> and their
            ability to align purposeful shared interests in fields like science
            and finance - interests that can advance research and create
            inclusive and sustainable economies.
            <span style={{ fontWeight: "600" }}> Self Sovereign Identity </span>
            with its promise to impact industries from air travel to banking and
            healthcare. All the way through to how{" "}
            <span style={{ fontWeight: "600" }}> AI </span> can augment these
            decentralized technologies as they converge and much more.
            <br />
            <br />
            All wrapped up in a format devoid of the technical jargon that can
            sometimes make these subjects somewhat inaccessible. A safe and
            supportive space in which individuals from academia, business,
            enthusiasts and the curious can come together, share their ideas and
            learn from each other.
            <br />
            <br />
            This is the ethos of the conference series and of our community.
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: "739px", md: "504px" },
            width: "100%",
            background: "#0084FD",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "48px" },
              fontWeight: { md: "400" },
            }}
          >
            About veiovia
          </Typography>
          <Typography
            sx={{
              width: { xs: "311px", md: "1124px" },
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: { md: "400" },
              lineHeight: { xs: "17px", md: "28px" },
              marginTop: { xs: "24px", md: "32px" },
              textAlign: "center",
            }}
          >
            Born in academia, Veiovia is a spin-out business from the University
            of York. We maintain a rigorous scientific approach to the
            development of our technology. We are innovating in several key
            areas - including decentralized tech - to provide user-centric
            digital tools and products. Products that have the potential to
            yield societal benefits that, up until recently, may have seemed out
            of reach.
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#0084FD",
            fontSize: "48px",
            fontWeight: "400",
            marginTop: { xs: "72px", md: "88px" },
          }}
        >
          Format
        </Typography>
        <Box
          sx={{
            marginTop: { xs: "32px", md: "48px" },
            display: "flex",
            flexDirection: {
              xs: "column",
              //   sm: "column",
              //   md: "column",
              lg: "row",
            },
            alignItems: "center",
            gap: { xs: "24px", md: "16px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "310px", md: "438px" },
              height: { xs: "391px", md: "482px" },
              border: "4px solid #0084FD",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image src={Message} alt="banner" />
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: { xs: "400", md: "400" },
                textAlign: "center",
                lineHeight: { xs: "17px", md: "26px" },
              }}
            >
              Speakers will usually present sequentially followed by audience
              participation.
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "310px", md: "438px" },
              height: { xs: "391px", md: "482px" },
              border: "4px solid #0084FD",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image src={Computer} alt="banner" />
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: { xs: "400", md: "400" },
                textAlign: "center",
                lineHeight: { xs: "17px", md: "26px" },
                width: { xs: "245px", md: "381px" },
              }}
            >
              The events will be held virtually and full joining details will be
              issued with your ticket.
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "310px", md: "438px" },
              height: { xs: "391px", md: "482px" },
              border: "4px solid #0084FD",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image src={Clock} alt="banner" />
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: { xs: "400", md: "400" },
                textAlign: "center",
                lineHeight: { xs: "17px", md: "26px" },
                width: { xs: "190px", md: "257px" },
              }}
            >
              Each conference will last no longer than two hours.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "32px" },
              fontWeight: { md: "400" },
              width: { md: "830px" },
              textAlign: "center",
              marginTop: { md: "88px" },
              lineHeight: { md: "35px" },
              letterSpacing: { md: "0.32px" },
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
              marginTop: "20px",
            }}
          >
            Attend
          </Button>
        </Box>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Page;
