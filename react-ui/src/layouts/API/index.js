import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
// import DescriptionBox from "examples/DescriptionBox";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Grid from "@mui/material/Grid";
import Basic from "./Basic";
import Authentication from "./Authentication";
import SearchType from "./SearchType";
import RateLimits from "./RateLimit";
import Request from "./Request";
import Response from "./Response";
import StatusCode from "./StatusCode";

function APIDOC() {
  const arr = [
    { label: "Basic", url: "/API#basic" },
    { label: "Authentication", url: "/API#authentication" },
    { label: "Search Types", url: "/API#searchtypes" },
    { label: "Rate Limits", url: "/API#ratelimits" },
    { label: "Request", url: "/API#request" },
    { label: "Response", url: "/API#response" },
    { label: "Status Code", url: "/API#statuscode" },
  ];
  return (
    <PageLayout background="white">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/home",
          label: "free download",
          color: "dark",
        }}
      />
      <SuiBox display="flex" justifyContent="center" alignItems="center">
        <SuiBox mt={10} width="80%" sx={{ py: 10, borderBottom: "1px solid" }}>
          <SuiBox p={3} display="flex" justifyContent="center" alignItems="center">
            <SuiTypography
              vairant="h1"
              component="p"
              textAlign="center"
              fontSize="72px"
              fontWeight="bold"
              textColor="info"
              fontFamily="'Poppins', sans-serif"
              lineHeight="1.3"
            >
              API Documentation
            </SuiTypography>
          </SuiBox>
          <Grid container>
            <Grid item xs={12} md={3}>
              <SuiBox sx={{ border: "1px solid" }} mt={3}>
                <SuiTypography variant="h5" p={2}>
                  Documentation
                </SuiTypography>
                {arr.map((e) => (
                  <SuiTypography variant="body2" pl={4} pb={2} key={e}>
                    <a href={e.url}>{e.label}</a>
                  </SuiTypography>
                ))}
              </SuiBox>
            </Grid>
            <Grid item xs={12} md={9}>
              <Basic />
              <Authentication />
              <SearchType />
              <RateLimits />
              <Request />
              <Response />
              <StatusCode />
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
      <Footer />
    </PageLayout>
  );
}

export default APIDOC;
