import { Link, useNavigate, useParams } from "react-router-dom";
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
const encryptWithAES = (text) => {
  var enc = AES.encrypt(text, passphrase);
  return enc
    .toString()
    .replaceAll("+", "xMl3Jk")
    .replaceAll("/", "Por21Ld")
    .replaceAll("=", "Ml32");
};

export function ForgotPassword() {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Send Verification Code");
  const [error, setError] = useState(undefined);
  const [email, setEmail] = useState("");

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      setButtonText("Sending...");
      // let response = await AuthApi.Resend({
      //   email: email,
      // });
      // if (response.data && response.data.success === false) {
      //   setButtonText("Send Verification Code");
      //   return setError(response.data.msg);
      // }
      // const stateID = response.data.userID;
      // return navigate(`/authentication/email_verify/${stateID}`);
      const pass = encryptWithAES(email);
      return navigate(`/resetpassword/${pass}`);
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
              Forgot Password
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              variant="standard"
              type="text"
              label="Email Address"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
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
            <Button variant="gradient" onClick={register} fullWidth>
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

export default ForgotPassword;
