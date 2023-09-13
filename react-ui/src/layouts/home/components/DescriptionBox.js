import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import PropTypes from "prop-types";

function DescriptionBox({ title, description, top }) {
  return (
    <SuiBox display="flex" justifyContent="center" alignItems="center">
      <SuiBox mt={top} width="70%" sx={{ py: 10, borderBottom: "1px solid" }}>
        <SuiBox p={3} display="flex" justifyContent="center" alignItems="center">
          <SuiTypography
            vairant="h1"
            component="p"
            textAlign="center"
            fontSize="72px"
            fontWeight="bold"
            textColor="info"
            fontFamily="'Poppins', sans-serif"
            lineHeight="1.3"
          >
            {title}
          </SuiTypography>
        </SuiBox>
        <SuiBox p={5} display="flex" justifyContent="center" alignItems="center">
          <SuiTypography vairant="body1" component="p" fontWeight="500" fontSize="24px">
            {description}
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </SuiBox>
  );
}
DescriptionBox.defaultProps = {
  title: "",
  description: "",
  top: 0,
};

// Typechecking props for the CoverLayout
DescriptionBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  top: PropTypes.number,
};

export default DescriptionBox;
