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
// import Icon from "@mui/material/Icon";
import axios from "axios";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import React, { useEffect } from "react";
// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import Card from "@mui/material/Card";
// Soft UI Dashboard React base styles
// import typography from "assets/theme/base/typography";
import LabelItem from "./labelItem";
// Dashboard layout components
import { API_SERVER } from "../../config/constant";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useAuth } from "../../auth-context/auth.context";

function Dashboard() {
  // const { size } = typography;
  // const { chart, items } = reportsBarChartData;
  const [key, setKey] = React.useState(undefined);
  const [record, setRecord] = React.useState(undefined);
  let { user } = useAuth();
  const getData = async () => {
    try {
      const res = await axios.post(`${API_SERVER}/users/dashboard`, user, {
        headers: { Authorization: `${user.token}` },
      });
      const data = res.data;
      setKey(data["API_KEY"]);
      setRecord(data["Record"]);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "API_KEY" }}
                count={key}
                icon={{ color: "info", component: "key" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "Requests" }}
                count={record}
                icon={{ color: "info", component: "article" }}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <Card>
                <SuiBox p={3}>
                  <SuiBox mb={2}>
                    <SuiTypography variant="h6" textTransform="capitalize">
                      API Information
                    </SuiTypography>
                  </SuiBox>
                  <SuiBox py={1} px={0.5}>
                    <SuiBox
                      display="flex"
                      justify-content="space-between"
                      alignItems="center"
                      mb={2}
                    >
                      <LabelItem
                        color="info"
                        icon="payment"
                        label="Your Payment"
                        size="14"
                      ></LabelItem>
                      <SuiTypography variant="h6">0.00$</SuiTypography>
                    </SuiBox>
                    <SuiBox
                      display="flex"
                      justify-content="space-between"
                      alignItems="center"
                      mb={2}
                    >
                      <LabelItem
                        color="error"
                        icon="touch_app"
                        label="Price per record"
                        size="14"
                      ></LabelItem>
                      <SuiTypography variant="h6">0.05$</SuiTypography>
                    </SuiBox>
                    <SuiBox display="flex" justify-content="space-between" alignItems="center">
                      <LabelItem
                        color="warning"
                        icon="speed"
                        label="Rate Limit"
                        size="14"
                      ></LabelItem>
                      <SuiTypography variant="h6" component="pre">
                        15 requests/min
                      </SuiTypography>
                    </SuiBox>
                  </SuiBox>
                </SuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Requests"
                description={""}
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
