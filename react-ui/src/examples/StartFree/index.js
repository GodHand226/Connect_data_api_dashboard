// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import Grid from "@mui/material/Grid";

function StartFree() {
  return (
    <SuiBox mt={10} display="flex" justifyContent="center" alignItems="center">
      <SuiBox sx={{ width: "40%" }}>
        <Link to={"/authentication/sign-up/"}>
          <Card sx={{ borderRadius: "24px", backgroundColor: "#007bff", p: 5 }}>
            <SuiTypography variant="h1" textAlign="center" pb={3} textColor="white">
              Start Free
            </SuiTypography>
            <SuiTypography variant="h4" textAlign="center" textColor="white">
              No Limits, Your Journey, Your Choice.
            </SuiTypography>
            <SuiTypography variant="h4" textAlign="center" textColor="white">
              Free to Start Pay as you go.
            </SuiTypography>
          </Card>
        </Link>
      </SuiBox>
    </SuiBox>
  );
}

export default StartFree;
