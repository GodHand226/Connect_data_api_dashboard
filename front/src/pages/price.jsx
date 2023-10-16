import React, { useState } from "react";
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
import { UsersIcon } from "@heroicons/react/24/solid";
import { Navbar, Footer, Pricing } from "@/widgets/layout";
import { Pay, Standard, Professional, Enterprise } from "@/widgets/message";
import routes from "@/routes";

export function Price() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const showModal = () => setOpen(!open);
  const showModal1 = () => setOpen1(!open1);
  const showModal2 = () => setOpen2(!open2);
  const showModal3 = () => setOpen3(!open3);
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <div className="relative flex h-screen content-center items-center justify-center pb-16 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Cheap and efficient pricing for all your needs!
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Looking for a great deal on DataAPIConnect? Look no further! We
                offer the most competitive pricing in the industry, without
                sacrificing quality or customer service.
                <br />
                <br />
                We understand that every budget is different, so we offer a
                variety of pricing options to fit your needs. Whether you're
                looking for a one-time purchase or a long-term contract, we have
                a solution that's right for you.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Pricing
        pay={showModal}
        standard={showModal1}
        professional={showModal2}
        enterprise={showModal3}
      />
      <Pay open={open} handler={showModal}></Pay>
      <Standard open={open1} handler={showModal1}></Standard>
      <Professional open={open2} handler={showModal2}></Professional>
      <Enterprise open={open3} handler={showModal3}></Enterprise>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Price;
