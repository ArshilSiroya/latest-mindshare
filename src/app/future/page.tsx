import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ReactPerson1 from "../assets/ReactPerson1.svg";
import ReactPerson2 from "../assets/ReactPerson2.svg";
import ReactPerson3 from "../assets/ReactPerson3.svg";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Future() {
  const navItems = ["Home", "About", "Future", "Past", "Contact"];

  const conferenceData = [
    {
      id: "1",
      heading: "SERIE 1",
      date: "20th OCTOBER 2023",
      title: "The Power of DAOs and DAO Tooling",
      subTitle:
        "Raid Guild’s  Kyle Webster takes us on a journey into DAOs, their successes and failures to date, and the innovation in tooling that is driving the space forward",
      name: "Kyle Webster",
      position: "Lead Blockchain Engineer (METL)",
      image: ReactPerson1,
    },
    {
      id: "2",
      heading: "SERIE 1",
      date: "11th OCTOBER 2023",
      title: "How Web3 Innovation Empowers Public Good",
      subTitle:
        "Scott Moore, co-founder of Gitcoin, imparts his discoveries, lessons learned and hopes for the future as a leader in the field of decentralized public goods funding",
      name: "Scott Moor",
      position: "Co-Founder (Gitcoin)",
      image: ReactPerson2,
    },
    {
      id: "3",
      heading: "SERIE 1",
      date: "11th OCTOBER 2023",
      title: "Zero Knowledge Proofs; Traversing the Frontier of Tech",
      subTitle:
        "Raid Guild’s  Kyle Webster takes us on a journey into DAOs, their successes and failures to date, and the innovation in tooling that is driving the space forward",
      name: "Kieran Mesquita",
      position: "Co-Founder (RAILGUN DAO)",
      image: ReactPerson3,
    },
  ];
  return (
    <Box>
      <Box sx={{ marginBottom: "120px" }}>
        <Header />
      </Box>

      {/* ----------Upcoming Conferences------------- */}

      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "89px",
          // flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "64px" },
              lineHeight: "70px",
              fontWeight: { xs: "500", md: "400" },
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Upcoming Conferences
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: { xs: "500", md: "400" },
              width: { xs: "306px", md: "590px" },
              textAlign: "center",
              lineHeight: "35px",
            }}
          >
            Our events are full of compelling topics to explore and experience
          </Typography>
        </Box>
      </Box>

      {/* --------------------Card--------------------- */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {conferenceData.map((value) => (
          <Card
            key={value.id}
            sx={{
              width: { xs: "311px", sm: "311px", md: "1315px" },
              height: { xs: "440px", md: "400px" },
              display: "flex",
              marginBottom: "24px",
            }}
          >
            <Box
              sx={{
                width: "893px",
                background: "#0084FD",
                height: "100%",
                paddingTop: "24px",
                paddingLeft: { xs: "24px", md: "42px" },
                display: "flex",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "23px",
                }}
              >
                <Typography
                  color="#fff"
                  sx={{ fontSize: { xs: "12px", md: "16px" } }}
                >
                  <strong> {value.heading}</strong>/ {value.date}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "24px", md: "36px" },
                    fontWeight: { xs: "500" },
                    color: "#fff",
                    lineHeight: { xs: "26px", md: "39px" },
                    width: { xs: "100%", md: "70%" },
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "16px" },
                    fontWeight: { xs: "400", md: "400" },
                    width: { xs: "271px", md: "432px" },
                    color: "#fff",
                  }}
                >
                  {value.subTitle}
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "24px" },
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#fff",
                    }}
                  >
                    Speaker
                  </Typography>
                  <Typography
                    sx={{
                      width: { xs: "172px", md: "unset" },
                      fontSize: { xs: "12px", md: "16px" },
                      fontWeight: { md: "400" },
                      color: "#fff",
                      marginTop: { md: "8px" },
                    }}
                  >
                    {value.name} / {value.position}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    size="small"
                    sx={{
                      color: "#fff",
                      backgroundColor: "#F57E59",
                      borderRadius: "53px",
                      paddingInline: "20px",
                      fontSize: "16px",
                      fontWeight: "600",
                      border: "1px solid white",
                    }}
                  >
                    View more
                  </Button>
                  <IconButton
                    edge="end"
                    color="primary"
                    aria-label="menu"
                    sx={{
                      color: "#fff",
                      backgroundColor: "#F57E59",
                      marginLeft: "16px",
                      border: "1px solid white",
                    }}
                  >
                    <NotificationsNoneRoundedIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: { md: "422px" },
                background: "#FFA843",
                // display: "flex",
                height: "100%",
                position: "relative",
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              <Box>
                <Image
                  src={value.image}
                  alt="banner"
                  style={{
                    width: "261px",
                    height: "400px",
                    scale: 2,
                  }}
                />
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBlock: "88px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: { xs: "500", md: "400" },
            width: { xs: "308px", md: "812px" },
            textAlign: "center",
            lineHeight: "35px",
            marginBottom: { xs: "24px", md: "25px" },
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
          }}
        >
          Attend
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}
