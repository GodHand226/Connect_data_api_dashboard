// @mui material components
import Card from "@mui/material/Card";
import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import TextField from "@mui/material/TextField";
// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import SuiButton from "components/SuiButton";
import Snippet from "./components/index";
import uszip from "./data/USCityData";
import { API_SERVER } from "../../config/constant";
import { useAuth } from "../../auth-context/auth.context";

function Tables() {
  const [phone, setPhone] = React.useState("");
  const [state, setState] = React.useState([]);
  const [min_age, setMinAge] = React.useState(0);
  const [max_age, setMaxAge] = React.useState(0);
  const [city, setCity] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [zips, setZips] = React.useState([]);
  const [zip, setZip] = React.useState([]);
  const [record, setRecord] = React.useState(0);
  const [res, setRes] = React.useState("");
  const [key, setKey] = React.useState(undefined);
  const [curlcode, setCurl] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [payload, setPayload] = React.useState("");
  const [isdisplay, setDisplay] = React.useState(false);
  const [max, setMax] = React.useState(10);
  const [min_error, setMinError] = React.useState("");
  const [max_error, setMaxError] = React.useState("");
  const [state_error, setStateError] = React.useState("");
  const [phone_error, setPhoneError] = React.useState("");
  let { user } = useAuth();
  const getCities = (sta) => {
    var res = uszip.database
      .filter((element) => sta.includes(element.status_code))
      .map((e) => e.city);
    let unique = [];
    res.forEach((c) => {
      if (!unique.includes(c)) {
        unique.push(c);
      }
    });
    return unique;
  };
  const handleChange = (event) => {
    setPhone(event.target.value);
  };
  const stateChange = (event) => {
    setState(event.target.value);
    console.log(state);
    let unique = getCities(event.target.value);
    setCities(unique.sort());
  };
  const MinAgeChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setMinAge(e.target.value);
    }
  };
  const MaxAgeChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setMaxAge(e.target.value);
    }
  };
  const RecordChange = (event) => {
    var value = parseInt(event.target.value, 10);

    if (value > max) value = max;
    if (value < 0) value = 0;

    setRecord(value);
  };
  const getKey = async () => {
    try {
      const res = await axios.post(`${API_SERVER}/users/dashboard`, user, {
        headers: { Authorization: `${user.token}` },
      });
      const data = res.data;
      setKey(data["API_KEY"]);
      setMax(data["Record"]);
    } catch (e) {
      console.error(e);
    }
  };
  const getdata = async (body) => {
    const url = "http://20.237.23.9/api";
    const header = {
      access_token: key,
      accept: "application/json",
      "Content-Type": "application/json",
    };
    const result = await axios.post(url, body, { headers: header });
    return result.data;
  };
  const validate = async () => {
    var flag = true;
    if (min_age === "") {
      setMinError("Min Age is required");
      flag = false;
    } else setMinError("");
    if (max_age === "") {
      flag = false;
      setMaxError("Max Age is required");
    } else setMaxError("");
    if (state.length == 0) {
      flag = false;
      setStateError("State is required");
    } else setStateError("");
    if (phone == "") {
      flag = false;
      setPhoneError("Phone Type is required");
    } else setPhoneError("");
    return flag;
  };
  const Searchclicked = async () => {
    if ((await validate()) == false) return;
    let curl = `curl -X 'POST' 'http://20.237.23.9/api' -H 'accept: application/json' -H 'access_token: ${key}' -H 'Content-Type: application/json'`;
    console.log(state);
    setCurl(curl);
    setUrl("http://20.237.23.9/api");
    let body = {
      phone: phone,
      state: state,
      city: city,
      zip: zip,
      min_age: min_age,
      max_age: max_age,
      record: record,
    };
    setPayload(JSON.stringify(body, null, 2));
    setDisplay(true);
    const data = JSON.stringify(await getdata(body), null, 2);
    console.log(data);
    setRes(data);
  };
  const CityChange = (event) => {
    setCity(event.target.value);
    var res = uszip.database.filter((element) => city.includes(element.city)).map((e) => e.zip);
    let unique = [];
    res.forEach((c) => {
      if (!unique.includes(c)) {
        unique.push(c);
      }
    });
    setZips(unique);
  };
  const ZipChange = (event) => {
    setZip(event.target.value);
  };
  useEffect(() => {
    getKey();
  }, []);
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
                <SuiBox display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" component="h6" p={2}>
                    Phone&nbsp;Type:
                  </SuiTypography>
                  <FormControl fullWidth>
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
                <SuiBox display="flex" justifyContent="center">
                  <SuiTypography variant="p" fontSize="12px" textColor="error">
                    {phone_error}
                  </SuiTypography>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Min_Age:
                  </SuiTypography>
                  <TextField id="min_age" value={min_age} onChange={MinAgeChange}></TextField>
                </SuiBox>
                <SuiBox display="flex" justifyContent="center">
                  <SuiTypography variant="p" fontSize="12px" textColor="error">
                    {min_error}
                  </SuiTypography>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Max_Age:
                  </SuiTypography>
                  <TextField id="max_age" value={max_age} onChange={MaxAgeChange}></TextField>
                </SuiBox>
                <SuiBox display="flex" justifyContent="center">
                  <SuiTypography variant="p" fontSize="12px" textColor="error">
                    {max_error}
                  </SuiTypography>
                </SuiBox>
              </Grid>
              <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                <SuiButton variant="contained" startIcon={<SearchIcon />} onClick={Searchclicked}>
                  Search
                </SuiButton>
              </Grid>
            </Grid>
            <Grid container p={2} display="flex" justifyContent="space-around" alignItems="center">
              <Grid item xs={3}>
                <SuiBox display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    State:
                  </SuiTypography>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="state_select"
                      multiple
                      value={state}
                      onChange={stateChange}
                    >
                      {uszip.state_json.map((e) => (
                        <MenuItem value={e.abbreviation} key={e.abbreviation} fullWidth>
                          {e.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" component="h6" p={2}>
                    City:
                  </SuiTypography>
                  <FormControl fullWidth>
                    <Select
                      labelId="city_label"
                      id="city"
                      multiple
                      value={city}
                      onChange={CityChange}
                      label="City"
                    >
                      {cities.map((e) => (
                        <MenuItem value={e} key={e}>
                          {e}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" component="h6" p={2}>
                    Zip:
                  </SuiTypography>
                  <FormControl fullWidth>
                    <Select
                      labelId="city_label"
                      id="zip"
                      multiple
                      value={zip}
                      onChange={ZipChange}
                      label="Zip"
                      style={{ width: "100%" }}
                    >
                      {zips.map((e) => (
                        <MenuItem value={e} key={e}>
                          {e}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Record:
                  </SuiTypography>
                  <TextField
                    id="outlined-number"
                    type="number"
                    value={record}
                    InputProps={{ inputProps: { min: 0, max: max } }}
                    onChange={RecordChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </SuiBox>
              </Grid>
            </Grid>
            <Grid container pb={2}>
              <Grid item xs={3}>
                <SuiBox display="flex" justifyContent="center">
                  <SuiTypography variant="p" fontSize="12px" textColor="error">
                    {state_error}
                  </SuiTypography>
                </SuiBox>
              </Grid>
            </Grid>
          </Card>
        </SuiBox>
        {isdisplay == true ? (
          <SuiBox>
            <Snippet title="cURL" code={curlcode}></Snippet>
            <Snippet title="Request URL" code={url}></Snippet>
            <Snippet title="Body" code={payload}></Snippet>
            <Snippet title="Response" code={res}></Snippet>
          </SuiBox>
        ) : null}
      </SuiBox>

      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
