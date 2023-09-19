import PropTypes from "prop-types";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
const Snippet = ({ title, code }) => {
  return (
    <SuiBox mb={3}>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" m={1} pl={1} pr={1}>
        <SuiTypography variant="h6">{title}</SuiTypography>
      </SuiBox>
      <SuiBox backgroundColor={"#3b4151"}>
        <SuiTypography
          variant="body2"
          component="pre"
          p={2}
          style={{ color: "white", fontSize: "0.8rem" }}
        >
          {code}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
};

Snippet.defaultProps = {
  title: "",
  code: "{}",
  codecolor: "white",
};

Snippet.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
  codecolor: PropTypes.string,
};

export default Snippet;
