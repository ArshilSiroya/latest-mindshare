"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import banner from "../assets/banner.png";
import bannerMob from "../assets/bannerMob.png";
import frameMob from "../assets/frameMob.png";
import frameNewtwo from "../assets/frameNewtwo.png";
import Person1 from "../assets/Person1.svg";
import Partners from "../assets/Partners.svg";
import Raid from "../assets/Raid.svg";
import Gitcoin from "../assets/Gitcoin.png";
import Railgun from "../assets/Railgun.svg";
import Person2 from "../assets/Person2.svg";
import Person3 from "../assets/Person3.svg";
import rightArrow from "../assets/rightArrow.svg";
import lefttArrow from "../assets/lefttArrow.svg";
import Mask from "../assets/Mask.svg";
import blockchain from "../assets/blockchain.svg";
import veiovia from "../assets/veiovia.svg";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export default function Home() {
  // --------------------
  const theme = useTheme();

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
      height: "622px",
    },
  }));

  const AttendImage = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "752px",
      marginBottom: "65px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "400px",
      marginBottom: "88px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "400px",
      width: "100%",
      marginBottom: "88px",
    },
  }));
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const cardsData = [
    {
      id: "1",
      heading: "SERIE 1",
      date: "20th OCTOBER 2023",
      title: "Exploring the Power of DAOs and DAO Toolings",
      subTitle:
        "Kyle Webster takes us on a journey into DAOs, their successes and failures to date, and the innovation in tooling that is driving the space forward.",
    },
    {
      id: "2",
      heading: "SERIE 2",
      date: "20th OCTOBER 2023",
      title: "Unlocking the Potential of Public Goods",
      subTitle:
        "Scott Moore, co-founder of Gitcoin, imparts his discoveries, lessons learned and hopes for the future as a leader in the field of decentralized public goods funding.",
    },
    {
      id: "3",
      heading: "SERIE 3",
      date: "20th OCTOBER 2023",
      title: "Unlocking the Potential of Public Goods",
      subTitle:
        "Scott Moore, co-founder of Gitcoin, imparts his discoveries, lessons learned and hopes for the future as a leader in the field of decentralized public goods funding.",
    },
    {
      id: "4",
      heading: "SERIE 4",
      date: "20th OCTOBER 2023",
      title: "Unlocking the Potential of Public Goods",
      subTitle:
        "Scott Moore, co-founder of Gitcoin, imparts his discoveries, lessons learned and hopes for the future as a leader in the field of decentralized public goods funding.",
    },
    {
      id: "5",
      heading: "SERIE 4",
      date: "20th OCTOBER 2023",
      title: "Unlocking the Potential of Public Goods",
      subTitle:
        "Scott Moore, co-founder of Gitcoin, imparts his discoveries, lessons learned and hopes for the future as a leader in the field of decentralized public goods funding.",
    },
  ];
  const communityData = [
    {
      image: Person1,
      name: "Kyle Webster",
      position: "Raid Guild - Senior Engineer",
    },
    {
      image: Person2,
      name: "Scott Moore",
      position: "Gitcoin - Co-Founder",
    },
    {
      image: Person3,
      name: "Kieran Mesquita",
      position: "Railgun DAO - Co-Founder",
    },
  ];
  const contentWrapper = React.useRef(null);
  const communityWrapper = React.useRef(null);

  return (
    <Box>
      <Header />
      {/* -------------------banner-------------- */}
      <Root>
        {matches == true ? (
          <Image
            src={banner}
            alt="banner"
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
        ) : (
          <Image
            src={bannerMob}
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
              fontSize: { xs: "48px", md: "64px" },
              width: { xs: "375px", md: "910px" },
              height: { xs: "105px", md: "72px" },
              fontWeight: { xs: "500", md: "700" },
              lineHeight: { xs: "52px", md: "70px" },
            }}
          >
            Welcome to Mindshare
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "48px" },
              fontWeight: { xs: "500", md: "400" },
              width: { xs: "316px", md: "981px" },
              height: { xs: "120px", md: "120px" },
              lineHeight: { xs: "26px", md: "52px" },
              marginTop: { xs: "24px", md: "" },
            }}
          >
            Veiovia’s immersive conference series for the experts, the
            enthusiasts and the curious
          </Typography>
        </Box>
      </Root>
      {/* ----------------upcoming events--------------- */}
      <Box
        sx={{
          display: "flex",
          marginLeft: { md: "57px" },
          gap: "32px",
          alignItems: "center",
          marginTop: "56px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "64px", lineHeight: "70px" }}>
            Upcoming <br /> Events
          </Typography>
          <Box sx={{ marginTop: { xs: "5px", md: "0" } }}>
            <IconButton
              size="large"
              edge="end"
              color="primary"
              onClick={() => {
                sideScroll(contentWrapper.current, 25, 200, -10);
              }}
            >
              <Image src={lefttArrow} alt="" />
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              color="primary"
              onClick={() => {
                sideScroll(contentWrapper.current, 25, 200, 10);
              }}
            >
              <Box sx={{ marginLeft: "5px" }}>
                <Image src={rightArrow} alt="" />
              </Box>
            </IconButton>
          </Box>
        </Box>
        <Box
          ref={contentWrapper}
          sx={{
            display: "flex",
            overflow: "hidden",
            alignItems: "center",
            width: "100%",
          }}
        >
          {cardsData.map((value) => (
            <>
              <Card
                key={value.id}
                sx={{
                  width: { xs: "311px", md: "388px" },
                  height: { xs: "440px", md: "482px" },
                  background: "#0084FD",
                  padding: "13px",
                  marginBottom: "48px",
                  marginLeft: { xs: "40px", md: "32px" },
                  flexShrink: "0",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      marginBottom: { xs: "117px", md: "144px" },
                      fontSize: { xs: "12px", md: "16px" },
                      fontWeight: { xs: "600", md: "600" },
                    }}
                    color="#fff"
                  >
                    <strong> {value.heading} </strong>/ {value.date}
                  </Typography>
                  <Typography
                    color="#fff"
                    sx={{
                      fontSize: { xs: "24px", md: "36px" },
                      lineHeight: { xs: "26px", md: "39px" },
                      fontWeight: "500",
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    color="#fff"
                    marginTop="1rem"
                    sx={{
                      fontSize: { xs: "16px", md: "16px" },
                      lineHeight: "17px",
                    }}
                  >
                    {value.subTitle}
                  </Typography>
                </CardContent>
                <CardActions>
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
                    }}
                  >
                    View more
                  </Button>
                </CardActions>
              </Card>
            </>
          ))}
        </Box>
      </Box>
      {/* ---------------Attend for Free-------------- */}
      <AttendImage>
        {matches == true ? (
          <Image
            src={frameNewtwo}
            alt="banner"
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
        ) : (
          <Image
            src={frameMob}
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
              fontSize: { xs: "48px", md: "48px" },
              width: { xs: "375px", md: "910px" },
              height: { xs: "53px", md: "53px" },
              fontWeight: { xs: "400", md: "600" },
              lineHeight: { xs: "52px", md: "70px" },
            }}
          >
            Attend for free
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "24px" },
              fontWeight: { xs: "400", md: "400" },
              width: { xs: "312px", md: "829px" },
              height: { xs: "120px", md: "52px" },
              lineHeight: { xs: "26px", md: "26px" },
              marginTop: { xs: "24px", sm: "16px" },
              marginBottom: { xs: "35px", sm: "40px", md: "1rem" },
            }}
          >
            Register on Veiovia’s website to gain access to all past and future
            conferences along with immersive experiences.
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
            }}
          >
            View more
          </Button>
        </Box>
      </AttendImage>
      {/* ----------------Community section----------------- */}
      <Box
        sx={{
          marginInline: { xs: "32px", md: "224px" },
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "column" },
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "48px", md: "64px" },
            fontWeight: "400",
            marginBottom: { xs: "24px", md: "32px" },
          }}
        >
          Community
        </Typography>
        <Typography
          // variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "23px" },
            fontWeight: "400",
            width: { xs: "316px", md: "849px" },
            height: { xs: "118px", md: "132px" },
          }}
          textAlign="center"
          lineHeight="25px"
        >
          {`Our community unites people with an interest in navigating complex challenges through innovative technology and radical thinking. It's a friendly and supportive environment with no promotion of products permitted.`}
        </Typography>
        <Box
          ref={communityWrapper}
          sx={{
            gap: "16px",
            display: "flex",
            alignItems: "center",
            marginTop: { xs: "70px", md: "36px" },
            overflow: "hidden",
            width: "100%",
            justifyContent: "center",
            // flexDirection: { xs: "column", md: "row" },
          }}
        >
          {communityData.map((value) => (
            <Box sx={{ flexShrink: "0" }} key={value.image}>
              <Image
                src={value.image}
                alt="banner"
                style={{ width: "320px", height: "400px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "8px",
                  marginTop: "19px",
                }}
              >
                <Typography variant="h3">{value.name}</Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                  {value.position}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            marginTop: { xs: "5px", md: "0" },
            display: { xs: "flex", sm: "none" },
          }}
        >
          <IconButton
            size="large"
            edge="end"
            color="primary"
            onClick={() => {
              sideScroll(communityWrapper.current, 25, 200, -10);
            }}
          >
            <Image src={lefttArrow} alt="" />
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            color="primary"
            onClick={() => {
              sideScroll(communityWrapper.current, 25, 200, 10);
            }}
          >
            <Box sx={{ marginLeft: "5px" }}>
              <Image src={rightArrow} alt="" />
            </Box>
          </IconButton>
        </Box>
      </Box>
      {/* ----------------mask section----------------------- */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "1222px",
            marginInline: "109px",
            display: "flex",
            marginTop: "91px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "start" },
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "31px" },
                  fontWeight: "400",
                  lineHeight: "35px",
                  width: { xs: "326px", md: "100%" },
                  textAlign: { xs: "center", md: "unset" },
                }}
              >
                <strong style={{ color: "#0084FD" }}> Veiovia </strong> is a
                spin-out business from the University of York. We are innovating
                in several key areas including decentralized technology. With an
                approach grounded in science, we are answering the question:
                “What is possible?”
              </Typography>
            </Box>
            <Button
              size="small"
              sx={{
                color: "#fff",
                marginTop: { xs: "40px", md: "67px" },
                backgroundColor: "#0084FD",
                borderRadius: "53px",
                fontSize: "16px",
                fontWeight: "600",
                width: "123px",
              }}
            >
              Learn more
            </Button>
          </Box>
          <Box sx={{ marginLeft: "57px", display: { xs: "none", md: "flex" } }}>
            <Image
              src={Mask}
              alt="banner"
              style={{ width: "557px", height: "573px", marginBottom: "88px" }}
            />
          </Box>
        </Box>
      </Box>
      {/* ----------------Brands section-------------- */}
      <Box
        sx={{
          marginInline: { xs: "24px", md: "46px" },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginInline: "15px",
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            marginTop: { xs: "56px", md: "" },
          }}
        >
          <Box
            sx={{
              paddingInline: { xs: "49px", md: "218px" },
              paddingBlock: "57px",
              backgroundColor: "#F8F8F9",
              width: { xs: "312px", md: "651px" },
              height: { xs: "212px", md: "212px" },
              borderRadius: "16px",
            }}
          >
            <Image
              src={blockchain}
              alt="banner"
              style={{
                width: "214px",
                height: "98px",
                marginBottom: "32px",
                marginRight: "16px",
              }}
            />
          </Box>
          <Box
            sx={{
              paddingInline: { xs: "49px", md: "218px" },
              paddingBlock: "57px",
              backgroundColor: "#F8F8F9",
              width: { xs: "312px", md: "651px" },
              height: { xs: "212px", md: "212px" },
              marginLeft: { xs: "", md: "16px" },
              marginTop: { xs: "1rem", md: "0px" },
              borderRadius: "16px",
            }}
          >
            <Image
              src={veiovia}
              alt="banner"
              style={{ width: "200px", height: "77px", marginBottom: "32px" }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={Partners}
            alt="banner"
            style={{ width: "101px", height: "18px", marginBlock: "32px" }}
          />
        </Box>
        <Box
          sx={{
            display: { md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            gap: "24px",
            marginInline: "15px",
            marginBottom: { xs: "0px", md: "82px" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#F8F8F9",
              width: { xs: "312px", md: "433px" },
              height: { xs: "212px", md: "212px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "16px",
            }}
          >
            <Image
              src={Raid}
              alt="banner"
              style={{
                width: "161px",
                height: "42px",
              }}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "#F8F8F9",
              width: { xs: "312px", md: "433px" },
              height: { xs: "212px", md: "212px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBlock: { xs: "1rem", md: "0px" },
              borderRadius: "16px",
            }}
          >
            <Image
              src={Gitcoin}
              alt="banner"
              style={{
                width: "161px",
                height: "42px",
              }}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "#F8F8F9",
              width: { xs: "312px", md: "433px" },
              height: { xs: "212px", md: "212px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: { xs: "56px", md: "0px" },
              borderRadius: "16px",
            }}
          >
            <Image
              src={Railgun}
              alt="banner"
              style={{
                width: "161px",
                height: "42px",
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* ------------------Footer------------------- */}
      <Footer />
    </Box>
  );
}
