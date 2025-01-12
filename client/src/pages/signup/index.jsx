import React, { useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Link,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormField from "../../components/common/FormField";
import { useSignupMutation } from "../../../redux/user/userApi";
import { useSelector } from "react-redux";

const signup = () => {
  const theme = useTheme();
  const [signup] = useSignupMutation();
  const token = useSelector((state) => state.auth?.token);

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  const formik = useFormik({
    initialValues: {
      emailId: "",
      password: "",
      userName: "",
      fullName: "",
    },
    validationSchema: Yup.object({
      emailId: Yup.string().required("email is required"),
      password: Yup.string().required("Password is required"),
      userName: Yup.string().required("User Name is required"),
      fullName: Yup.string().required("Full Name is required"),
    }),
    onSubmit: async (values) => {
      const res = await signup(values).unwrap();
    },
  });

  const fieldProps = {
    fullWidth: true,
    variant: "outlined",
    margin: "dense",
    size: "small",
    sx: {
      fontSize: 10,
      backgroundColor: "#F7F7F7",
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "95vh",
        // backgroundColor: "#fafafa",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 300,
          minWidth: 300,
          padding: 4,
          border: "1px solid #ccc", // gray border color
          borderColor: "#ccc", // gray border color
          // borderRadius:
          // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          // backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "'Grand Hotel', cursive", paddingTop: 3 }}
        >
          <b>Vinstagram</b>
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBottom
          sx={{ paddingBottom: 3, paddingTop: 1 }}
        >
          sign up to see photos and videos from your friends
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <FormField
            type="text"
            name="emailId"
            label="email"
            formik={formik}
            {...fieldProps}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            formik={formik}
            {...fieldProps}
          />
          <FormField
            label="fullname"
            type="text"
            name="fullName"
            formik={formik}
            {...fieldProps}
          />
          <FormField
            label="user Name"
            type="text"
            name="userName"
            formik={formik}
            {...fieldProps}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              borderRadius: 2,
              backgroundColor: "#0095f6",
              color: "#fff",
              marginTop: 2,
              marginBottom: 2,
              ":hover": {
                backgroundColor: "#007acb",
              },
            }}
          >
            sign up
          </Button>
        </form>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 300,
          minWidth: 300,
          textAlign: "center",
          marginTop: 2,
          // padding: 4,
          paddingX: 4,
          paddingY: 2,
          border: "1px solid #ccc", // gray border color
          borderColor: "#ccc", // gray border color
          // borderRadius: 2,
          // backgroundColor: "#fff",
          // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="body1">
          Have an account?{" "}
          <Link href="/login" underline="hover" sx={{ fontWeight: 500 }}>
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default signup;
