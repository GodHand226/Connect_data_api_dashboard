/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

import AuthApi from "../../../api/auth";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const [agreement, setAgremment] = useState(true);
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm] = useState("");
  const [buttonText, setButtonText] = useState("Sign up");
  const [error, setError] = useState(undefined);

  const handleSetAgremment = () => setAgremment(!agreement);

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (firstName === "") {
      return setError("You must enter your first name.");
    } else if (/^[A-Za-z]{3,16}$/.test(firstName) == false) {
      return setError(
        "Name should be 3-16 characters and shouldn't include any special characters!"
      );
    }
    var email_pattern = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (email === "") {
      return setError("You must enter your email.");
    } else if (email_pattern.test(email) == false) {
      return setError("Invalid Email Address");
    }

    var pattern = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,20}$/
    );
    if (password === "") {
      return setError("You must enter a password.");
    } else if (pattern.test(password) == false) {
      return setError(
        "Password should be 8-20 characters and includes at least 1 letter, 1 number and 1 special character!"
      );
    }
    if (confirm_password != password) {
      return setError("Password does not match");
    }
    try {
      setButtonText("Signing up");
      let response = await AuthApi.Register({
        username: firstName,
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        setButtonText("Sign up");
        return setError(response.data.msg);
      }
      return history.push("/authentication/sign-in");
    } catch (err) {
      console.log(err);
      setButtonText("Sign up");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <Card>
        <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium">
            Register with
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={2}>
          <Socials />
        </SuiBox>
        <Separator />
        <SuiBox pt={2} pb={3} px={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput
                onChange={(event) => {
                  setName(event.target.value);
                  setError(undefined);
                }}
                placeholder="Name"
                name="name"
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError(undefined);
                }}
                name="email"
                type="email"
                placeholder="Email"
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError(undefined);
                }}
                name="password"
                type="password"
                placeholder="Password"
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                onChange={(event) => {
                  setConfirm(event.target.value);
                  setError(undefined);
                }}
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
              />
            </SuiBox>
            <SuiBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                customClass="cursor-pointer user-select-none"
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SuiTypography>
              <SuiTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
                Terms and Conditions
              </SuiTypography>
            </SuiBox>
            <SuiBox mt={2} mb={2} textAlign="center">
              <h6
                style={{
                  fontSize: ".8em",
                  color: "red",
                  textAlign: "center",
                  fontWeight: 400,
                  transition: ".2s all",
                }}
              >
                {error}
              </h6>
            </SuiBox>
            <SuiBox mt={4} mb={1}>
              <SuiButton onClick={register} variant="gradient" buttonColor="dark" fullWidth>
                {buttonText}
              </SuiButton>
            </SuiBox>
            <SuiBox mt={3} textAlign="center">
              <SuiTypography variant="button" textColor="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SuiTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  textColor="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SuiTypography>
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
