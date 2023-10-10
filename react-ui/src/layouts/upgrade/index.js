// import SuiBox from "components/SuiBox";
// import SuiButton from "components/SuiButton";
// Soft UI Dashboard React components
// import Link from "@mui/material/Link";
// import axios from "axios";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SuiBox from "components/SuiBox";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";
import PlanCard from "./Plancard";
// import { useState } from "react";
// import { API_SERVER } from "../../config/constant";
// import { useAuth } from "../../auth-context/auth.context";
import { Grid } from "@mui/material";
function Upgrade() {
  // let { user } = useAuth();

  // const getCharge = async () => {
  //   let res = "";
  //   try {
  //     res = await axios.post(
  //       `${API_SERVER}/users/payment`,
  //       { alignment },
  //       {
  //         headers: { Authorization: `${user.token}` },
  //       }
  //     );
  //     console.log(res);
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   return res;
  // };
  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={10} display="flex" justifyContent="center">
        <Grid container width={"90%"} justifyContent="space-around" spacing={5}>
          <Grid item xs={12} sm={3}>
            <PlanCard
              title="Pay As You Go"
              description="No subscription No commitment"
              pricing="$0.10 per Record"
              plan="Add fund"
              checkout="https://commerce.coinbase.com/checkout/229175bd-f479-4c98-92ec-529e321ba565"
            ></PlanCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PlanCard
              title="Standard"
              description="Minimum 100k Data Records"
              pricing="$0.08 per Record"
              plan="Upgrade"
              checkout="https://commerce.coinbase.com/checkout/ddef4028-7f8f-48d2-abb2-8b4733d3d019"
            ></PlanCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PlanCard
              title="Professional"
              description="Minimum 500k Data Records"
              pricing="$0.06 per Record"
              plan="Upgrade"
              checkout="https://commerce.coinbase.com/checkout/37b74e8f-e81f-468c-9415-5eee35e805a9"
            ></PlanCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PlanCard
              title="Enterprise"
              description="Minimum 1 Million Data Records"
              pricing="$0.04 per Record"
              plan="Upgrade"
              checkout="https://commerce.coinbase.com/checkout/9c8e82de-a792-4558-9917-6c19ec5d8fdc"
            ></PlanCard>
          </Grid>
        </Grid>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Upgrade;
