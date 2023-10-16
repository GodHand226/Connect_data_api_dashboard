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

export function DataLake() {
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
                Unleash the Power of Our Public Data Cloud
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We're proud to introduce our revolutionary Public Data Cloud —
                your gateway to a wealth of information sourced from trusted
                Federal, State, and Local Government Agencies, as well as a
                treasure trove of Non-Government Public Data, including
                Telephone Listings and WHOIS Records. With billions of records
                at your fingertips, our cloud is designed to be your go-to
                destination for accurate and up-to-the-minute data.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 w-4/6 p-5">
        <div className="my-5">
          <Typography variant="lead">
            <ol>
              <li className="pb-5">
                Our commitment to accuracy and trust begins with partnering with
                established Federal, State, and Local Government Agencies. Rest
                easy knowing that the data you access is sourced directly from
                authoritative and reliable sources, ensuring that you make
                informed decisions with confidence.
              </li>
              <li className="pb-5">
                We don't stop at government data. Our Public Data Cloud extends
                its reach to encompass Non-Government Public Data, such as
                Telephone Listings. Access the most comprehensive, up-to-date
                information available, so you can connect with individuals and
                businesses seamlessly.
              </li>
              <li className="pb-5">
                Navigating the digital landscape has never been easier. Our
                cloud includes trusted Non-Government Public Data like WHOIS
                Records, allowing you to unravel the intricate web of online
                domains and ownership information with unparalleled precision.
              </li>
              <li className="pb-5">
                Our Public Data Cloud boasts an immense repository of data,
                offering you access to billions of records. What's more, we've
                optimized it to be one screaming fast cloud! Say goodbye to
                sluggish data retrieval and welcome real-time access to the
                information you need.
              </li>
              <li className="pb-5">
                Whether you're a researcher, business professional, or data
                enthusiast, our Public Data Cloud is your passport to accurate,
                reliable, and lightning-fast data. Discover the possibilities,
                make data-driven decisions, and experience the future of data
                access today!
              </li>
              <li className="pb-5">
                Ready to embark on your data journey? Join us.
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

export default DataLake;
