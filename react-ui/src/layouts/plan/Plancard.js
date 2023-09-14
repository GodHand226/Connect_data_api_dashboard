import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import PropTypes from "prop-types";

function PlanCard({ title, description, pricing, plan }) {
  return (
    <SuiBox mt={2} ml={2}>
      <SuiTypography variant="h5">{title}</SuiTypography>
      <SuiBox mt={2} width="95%" ml={3}>
        <SuiTypography vairant="body1" component="p" fontWeight="500" fontSize="24px">
          {description}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}
PlanCard.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the CoverLayout
PlanCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PlanCard;
