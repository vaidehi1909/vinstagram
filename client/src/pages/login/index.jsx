import React, { useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  useTheme, // Import useTheme
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormField from "../../components/common/FormField";
import { useLogInMutation } from "../../../redux/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToast } from "../../../redux/toast/toastSlice";
const Login = () => {
  const [login, result] = useLogInMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth?.token);

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);
  const theme = useTheme(); // Access the theme

  const formik = useFormik({
    initialValues: {
      emailId: "",
      password: "",
    },
    validationSchema: Yup.object({
      emailId: Yup.string().required("email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      login(values)
        .unwrap()
        .then((res) => {
          if (res.status === 200) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error(error);
          const errorMsg = error?.data?.message || "Something went wrong";
          dispatch(addToast({ message: errorMsg, severity: "error" }));
        });
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
        padding: 2,
        [theme.breakpoints.down("sm")]: {
          padding: 1,
        },
      }}
    >
      <Box
        sx={{
          margin: "10px",
          width: "100%",
          maxWidth: 300,
          minWidth: 300,
          padding: 4,
          border: "1px solid #ccc",
          borderColor: "#ccc",
          textAlign: "center",
          [theme.breakpoints.down("xs")]: {
            maxWidth: "100%",
            padding: 2,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Grand Hotel', cursive",
            marginBottom: 3,
            paddingTop: 3,
            paddingBottom: 3,
            [theme.breakpoints.down("sm")]: {
              fontSize: 24,
            },
          }}
        >
          <b>Vinstagram</b>
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
            type="password"
            name="password"
            label="Password"
            formik={formik}
            {...fieldProps}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={result.isLoading}
            sx={{
              borderRadius: 2,
              backgroundColor: "#0095f6",
              color: "#fff",
              marginTop: 2,
              marginBottom: 2,
              ":hover": {
                backgroundColor: "#007acb",
              },
              [theme.breakpoints.down("sm")]: {
                padding: "8px 16px",
              },
            }}
          >
            Log in
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          OR
        </Typography>
        <Link
          href="#"
          variant="body2"
          underline="hover"
          sx={{
            display: "block",
            marginTop: 2,
            [theme.breakpoints.down("xs")]: {
              fontSize: 14,
            },
          }}
        >
          Forgot password?
        </Link>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 300,
          minWidth: 300,
          textAlign: "center",
          marginTop: 2,
          paddingX: 4,
          paddingY: 2,
          border: "1px solid #ccc",
          borderColor: "#ccc",
          [theme.breakpoints.down("xs")]: {
            maxWidth: "100%",
            padding: 1,
          },
        }}
      >
        <Typography variant="body1">
          Don’t have an account?{" "}
          <Link href="/signup" underline="hover" sx={{ fontWeight: 500 }}>
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
