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

export function Transparency() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <div className="relative flex h-[32rem] content-center items-center justify-center pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/transparency.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Ensuring Fresh Data Every Time
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We understand the importance of providing our valued users with
                accurate and up-to-date data every time they access our
                services. To achieve this, we have implemented a robust system
                for managing data duplication and indexing. This ensures that
                when you return to buy more data, you receive only the newest
                and most relevant information.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 w-4/6 p-5">
        <div className="my-5">
          <Typography variant="h3" className="mb-5">
            How It Works:
          </Typography>
        </div>
        <div className="my-5 pl-8">
          <Typography variant="lead">
            <ol className="list-decimal">
              <li className="pb-3">
                <strong>User-Specific Index:</strong> When you make your first
                purchase, we assign you a unique identifier. This identifier is
                your passport to accessing data seamlessly in the future.
              </li>
              <li className="pb-3">
                <strong>Storing Data with Unique IDs:</strong> Every data record
                we receive from our sources is associated with a unique
                identifier. This identifier combines your user-specific index
                with a record-specific ID or timestamp.
              </li>
              <li className="pb-3">
                <strong>Handling Duplicate Data:</strong>
                When you return to buy more data, simply provide your
                user-specific index in the API request. We check our database to
                determine the last unique identifier or timestamp associated
                with your account.
              </li>
              <li className="pb-3">
                <strong>No Duplicate Data: </strong> With this information, we
                ensure that you receive only the new data records, those with
                identifiers or timestamps greater than the last one you
                received. This means you never have to worry about getting
                duplicate data.
              </li>
            </ol>
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="h3" className="mb-5">
            Why It Matters:
          </Typography>
        </div>
        <div className="my-5 pl-8">
          <Typography variant="lead">
            <ul className="list-disc">
              <li className="pb-3">
                <strong>Accuracy:</strong> Our system ensures that you always
                have the most accurate and up-to-date information at your
                fingertips.
              </li>
              <li className="pb-3">
                <strong>Efficiency:</strong> You get the data you need without
                sifting through duplicates, saving you time and resources.
              </li>
              <li className="pb-3">
                <strong>Confidence:</strong>
                With our data management system, you can trust the reliability
                of the information you receive.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="lead">
            We are committed to delivering a seamless and efficient data
            experience for our users. Our data duplication and indexing strategy
            is just one way we strive to exceed your expectations. <br />
            <br />
            If you have any questions or need further assistance, please don't
            hesitate to contact us. We're here to ensure your data needs are met
            with excellence.
          </Typography>
        </div>
      </div>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Transparency;
