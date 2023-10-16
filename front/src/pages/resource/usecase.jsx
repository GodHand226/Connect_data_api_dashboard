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
import routes from "@/routes";

export function Usecase() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <div className="relative flex h-[32rem] content-center items-center justify-center pt-16">
        <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Use Cases
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 w-4/6 p-5">
        <div className="my-5">
          <Typography variant="lead">
            <ol className="list-decimal">
              <li className="pb-5">
                Creating targeted marketing campaigns by building custom lists
                based on consumer demographics.
              </li>
              <li className="pb-5">
                Generating leads by building custom lists of potential customers
                based on specific criteria.
              </li>
              <li className="pb-5">
                Personalizing communication by building custom lists that cater
                to specific consumer interests or preferences.
              </li>
              <li className="pb-5">
                Conducting market research by building custom lists of consumers
                for survey or feedback purposes.
              </li>
              <li className="pb-5">
                Segmenting customers for tailored promotions and offers by
                building custom lists based on purchase history or behavior.
              </li>
              <li className="pb-5">
                Building custom lists for competitor analysis to understand
                consumer preferences in the market.
              </li>
              <li className="pb-5">
                Enhancing customer profiling and segmentation by building custom
                lists with detailed consumer data.
              </li>
              <li className="pb-5">
                Building custom lists for customer retention and loyalty
                programs to engage and retain existing customers.
              </li>
              <li className="pb-5">
                Generating prospect lists for sales teams by building custom
                lists of potential clients or customers.
              </li>
              <li className="pb-5">
                Building custom lists for geographic targeting, allowing
                businesses to focus on specific regions or areas for marketing
                and sales efforts.
              </li>
            </ol>
          </Typography>
        </div>
      </div>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Usecase;
