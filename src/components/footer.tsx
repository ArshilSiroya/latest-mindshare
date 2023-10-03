"use client";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import FooterLogo from ".././app/assets/FooterLogo.svg";
import discordIcon from ".././app/assets/discord.png";
import telegramIcon from ".././app/assets/telegramIcon.png";
import medium from ".././app/assets/threedot.png";
import twitter from ".././app/assets/twitterIcon.png";
import bluesky from ".././app/assets/blueskyIcon.png";
import mastodom from ".././app/assets/mastodomIcon.png";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  return (
    <Box>
      <Box
        sx={{
          height: "86px",
          background: "#0084FD",
          display: "flex",
          paddingBottom: "11px",
          alignItems: { xs: "center", md: "end" },
          justifyContent: {
            xs: "center",
            md: "start",
            lg: "start",
          },
          paddingLeft: { md: "50px" },
        }}
      >
        <Image
          src={FooterLogo}
          alt="banner"
          style={{ width: "200px", height: "20px" }}
        />
      </Box>
      <Box
        sx={{
          justifyContent: { md: "space-between" },
          height: { sm: "120px", xs: "120px", md: "128px" },
          background: "#0084FD",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", md: "row" },
          flexFlow: "column-reverse",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginBottom: { xs: "2.5rem", md: "0px" },
            marginTop: { xs: "25px", md: "" },
          }}
        >
          <Button
            sx={{
              color: "#fff",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "300",
              marginLeft: { xs: "", md: "48px" },
            }}
          >
            Veiovia © 2022
          </Button>
          <Link href="https://www.google.com" target="_blank">
            <Button
              sx={{
                color: "#fff",
                fontSize: { xs: "12px", md: "16px" },
                fontWeight: "300",
                marginInline: "12px",
                cursor: "pointer",
              }}
            >
              | Terms & Conditions
            </Button>
          </Link>
          <Link href="https://www.google.com" target="_blank">
            <Button
              sx={{
                color: "#fff",
                fontSize: { xs: "12px", md: "16px" },
                fontWeight: "300",
              }}
            >
              | Privacy Statement
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            marginTop: { sm: "2px", md: "0" },
            marginRight: { md: "45px" },
          }}
        >
          <Link href="https://discord.gg/gCM8gYR4qb" target="_blank">
            <Image
              src={discordIcon}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link href="https://t.me/VeioviaLimited" target="_blank">
            <Image
              src={telegramIcon}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link
            href="https://bsky.app/profile/veiovia.bsky.social"
            target="_blank"
          >
            <Image
              src={bluesky}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link href="https://mastodon.social/@Veiovia" target="_blank">
            <Image
              src={mastodom}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link href="https://medium.com/veiovia" target="_blank">
            <Image
              src={medium}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link href="https://t.me/VeioviaLimited" target="_blank">
            <Image
              src={twitter}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
