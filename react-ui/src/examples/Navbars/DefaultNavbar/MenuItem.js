import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import SuiBox from "components/SuiBox";
import Icon from "@mui/material/Icon";
import SuiTypography from "components/SuiTypography";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SuiBox
      //   component={Link}
      //   to={route}
      mx={1}
      p={1}
      display="flex"
      alignItems="center"
      className="cursor-pointer user-select-none"
    >
      <Icon className={`vertical-middle text-secondary`}>description</Icon>
      <SuiTypography
        variant="button"
        fontWeight="regular"
        textColor={"dark"}
        textTransform="capitalize"
        customClass="w-100 line-height-0"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        &nbsp;Data Clarity
      </SuiTypography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to="/data/cloud" onClick={handleClose}>
          Data Cloud
        </MenuItem>
        <MenuItem component={Link} to="/data/points" onClick={handleClose}>
          Datapoints
        </MenuItem>
        <MenuItem component={Link} to="/data/transparency" onClick={handleClose}>
          Data Transparency
        </MenuItem>
      </Menu>
    </SuiBox>
  );
}
