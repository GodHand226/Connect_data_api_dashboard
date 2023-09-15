import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PlanCard({ title, description, pricing, plan }) {
  return (
    <SuiBox sx={{ border: "1px solid #DFDFDF" }}>
      <SuiBox px={3} py={3} backgroundColor="#17C2E8" display="flex" justifyContent="center">
        <SuiTypography variant="h4" fontWeight="bold">
          {title}
        </SuiTypography>
      </SuiBox>
      <SuiBox px={4} py={6} display="flex" justifyContent="center">
        <SuiTypography variant="h5" fontWeight="bold">
          {description}
        </SuiTypography>
      </SuiBox>
      <SuiBox p={3} display="flex" justifyContent="center">
        <SuiTypography variant="h5" fontWeight="bold">
          {pricing}
        </SuiTypography>
      </SuiBox>
      <SuiBox p={3} backgroundColor="#f3f3f3" display="flex" justifyContent="center">
        <SuiTypography variant="h4" fontWeight="bold">
          <Link to="/authentication/sign-in">{plan}</Link>
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}
PlanCard.defaultProps = {
  title: "",
  description: "",
  pricing: "",
  plan: "",
};

// Typechecking props for the CoverLayout
PlanCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pricing: PropTypes.string,
  plan: PropTypes.string,
};

export default PlanCard;
