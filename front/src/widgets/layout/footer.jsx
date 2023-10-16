import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pb-6 pt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mb-8 mt-6 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 w-max lg:mt-0">
            <div key={menus.name}>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 block font-medium uppercase"
              >
                {menus.name}
              </Typography>
              <ul className="mt-3">
                {menus.items.map((item) => (
                  <li key={item.name}>
                    <Typography
                      as="a"
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                      variant="small"
                      className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                    >
                      {item.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Data API Connect",
  description: "You can find people information easily",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/dataapiconnect?mibextid=ZbWKwL",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://x.com/dataapiconnect?s=11",
    },
    {
      color: "blue",
      name: "linkedin",
      path: "https://www.linkedin.com/company/dataapiconnect/",
    },
  ],
  menus: {
    name: "useful links",
    items: [
      {
        name: "Terms of Service",
        path: "/terms",
      },
      { name: "Privacy Policy", path: "/privacy" },
      {
        name: "Use case",
        path: "/usecase",
      },
      {
        name: "Contact US",
        path: "/contact",
      },
    ],
  },

  copyright: <>Copyright © 2017-2023 Data API Connect</>,
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
