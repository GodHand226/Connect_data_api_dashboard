import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Menu placement="bottom">
        <MenuHandler>
          <Typography variant="small" color="inherit" className="capitalize">
            <Link to="#" className="flex items-center gap-1 p-1 font-normal">
              {React.createElement(DocumentIcon, {
                className: "w-[18px] h-[18px] opacity-75 mr-1",
              })}
              Data Clarity
            </Link>
          </Typography>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link to="/data_transparency">Data Transparency</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/data_points">Data Points</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/data_lake">Data Lake</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      {routes.map(({ name, route, icon, type, authenticated }) =>
        type === "collapse" && authenticated == false ? (
          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            <Link
              to={route}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          </Typography>
        ) : null
      )}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="ml-2 mr-4 cursor-pointer py-1.5 font-bold">
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse className="bg-white px-4 text-blue-gray-900" open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Data API Connect",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
