// import DescriptionBox from "examples/DescriptionBox";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Snippet from "./Snippet";
function Response() {
  return (
    <SuiBox pl={4} pt={2}>
      <SuiTypography variant="h3" py={1} id="response">
        Response
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        The response header result will contain api information as well as rate limits, search rate
        limit remaining, and rate reset date.
      </SuiTypography>
      <Snippet title="Response Header"></Snippet>
      <SuiTypography variant="h5" py={1}>
        Response Body
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        The response body will contain first name, last name, full name, age, Phone Details,
        Address, Email and Property Details.
      </SuiTypography>
      <Snippet title="Response Body"></Snippet>
    </SuiBox>
  );
}

export default Response;
