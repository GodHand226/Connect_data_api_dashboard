import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Grid from "@mui/material/Grid";

function Terms() {
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
        <SuiBox mt={10} width="70%" sx={{ py: 10, borderBottom: "1px solid" }}>
          <SuiBox p={3} mb={7} display="flex" justifyContent="center" alignItems="center">
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
              Contact Us
            </SuiTypography>
          </SuiBox>
          <Grid container mb={3}>
            <Grid item xs={12} sm={4} display="flex" justifyContent="flex-end">
              <SuiTypography>Phone:</SuiTypography>
            </Grid>
            <Grid item xs={12} sm={8} display="flex" justifyContent="center">
              <SuiTypography>+1 (484) 978-9456</SuiTypography>
            </Grid>
          </Grid>
          <Grid container mb={3}>
            <Grid item xs={4} display="flex" justifyContent="flex-end">
              <SuiTypography>Email:</SuiTypography>
            </Grid>
            <Grid item xs={8} display="flex" justifyContent="center">
              <SuiTypography>sales@dataapiconnect.com</SuiTypography>
            </Grid>
          </Grid>
          <Grid container mb={3}>
            <Grid item xs={4} display="flex" justifyContent="flex-end">
              <SuiTypography>Address:</SuiTypography>
            </Grid>
            <Grid item xs={8}>
              <SuiBox display="flex" justifyContent="center">
                <SuiTypography>30 W. 26th Street, Sixth Floor</SuiTypography>
              </SuiBox>
              <SuiBox display="flex" justifyContent="center">
                <SuiTypography>New York, NY, 10010</SuiTypography>
              </SuiBox>
              <SuiBox display="flex" justifyContent="center">
                <SuiTypography>United States</SuiTypography>
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
      <Footer />
    </PageLayout>
  );
}

export default Terms;
