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

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React base styles
// import typography from "assets/theme/base/typography";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function LabelItem({ color, icon, label, size }) {
  //   const { size } = typography;

  return (
    <SuiBox width="100%">
      <SuiBox display="flex" alignItems="center" mb={2}>
        <SuiBox
          backgroundColor={color}
          width={2.5 * size}
          height={2.5 * size}
          borderRadius="sm"
          color="white"
          fontSize={size}
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="md"
          mr={1}
          backgroundGradient
        >
          <Icon>{icon}</Icon>
        </SuiBox>
        <SuiTypography
          variant="caption"
          textTransform="capitalize"
          fontWeight="medium"
          textColor="text"
          fontSize={size}
        >
          {label}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

// Setting default values for the props of LabelItem
LabelItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the LabelItem
LabelItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    component: PropTypes.node.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default LabelItem;
