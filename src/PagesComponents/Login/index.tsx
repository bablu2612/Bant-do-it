import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import loginConstants, { LoginValidationSchema } from "./Login.constants";
import { Loginstyles } from "./Login.style";
import { ILoginComponentProps, LoginCredential } from "./Login.interface";
import { Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";

const { emailText, passwordText, signIntoText, welcomeText, loginButtonText } =
  loginConstants;

const LoginComponent = (props: ILoginComponentProps) => {
  const INITIAL_VALUE: LoginCredential = { email: "", password: "" };

  const loginValues = [
    { email: "test@gmail.com", admin: 1 },
    { email: "test@gmail.com", admin: 2 },
  ];

  return (
    <Loginstyles>
      <Box className="main">
        <Box className="left_sec">
          <Formik
            initialValues={INITIAL_VALUE}
            onSubmit={(
              values: LoginCredential,
              actions: FormikHelpers<LoginCredential>
            ) => {
              props?._handleLogin(values);
            }}
            validationSchema={LoginValidationSchema}
          >
            {({ values, handleChange, handleBlur, errors, touched }) => (
              <Form className="form">
                <img src="images/Logoold.png" />
                <h1>{welcomeText}</h1>
                <h3>{signIntoText}</h3>
                <TextField
                  label={emailText}
                  name="email"
                  variant="filled"
                  value={values?.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {/* <ErrorMessage component="p" name="email" /> */}
                <TextField
                  label={passwordText}
                  variant="filled"
                  name="password"
                  value={values?.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <Button variant="contained" type="submit">
                  {loginButtonText}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Box className="right_sec">
          {/* <Image
            className="right_image"
            height={100}
            width={100}
            src="/images/pattern.webp"
            alt="logo"
          /> */}
          {/* <img src="./images/pattern.webp" /> */}
        </Box>
      </Box>
    </Loginstyles>
  );
};

export default LoginComponent;
