"use client";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  country: "",
  wallet: "",
  password: "",
  confirmpassword: "",
  checkbox: "",
};

const validateSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  lastname: Yup.string().min(2).max(25).required("Please enter your Last name"),
  email: Yup.string().email().required("Please enter your email"),
  country: Yup.string().min(2).max(25).required("Please enter your country"),
  wallet: Yup.string().min(2).max(25).required("Please enter your wallet"),
  password: Yup.string().min(2).required("Please enter your password"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), "null"], "Password must match"),
  checkbox: Yup.bool()
    .required()
    .oneOf([true], "you must accept Terms and condition'"),
});

const Page = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validateSchema,

      onSubmit: (values, action) => {
        action.resetForm;
        console.log("values", values);
      },
    });
  console.log("hhhh", errors);

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
          marginBottom: { xs: "48px", md: "174px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "48px" },
            fontWeight: { xs: "500", md: "400" },
            color: "#0084FD",
          }}
        >
          Welcome to Mindshare
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "32px" },
            fontWeight: { xs: "40000", md: "400" },
            marginTop: { xs: "24px", md: "50px" },
          }}
        >
          Create your account here
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ marginTop: "56px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  sx={{ width: { xs: "311px", md: "400px" } }}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <Typography sx={{ color: "red" }}>{errors.name} </Typography>
                ) : null}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{
                    marginLeft: { md: "24px" },
                    marginTop: { xs: "16px", sm: "16px", md: "0" },
                    width: { xs: "311px", md: "400px" },
                  }}
                />
                {errors.lastname && touched.lastname ? (
                  <Typography sx={{ color: "red" }}>
                    {errors.lastname}{" "}
                  </Typography>
                ) : null}
              </Box>
            </Box>
            <Box
              sx={{
                widtg: "824px",
                display: "flex",
                gap: "16px",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="E-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ width: { xs: "311px", md: "100%" } }}
              />
              {errors.email && touched.email ? (
                <Typography sx={{ color: "red" }}> {errors.email} </Typography>
              ) : null}
              <TextField
                id="outlined-basic"
                label="Country of Residence"
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ width: { xs: "311px", md: "100%" } }}
              />
              {errors.country && touched.country ? (
                <Typography sx={{ color: "red" }}>{errors.country} </Typography>
              ) : null}
              <TextField
                id="outlined-basic"
                label="Wallet"
                name="wallet"
                value={values.wallet}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ width: { xs: "311px", md: "100%" } }}
              />
              {errors.wallet && touched.wallet ? (
                <Typography sx={{ color: "red" }}> {errors.wallet} </Typography>
              ) : null}

              <TextField
                id="outlined-basic"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Password"
                sx={{ width: { xs: "311px", md: "100%" } }}
              />
              {errors.password && touched.password ? (
                <Typography sx={{ color: "red" }}>
                  {errors.password}{" "}
                </Typography>
              ) : null}

              <TextField
                id="outlined-basic"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Confirm Password"
                sx={{ width: { xs: "311px", md: "100%" } }}
              />
              {errors.confirmpassword && touched.confirmpassword ? (
                <Typography sx={{ color: "red" }}>
                  {errors.confirmpassword}{" "}
                </Typography>
              ) : null}
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "311px", md: "unset" },
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "32px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: { xs: "5px", md: "0pxx" },
              }}
            >
              <Checkbox
                name="checkbox"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Typography sx={{ marginRight: { xs: "20px", md: "unset" } }}>
                By signing up, you agree to VEIOVIA Terms and condition &
                Privacy Policy
              </Typography>
            </Box>
            {errors.checkbox && touched.checkbox ? (
              <Typography sx={{ color: "red" }}> {errors.checkbox}</Typography>
            ) : null}
          </Box>
          <Button
            size="large"
            type="submit"
            sx={{
              color: "#fff",
              width: "332px",
              backgroundColor: "#0084FD",
              marginLeft: "7px",
              borderRadius: "53px",
              paddingInline: "20px",
              fontSize: "16px",
              fontWeight: "600",
              marginTop: "32px",
              border: "1px solid white",
            }}
          >
            Create account
          </Button>
        </form>
      </Box>
      <Footer />
    </Box>
  );
};

export default Page;
