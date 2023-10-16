import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  button,
} from "@material-tailwind/react";
import { useState } from "react";
import { SimpleFooter, Navbar } from "@/widgets/layout";
import { useAuth } from "@/auth-context/auth.context";
import AuthApi from "@/api/auth";
import routes from "@/routes";
import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

const passphrase = "secretkey";
const decryptWithAES = (ciphertext) => {
  console.log(ciphertext);
  const bytes = AES.decrypt(ciphertext, passphrase).toString(Utf8);
  console.log(bytes);
  const dec = JSON.parse(bytes);
  const originalText = dec.str
    .replaceAll("xMl3Jk", "+")
    .replaceAll("Por21Ld", "/")
    .replaceAll("Ml32", "=");
  return originalText;
};

export function ResetPassword() {
  const navigate = useNavigate();
  const params = useParams();
  const [buttonText, setButtonText] = useState("Reset Password");
  const [error, setError] = useState(undefined);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const reset = async (event) => {
    if (event) {
      event.preventDefault();
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
    if (confirm != password) {
      return setError("Password does not match");
    }
    try {
      setButtonText("Resetting...");
      const email = decryptWithAES(params.id);
      console.log(email);
      let response = await AuthApi.Edit({
        email: email,
        password: password,
      });
      if (response.data && response.data.success === false) {
        setButtonText("Reset Password");
        return setError(response.data.msg);
      }
      return navigate(`/authentication/sign-in`);
    } catch (err) {
      console.log(err);
      setButtonText("Verify");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute left-2/4 top-2/4 w-full max-w-[24rem] -translate-x-2/4 -translate-y-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Reset Password
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              variant="standard"
              type="password"
              label="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError(undefined);
              }}
              size="lg"
            />
            <Input
              variant="standard"
              type="password"
              label="Confirm Password"
              value={confirm}
              onChange={(event) => {
                setConfirm(event.target.value);
                setError(undefined);
              }}
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0">
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
            <Button variant="gradient" onClick={reset} fullWidth>
              {buttonText}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default ResetPassword;
