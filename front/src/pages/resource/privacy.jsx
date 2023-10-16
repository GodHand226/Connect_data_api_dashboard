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

export function Privacy() {
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
                Privacy Policy
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 w-4/6 p-5">
        <div className="my-5">
          <Typography variant="lead">
            We prioritize the protection of consumer data and are committed to
            complying with relevant data protection and privacy laws. We clearly
            outline how we collect, store, and utilize consumer data on our
            website. This includes specifying the purposes for which the data is
            collected and used, as well as any third parties with whom it may be
            shared. We also explain how we obtain consent from individuals for
            data collection and usage and provide options for individuals to opt
            out or unsubscribe from marketing communications. We take data
            security seriously and have implemented robust measures to protect
            consumer data from unauthorized access, breaches, or misuse. We
            provide details on the security practices we have in place to
            safeguard the data we collect. We are committed to complying with
            all applicable laws and regulations governing data privacy, consumer
            protection, and marketing practices. We emphasize our adherence to
            legal requirements and best practices to ensure transparency and
            compliance in all aspects of our operations. We believe in
            transparency and provide individuals with clear information on how
            they can access, update, or request the deletion of their personal
            data. We provide contact information for individuals to reach out to
            us with any privacy-related concerns or inquiries. If our services
            are not intended for individuals below a certain age, we clearly
            state the minimum age requirement. We implement measures to verify
            user ages and ensure compliance with legal requirements. If we share
            consumer data with third parties, we disclose the types of
            organizations or entities involved and the purposes of such sharing.
            We emphasize our commitment to data protection when collaborating
            with external parties. If we engage in marketing activities, we
            ensure compliance with relevant marketing laws. We provide clear
            opt-out mechanisms for direct marketing communications and adhere to
            specific requirements for telemarketing or electronic
            communications, as mandated by applicable laws. To limit our
            responsibility for any damages or losses arising from the use of our
            services or reliance on the information provided, we include a
            disclaimer of liability clause. This clause helps define the extent
            of our liability and user responsibilities when interacting with our
            services.
          </Typography>
        </div>
      </div>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Privacy;
