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

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Footer() {
  return (
    <SuiBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <SuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography
                component="a"
                href="https://bit.ly/3fKQZaL"
                target="_blank"
                variant="body2"
                textColor="secondary"
              >
                Terms
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography
                component="a"
                href="https://appseed.us/product/django-react-soft-dashboard"
                target="_blank"
                variant="body2"
                textColor="secondary"
              >
                Privacy
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <SuiTypography
                component="a"
                href="https://appseed.us/support"
                target="_blank"
                variant="body2"
                textColor="secondary"
              >
                API
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <SuiTypography
                component="a"
                href="https://appseed.us/support"
                target="_blank"
                variant="body2"
                textColor="secondary"
              >
                Use cases & Law Enforcement
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <SuiTypography
                component="a"
                href="https://appseed.us/support"
                target="_blank"
                variant="body2"
                textColor="secondary"
              >
                Contact Us
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </Grid>
      </Grid>
    </SuiBox>
  );
}

export default Footer;
