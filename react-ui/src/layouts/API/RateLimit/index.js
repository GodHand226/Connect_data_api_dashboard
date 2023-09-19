// import DescriptionBox from "examples/DescriptionBox";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function RateLimits() {
  return (
    <SuiBox pl={4} pt={2}>
      <SuiTypography variant="h3" py={1} id="ratelimits">
        Rate Limits
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        To prevent abuse and ensure service stability, all API requests are rate limited. Rate
        limits specify the maximum number of API calls that can be made per minute. The exact number
        of calls that your application can make is 15 per minute.
      </SuiTypography>
    </SuiBox>
  );
}

export default RateLimits;
