import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
import StartFree from "examples/StartFree";
import PlanCard from "./Plancard";
import { Grid } from "@mui/material";
import SuiBox from "components/SuiBox";
function Plan() {
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
      <SuiBox mt={15} display="flex" justifyContent="center">
        <Grid container width={"75%"} justifyContent="space-around" spacing={5}>
          <Grid item xs={12} sm={3}>
            <PlanCard
              title="Pay As You Go"
              description="No subscription No commitment"
              pricing="$0.10 per Record"
              plan="Start Now"
            ></PlanCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PlanCard
              title="Standard"
              description="Minimum 100k Data Records"
              pricing="$0.08 per Record"
              plan="Upgrade"
            ></PlanCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PlanCard
              title="Professional"
              description="Minimum 500k Data Records"
              pricing="$0.06 per Record"
              plan="Upgrade"
            ></PlanCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <PlanCard
              title="Enterprise"
              description="Minimum 1 Million Data Records"
              pricing="$0.04 per Record"
              plan="Upgrade"
            ></PlanCard>
          </Grid>
        </Grid>
      </SuiBox>
      <StartFree></StartFree>
      <Footer />
    </PageLayout>
  );
}

export default Plan;
