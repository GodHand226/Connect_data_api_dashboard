// import DescriptionBox from "examples/DescriptionBox";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function StatusCode() {
  return (
    <SuiBox pl={4} pt={2}>
      <SuiTypography variant="h3" py={1} id="statuscode">
        Status Code
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        When making API requests, there are several different HTTP status codes you may receive. If
        the status code is 200, everything is great. All other status codes indicate an error in
        processing the request.
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        <strong>200 OK</strong>
        <p>The request was successful.</p>
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        <strong>400 BAD REQUEST</strong>
        <p>Missing required fields.</p>
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        <strong>401 UNAUTHORIZED</strong>
        <p>Invalid credentials or expired token.</p>
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        <strong>402 PAYMENT REQUIRED</strong>
        <p>Insufficient Funds.</p>
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        <strong>500 INTERNAL SERVER ERROR</strong>
        <p>Unexpected error has occurred.</p>
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        <strong>503 TEMPORARILY UNAVAILABLE</strong>
        <p>The server is offline and not available.</p>
      </SuiTypography>
    </SuiBox>
  );
}

export default StatusCode;
