import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Footer, Navbar } from "@/widgets/layout";
import { columndata, typedata } from "@/data";
import routes from "@/routes";

export function Points() {
  const TABLE_HEAD = ["Column", "Type"];
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <div className="relative flex h-[32rem] content-center items-center justify-center pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/lake.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Your Gateway to 500M+ Public Data Records
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We're proud to offer an extensive data repository, comprising
                over 500 million records meticulously sourced from 5,000+
                reputable public data sources. Our mission is to empower you
                with invaluable insights and information, helping you make
                informed decisions. Please note that our data access is
                exclusively available for U.S. residents.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 w-4/6 p-5">
        <div className="my-10">
          <Typography variant="lead">
            We believe in transparency, which is why all our data points are
            provided "as available" directly from the public record sources.
            This means that you get real, unfiltered information straight from
            the most authoritative sources. It's our commitment to accuracy and
            reliability.
          </Typography>
        </div>
        <div>
          <table className="mx-auto w-2/4 min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {columndata.map((item, index) => (
                <tr key={item} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {typedata.at(index)}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}
export default Points;
