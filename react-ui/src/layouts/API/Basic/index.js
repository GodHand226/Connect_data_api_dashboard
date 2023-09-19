// import DescriptionBox from "examples/DescriptionBox";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Basic() {
  return (
    <SuiBox pl={4} pt={2}>
      <SuiTypography variant="h3" py={1} id="basic">
        Basic
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        This documentation uses a couple notes and documentation conventions that will be explained
        in this section.
      </SuiTypography>
      <SuiTypography pl={4} variant="body2" py={1}>
        <ul>
          <li>
            Data API Connect uses Access_token to handle communication between your application and
            our API. Access_token is required in the header of each request.
          </li>
          <li>
            Authentication is always required. To simplify the examples, however, the documentation
            will frequently omit showing the token header.
          </li>
          <li>
            Your account credentials or authorization token should not, in any circumstances, be
            shared with anyone else. Should either one be compromised, you will need to immediately
            request new credentials and a new token, or cancel your account. You are responsible for
            any costs incurred while accessing the API with your credentials.
          </li>
          <li>Only secure HTTPS requests are supported.</li>
        </ul>
      </SuiTypography>
    </SuiBox>
  );
}

export default Basic;
