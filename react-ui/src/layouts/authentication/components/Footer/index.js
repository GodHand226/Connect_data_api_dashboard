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
    <SuiBox component="footer" py={3}>
      <Grid container justifyContent="center">
        <Grid itme xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
          <SuiBox>
            <SuiTypography variant="body2" textColor="secondary" fontSize="0.8rem">
              Copyright © 2017-2023, Data API Connect.
            </SuiTypography>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SuiBox display="flex" justifyContent="center" flexWrap="wrap">
            <SuiBox mr={{ xs: 2, lg: 3, xl: 4 }}>
              <SuiTypography
                component="a"
                href="/terms"
                target=""
                variant="body2"
                textColor="secondary"
                fontSize="0.8rem"
              >
                Terms
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 4 }}>
              <SuiTypography
                component="a"
                href="/privacy"
                target=""
                variant="body2"
                textColor="secondary"
                fontSize="0.8rem"
              >
                Privacy
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 4 }}>
              <SuiTypography
                component="a"
                href="/api"
                target=""
                variant="body2"
                textColor="secondary"
                fontSize="0.8rem"
              >
                API
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 4 }}>
              <SuiTypography
                component="a"
                href="/case"
                target=""
                variant="body2"
                textColor="secondary"
                fontSize="0.8rem"
              >
                Use cases
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 4 }}>
              <SuiTypography
                component="a"
                href="/contact"
                target=""
                variant="body2"
                textColor="secondary"
                fontSize="0.8rem"
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
