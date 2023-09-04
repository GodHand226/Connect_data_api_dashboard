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
import Card from "@mui/material/Card";
import * as React from "react";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
// import Table from "examples/Table";

// Custom styles for the Tables
// import styles from "layouts/tables/styles";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const [phone, setPhone] = React.useState("");
  const [state, setState] = React.useState("");
  const [min_age, setMinAge] = React.useState(0);
  const [max_age, setMaxAge] = React.useState(500);
  const [city, setCity] = React.useState("");
  const [zip, setZip] = React.useState("");

  const handleChange = (event) => {
    setPhone(event.target.value);
  };
  const stateChange = (event) => {
    setState(event.target.value);
  };
  const MinAgeChange = (event) => {
    setMinAge(event.target.value);
  };
  const MaxAgeChange = (event) => {
    setMaxAge(event.target.value);
  };
  const CityChange = (event) => {
    setCity(event.target.value);
  };
  const ZipChange = (event) => {
    setZip(event.target.value);
  };
  const Searchclicked = () => {};
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Data Viewer</SuiTypography>
            </SuiBox>
            <Grid container p={2}>
              <Grid item xs={3}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Phone Type:
                  </SuiTypography>
                  <FormControl>
                    <Select
                      labelId="phone_type_label"
                      id="phone_type"
                      value={phone}
                      onChange={handleChange}
                      label="Phone Type"
                      style={{ width: "100%" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Wireless"}>Wireless</MenuItem>
                      <MenuItem value={"Landline"}>Landline</MenuItem>
                    </Select>
                  </FormControl>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Min_Age:
                  </SuiTypography>
                  <SuiInput id="min_age" value={min_age} onChange={MinAgeChange}></SuiInput>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Max_Age:
                  </SuiTypography>
                  <SuiInput id="max_age" value={max_age} onChange={MaxAgeChange}></SuiInput>
                </SuiBox>
              </Grid>
              <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                <SuiButton variant="contained" startIcon={<SearchIcon />} onClick={Searchclicked}>
                  Search
                </SuiButton>
              </Grid>
            </Grid>
            <Grid container p={2}>
              <Grid item xs={3}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    State:
                  </SuiTypography>
                  <SuiBox>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="state_select"
                        value={state}
                        onChange={stateChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"AK"}>AK</MenuItem>
                        <MenuItem value={"AL"}>AL</MenuItem>
                        <MenuItem value={"AR"}>AR</MenuItem>
                        <MenuItem value={"AZ"}>AZ</MenuItem>
                        <MenuItem value={"CA"}>CA</MenuItem>
                        <MenuItem value={"CO"}>CO</MenuItem>
                        <MenuItem value={"CT"}>CT</MenuItem>
                        <MenuItem value={"DC"}>DC</MenuItem>
                        <MenuItem value={"DE"}>DE</MenuItem>
                        <MenuItem value={"FL"}>FL</MenuItem>
                        <MenuItem value={"GA"}>GA</MenuItem>
                        <MenuItem value={"GU"}>GU</MenuItem>
                        <MenuItem value={"HI"}>HI</MenuItem>
                        <MenuItem value={"IA"}>IA</MenuItem>
                        <MenuItem value={"ID"}>ID</MenuItem>
                        <MenuItem value={"IL"}>IL</MenuItem>
                        <MenuItem value={"IN"}>IN</MenuItem>
                        <MenuItem value={"KS"}>KS</MenuItem>
                        <MenuItem value={"KY"}>KY</MenuItem>
                        <MenuItem value={"LA"}>LA</MenuItem>
                        <MenuItem value={"MA"}>MA</MenuItem>
                        <MenuItem value={"MD"}>MD</MenuItem>
                        <MenuItem value={"ME"}>ME</MenuItem>
                        <MenuItem value={"MI"}>MI</MenuItem>
                        <MenuItem value={"MO"}>MO</MenuItem>
                        <MenuItem value={"MS"}>MS</MenuItem>
                        <MenuItem value={"MT"}>MT</MenuItem>
                        <MenuItem value={"NC"}>NC</MenuItem>
                        <MenuItem value={"ND"}>ND</MenuItem>
                        <MenuItem value={"NE"}>NE</MenuItem>
                        <MenuItem value={"NH"}>NH</MenuItem>
                        <MenuItem value={"NJ"}>NJ</MenuItem>
                        <MenuItem value={"NM"}>NM</MenuItem>
                        <MenuItem value={"NV"}>NV</MenuItem>
                        <MenuItem value={"NY"}>NY</MenuItem>
                        <MenuItem value={"OH"}>OH</MenuItem>
                        <MenuItem value={"OK"}>OK</MenuItem>
                        <MenuItem value={"OR"}>OR</MenuItem>
                        <MenuItem value={"PA"}>PA</MenuItem>
                        <MenuItem value={"PR"}>PR</MenuItem>
                        <MenuItem value={"PI"}>PI</MenuItem>
                        <MenuItem value={"SC"}>SC</MenuItem>
                        <MenuItem value={"SD"}>SD</MenuItem>
                        <MenuItem value={"TN"}>TN</MenuItem>
                        <MenuItem value={"TX"}>TX</MenuItem>
                        <MenuItem value={"UT"}>UT</MenuItem>
                        <MenuItem value={"VA"}>VA</MenuItem>
                        <MenuItem value={"VT"}>VT</MenuItem>
                        <MenuItem value={"WA"}>WA</MenuItem>
                        <MenuItem value={"WI"}>WI</MenuItem>
                        <MenuItem value={"WV"}>WV</MenuItem>
                        <MenuItem value={"WY"}>WY</MenuItem>
                      </Select>
                    </FormControl>
                  </SuiBox>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    City:
                  </SuiTypography>
                  <SuiInput id="city" value={city} onChange={CityChange}></SuiInput>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Zip:
                  </SuiTypography>
                  <SuiInput id="zip" value={zip} onChange={ZipChange}></SuiInput>
                </SuiBox>
              </Grid>
            </Grid>
          </Card>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
