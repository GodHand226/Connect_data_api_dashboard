import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function PlanCard({ title, description, pricing, plan, checkout }) {
  const openInNewTab = () => {
    const newWindow = window.open(checkout, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
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
          <SuiButton variant="text" onClick={openInNewTab} buttonColor="dark">
            {plan}
          </SuiButton>
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
  checkout: "",
};

// Typechecking props for the CoverLayout
PlanCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pricing: PropTypes.string,
  plan: PropTypes.string,
  checkout: PropTypes.string,
};

export default PlanCard;
