"use client";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import Logo from ".././app/assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorLog, setAnchorLog] = React.useState(null);

  const pages = [
    "home",
    "about",
    "future",
    "contact",
    "past",
    // "profile",
    // "event",
  ];

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLog = (event: any) => {
    setAnchorLog(event.currentTarget);
  };

  const handleCloseLog = () => {
    setAnchorLog(null);
  };

  return (
    <Box>
      <Box
        sx={{
          marginTop: { xs: "30px", md: "40px" },
          marginBottom: { xs: "43px", md: "48px" },
          marginInline: { xs: "20px", md: "33px" },
        }}
      >
        <Box position="static" color="transparent">
          <Toolbar>
            <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
              <Image
                src={Logo}
                width={200}
                height={20}
                alt="Picture of the author"
                onClick={() => router.push("/")}
              />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {pages.map((item) => (
                <>
                  <Button
                    key={item}
                    sx={{
                      color: "#7D848A",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                    onClick={() =>
                      item == "home"
                        ? router.push("/")
                        : router.push(`/${item}`)
                    }
                  >
                    {/* <Typography > {item}</Typography> */}
                    {item}
                  </Button>
                </>
              ))}

              <Button
                variant="contained"
                style={{
                  borderRadius: "53px",
                  marginLeft: "20px",
                  marginRight: "15px",
                  width: "100px",
                }}
                onClick={handleOpenLog}
              >
                Log in
              </Button>
            </Box>
            <Box sx={{ display: { md: "none" } }}>
              <IconButton
                size="large"
                edge="start"
                color="primary"
                onClick={handleOpenNavMenu}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Dialog
                open={Boolean(anchorLog)}
                onClose={handleCloseLog}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "343px", md: "480px" },
                    height: { xs: "560px", md: "560px" },
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "82px",
                      marginBottom: "56px",
                      fontSize: "24px",
                      fontWeight: "400",
                    }}
                  >
                    <span style={{ color: "#0084FD" }}>Welcome,</span> log in
                    here
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="E-mail"
                    name="email"
                    sx={{
                      marginBottom: "32px",
                      width: { xs: "311px", md: "400px" },
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    name="password"
                    sx={{
                      marginBottom: "32px",
                      width: { xs: "311px", md: "400px" },
                    }}
                  />
                  <Button
                    size="small"
                    sx={{
                      color: "#fff",
                      backgroundColor: "#0084FD",
                      "&:hover": {
                        background: "#0084FD",
                      },
                      marginLeft: "7px",
                      borderRadius: "53px",
                      paddingInline: "20px",
                      fontSize: "16px",
                      fontWeight: "600",
                      border: "1px solid white",
                      width: { xs: "311px", md: "416px" },
                      marginTop: "20px",
                    }}
                  >
                    Log in
                  </Button>
                  <Typography
                    sx={{
                      marginBlock: "32px",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    Don´t have an account?
                    <span style={{ color: "#0084FD", fontWeight: "400" }}>
                      {`  Sing up`}
                    </span>
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                    Forgot Password
                  </Typography>
                </Box>
              </Dialog>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Dialog
                fullScreen={true}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", sm: "none", md: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Image src={Logo} alt="logo" style={{ marginTop: "107px" }} />
                  <Box
                    sx={{
                      border: "1px solid #DADEE2",
                      marginTop: "40px",
                      marginBottom: "48px",
                      width: "224px",
                    }}
                  />
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        key={page}
                        sx={{
                          color: "#7D848A",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        onClick={() =>
                          page == "home"
                            ? router.push("/")
                            : router.push(`/${page}`)
                        }
                      >
                        {page}
                      </Button>
                    </MenuItem>
                  ))}
                  <Box
                    sx={{
                      border: "1px solid #DADEE2",
                      marginTop: "48px",
                      marginBottom: "40px",
                      width: "224px",
                    }}
                  />
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
                      width: "142px",
                      marginTop: "20px",
                    }}
                  >
                    Log in
                  </Button>
                </Box>
              </Dialog>
            </Box>
          </Toolbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
