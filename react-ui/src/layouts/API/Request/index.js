// import DescriptionBox from "examples/DescriptionBox";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Snippet from "./Snippet";

function Request() {
  const payload = {
    phone: "Wireless",
    state: ["TX", "UT"],
    city: ["Rockwall", "Smiley"],
    zip: ["75032", "75087"],
    min_age: "50",
    max_age: "60",
    record: 1,
  };
  return (
    <SuiBox pl={4} pt={2}>
      <SuiTypography variant="h3" py={1} id="request">
        Request
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        All request are made via an HTTP POST request with header information that includes
        &quot;accept: application/json&quot;, &quot;Access_toekn: ***&quot;, and &quot;Content-Type:
        application/json&quot;.
      </SuiTypography>
      <SuiTypography variant="h5" py={1}>
        Request Example
      </SuiTypography>
      <Snippet
        title="cURL"
        code={
          "curl -X 'POST' 'http://20.237.23.9/api' -H 'accept: application/json' -H 'access_token: ************' -H 'Content-Type: application/json'"
        }
      ></Snippet>
      <Snippet title="Request URL" code={"http://20.237.23.9/api"}></Snippet>
      <Snippet title="Request Body" code={JSON.stringify(payload, null, 2)}></Snippet>
    </SuiBox>
  );
}

export default Request;
