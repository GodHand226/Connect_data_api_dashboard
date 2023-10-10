// import Card from "@mui/material/Card";
import ToggleButton from "@mui/material/ToggleButton";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import { number } from "prop-types";

function BillingCard({ price }) {
  return (
    <ToggleButton value={price} sx={{ marginRight: "10px" }}>
      {/* <Card sx={{ width: "100px", height: "100px" }}>hello</Card> */}
      <SuiBox>
        <SuiBox px={6} py={10} sx={{ borderBottom: "1px solid" }}>
          <SuiTypography variant="h3">Records</SuiTypography>
          <SuiTypography variant="h3">{price * 20}</SuiTypography>
        </SuiBox>
        <SuiBox>
          <SuiTypography variant="h3" py={5}>
            {price}$
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </ToggleButton>
  );
}

BillingCard.defaultProps = {
  price: "10",
};
BillingCard.propTypes = {
  price: number,
};
export default BillingCard;
